"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface RevealImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function RevealImage({ src, alt, className = "" }: RevealImageProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Overlay bar that wipes across - accent colored */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={isInView ? { x: "100%" } : { x: "-100%" }}
        transition={{
          duration: 1,
          ease: [0.77, 0, 0.175, 1],
        }}
        className="absolute inset-0 z-10 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-purple)]"
      />

      {/* Image with clip-path reveal */}
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)", scale: 1.15 }}
        animate={
          isInView
            ? { clipPath: "inset(0 0% 0 0)", scale: 1 }
            : { clipPath: "inset(0 100% 0 0)", scale: 1.15 }
        }
        transition={{
          clipPath: {
            duration: 1.2,
            ease: [0.77, 0, 0.175, 1],
            delay: 0.3,
          },
          scale: {
            duration: 1.8,
            ease: [0.25, 0.4, 0.25, 1] as const,
            delay: 0.3,
          },
        }}
        className="relative w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    </div>
  );
}
