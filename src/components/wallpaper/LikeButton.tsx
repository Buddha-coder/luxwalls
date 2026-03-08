'use client';

import { useState, useEffect, useMemo } from 'react';
import { Heart } from 'lucide-react';
import { useFirestore } from '@/firebase';
import { doc, onSnapshot, runTransaction, DocumentReference } from 'firebase/firestore';
import { cn } from '@/lib/utils';

interface LikeButtonProps {
  wallpaperId: string;
}

export function LikeButton({ wallpaperId }: LikeButtonProps) {
  const firestore = useFirestore();
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const docRef = useMemo(() => {
    if (!firestore) return null;
    return doc(firestore, 'likes', wallpaperId) as DocumentReference<{ likes: number }>;
  }, [firestore, wallpaperId]);

  useEffect(() => {
    if (!docRef) return;

    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        setLikes(doc.data().likes);
      } else {
        setLikes(0);
      }
    });

    return () => unsubscribe();
  }, [docRef]);

  const handleLike = async () => {
    if (!firestore || !docRef) return;

    try {
      await runTransaction(firestore, async (transaction) => {
        const docSnap = await transaction.get(docRef);
        const currentLikes = docSnap.exists() ? docSnap.data().likes : 0;
        const newLikes = isLiked ? Math.max(0, currentLikes - 1) : currentLikes + 1;
        
        transaction.set(docRef, { likes: newLikes }, { merge: true });
        setIsLiked(!isLiked);
      });
    } catch (error) {
      // Errors are handled by the global listener, but we log for dev clarity
      console.warn("Likability transaction restricted or failed.", error);
    }
  };

  return (
    <button 
      onClick={handleLike} 
      className="relative glass-container !rounded-full border border-white/5 overflow-hidden flex-1 group/like transition-all duration-300 active:scale-95 py-3 min-h-[60px] select-none"
    >
      <div className="glass-filter opacity-40" />
      <div className={cn(
        "glass-overlay transition-colors duration-500",
        isLiked ? "bg-primary/10" : "bg-white/[0.02]"
      )} />
      
      <div className="glass-content flex flex-col items-center justify-center text-center p-2 space-y-1">
        <Heart className={cn(
          "h-3.5 w-3.5 transition-all duration-500",
          isLiked ? "fill-primary text-primary scale-110" : "text-white/40 group-hover/like:text-white"
        )} />
        <div className="space-y-0.5">
          <p className="text-[10px] font-black text-white leading-none">{likes}</p>
          <p className="text-[7px] uppercase tracking-[0.2em] text-white/30 font-black">Appreciation</p>
        </div>
      </div>

      {isLiked && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary/20 blur-xl animate-pulse" />
        </div>
      )}
    </button>
  );
}