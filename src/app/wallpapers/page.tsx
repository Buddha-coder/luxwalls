"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const products = [
  {
    id: 'product-1',
    name: 'Gilded Marble',
    category: 'Abstract',
  },
  {
    id: 'product-2',
    name: 'Emerald Damask',
    category: 'Classic',
  },
  {
    id: 'product-3',
    name: 'Onyx Bloom',
    category: 'Floral',
  },
  {
    id: 'product-4',
    name: 'Art Deco Arch',
    category: 'Geometric',
  },
  {
    id: 'product-5',
    name: 'Silk Weave',
    category: 'Textured',
  },
  {
    id: 'product-6',
    name: 'Celestial Map',
    category: 'Whimsical',
  },
];


export default function WallpapersPage() {
  return (
    <main className="min-h-screen bg-executive-black pt-32 px-6 pb-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
          viewport={{ once: true }}
          className="text-champagne-gold uppercase text-sm mb-4"
        >
          Exclusive Collection
        </motion.h2>
        <h1 className="text-soft-ivory text-4xl md:text-5xl font-serif">Curated Masterpieces</h1>
      </div>

      {/* Optimized Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((item, index) => {
          const productImage = PlaceHolderImages.find(p => p.id === item.id);
          if (!productImage) return null;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[9/16] overflow-hidden rounded-sm bg-zinc-900"
            >
              {/* Image with Hover Zoom */}
              <Image
                src={productImage.imageUrl}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                data-ai-hint={productImage.imageHint}
              />
              
              {/* Luxury Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-executive-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content on Hover */}
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-champagne-gold text-xs tracking-widest uppercase mb-2">{item.category}</p>
                <h3 className="text-soft-ivory text-xl font-serif">{item.name}</h3>
              </div>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}
