'use client';

import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { db } from '@/lib/firebase';
import { doc, onSnapshot, runTransaction, DocumentReference } from 'firebase/firestore';
import { Button } from '@/components/ui/button';

interface LikeButtonProps {
  wallpaperId: string;
}

export function LikeButton({ wallpaperId }: LikeButtonProps) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const docRef = doc(db, 'likes', wallpaperId) as DocumentReference<{ likes: number }>;

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
    <Button variant="outline" size="icon" onClick={handleLike} className="flex items-center gap-2">
      <Heart className={`h-5 w-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
      <span>{likes}</span>
    </Button>
  );
}
