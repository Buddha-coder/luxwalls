'use client';

import { useState, useEffect, useMemo } from 'react';
import { Heart } from 'lucide-react';
import { db } from '@/lib/firebase';
import { doc, onSnapshot, runTransaction, DocumentReference } from 'firebase/firestore';
import { cn } from '@/lib/utils';

interface LikeButtonProps {
  wallpaperId: string;
}

export function LikeButton({ wallpaperId }: LikeButtonProps) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const docRef = useMemo(() => doc(db, 'likes', wallpaperId) as DocumentReference<{ likes: number }>, [wallpaperId]);

  useEffect(() => {
    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        setLikes(doc.data().likes);
      }
    });

    return () => unsubscribe();
  }, [docRef]);

  const handleLike = async () => {
    try {
      await runTransaction(db, async (transaction) => {
        const docSnap = await transaction.get(docRef);
        const newLikes = (docSnap.exists() ? docSnap.data().likes : 0) + (isLiked ? -1 : 1);
        transaction.set(docRef, { likes: newLikes }, { merge: true });
        setIsLiked(!isLiked);
      });
    } catch (error) {
      console.error("Transaction failed: ", error);
    }
  };

  return (
    <button 
      onClick={handleLike} 
      className="relative glass-container !rounded-[2.5rem] border border-white/5 overflow-hidden flex-1 group/like transition-all duration-300 active:scale-95 py-4 min-h-[70px]"
    >
      <div className="glass-filter opacity-40" />
      <div className={cn(
        "glass-overlay transition-colors duration-500",
        isLiked ? "bg-red-500/10" : "bg-white/[0.02]"
      )} />
      
      <div className="glass-content flex flex-col items-center justify-center text-center p-2 space-y-1.5">
        <Heart className={cn(
          "h-4 w-4 transition-all duration-500",
          isLiked ? "fill-red-500 text-red-500 scale-110" : "text-white/40 group-hover/like:text-white"
        )} />
        <div className="space-y-0.5">
          <p className="text-[10px] font-black text-white leading-none">{likes}</p>
          <p className="text-[7px] uppercase tracking-[0.2em] text-white/30 font-black">Appreciation</p>
        </div>
      </div>

      {/* Burst Effect */}
      {isLiked && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-red-500/20 blur-xl animate-pulse" />
        </div>
      )}
    </button>
  );
}
