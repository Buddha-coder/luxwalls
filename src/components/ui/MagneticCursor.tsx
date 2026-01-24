"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // 1. Mouse Movement Tracker
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // 2. Hover Detection Logic
    // This will check if the mouse is over a Button, Link or image
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // If the element is clickable (A, BUTTON) or has the 'data-hover' attribute
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.hasAttribute("data-hover")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Note: 'md:block' will ensure this is not visible on mobile */}

      {/* 1. The Small Center Dot (Moves Instantly) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-champagne-gold rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - 4, // Center aligning
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1, // Dot disappears on hover (Ring takes focus)
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />

      {/* 2. The Magnetic Ring (Moves with Delay/Physics) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-champagne-gold rounded-full pointer-events-none z-[9998] hidden md:block"
        animate={{
          x: mousePosition.x - 16, // Center aligning (width/2)
          y: mousePosition.y - 16,
          scale: isHovering ? 2.5 : isClicking ? 0.8 : 1, // Gets bigger on hover, smaller on click
          opacity: isHovering ? 1 : 0.6,
          backgroundColor: isHovering
            ? "rgba(201, 162, 77, 0.1)"
            : "transparent", // Light gold fill on hover
          borderColor: isHovering ? "rgba(201, 162, 77, 0.3)" : "#C9A24D",
        }}
        transition={{
          type: "spring",
          stiffness: 150, // Lower is slower/lazier
          damping: 15, // Smoothness control
          mass: 0.5, // Weight feel
        }}
      />
    </>
  );
}
