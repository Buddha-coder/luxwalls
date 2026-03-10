'use client';

import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { doc, runTransaction } from 'firebase/firestore';
import { cn } from '@/lib/utils';

interface LikeButtonProps {
  wallpaperId: string;
}

export function LikeButton({ wallpaperId }: LikeButtonProps) {
  const firestore = useFirestore();
  const [isLiked, setIsLiked] = useState(false);

  // Sync with global stats collection
  const statsRef = useMemoFirebase(() => {
    if (!firestore) return null;
    return doc(firestore, 'stats', wallpaperId);
  }, [firestore, wallpaperId]);

  const { data: stats } = useDoc(statsRef);
  const likesCount = stats?.likes || 0;

  // Track local like state in localStorage to prevent spamming
  useEffect(() => {
    const likedWallpapers = JSON.parse(localStorage.getItem('luxwalls_likes') || '[]');
    setIsLiked(likedWallpapers.includes(wallpaperId));
  }, [wallpaperId]);

  const handleLike = async () => {
    if (!firestore || !statsRef) return;
    
    // Toggle state
    const newLikedStatus = !isLiked;
    setIsLiked(newLikedStatus);

    // Update local storage
    const likedWallpapers = JSON.parse(localStorage.getItem('luxwalls_likes') || '[]');
    if (newLikedStatus) {
      localStorage.setItem('luxwalls_likes', JSON.stringify([...likedWallpapers, wallpaperId]));
    } else {
      localStorage.setItem('luxwalls_likes', JSON.stringify(likedWallpapers.filter((id: string) => id !== wallpaperId)));
    }

    try {
      await runTransaction(firestore, async (transaction) => {
        const docSnap = await transaction.get(statsRef);
        const currentLikes = docSnap.exists() ? (docSnap.data().likes || 0) : 0;
        const newLikes = newLikedStatus ? currentLikes + 1 : Math.max(0, currentLikes - 1);
        transaction.set(statsRef, { likes: newLikes }, { merge: true });
      });
    } catch {
      console.warn("Synchronization error with Appreciation engine.");
    }
  };

  return (
    <button 
      onClick={handleLike} 
      className="relative glass-container !rounded-full border border-white/5 overflow-hidden flex-1 group/like transition-all duration-300 active:scale-95 py-2.5 min-h-[50px] select-none"
    >
      <div className="glass-filter opacity-30" />
      <div className={cn(
        "glass-overlay transition-colors duration-500",
        isLiked ? "bg-primary/10" : "bg-white/[0.01]"
      )} />
      
      <div className="glass-content flex flex-col items-center justify-center text-center p-1 space-y-0.5">
        <Heart className={cn(
          "h-3 w-3 transition-all duration-500",
          isLiked ? "fill-primary text-primary scale-110" : "text-white/30 group-hover/like:text-white"
        )} />
        <div className="space-y-0">
          <p className="text-[9px] font-black text-white leading-none">{likesCount}</p>
          <p className="text-[6px] uppercase tracking-[0.2em] text-white/20 font-black">Appreciation</p>
        </div>
      </div>
    </button>
  );
}