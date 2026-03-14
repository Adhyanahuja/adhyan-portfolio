"use client";

import Image from "next/image";

interface MomentMarqueeProps {
  images: string[];
  reverse?: boolean;
}

export function MomentMarquee({
  images,
  reverse = false,
}: MomentMarqueeProps) {
  const duplicated = [...images, ...images];

  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-4 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ width: `${duplicated.length * 320}px` }}
      >
        {duplicated.map((src, i) => (
          <div
            key={i}
            className="relative h-56 w-72 shrink-0 overflow-hidden rounded-2xl border border-white/5"
          >
            <Image
              src={src}
              alt={`Moment ${(i % images.length) + 1}`}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="288px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
