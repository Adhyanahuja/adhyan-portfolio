"use client";

import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
}

const container = {
  hidden: {},
  visible: (delay: number) => ({
    transition: {
      staggerChildren: 0.03,
      delayChildren: delay,
    },
  }),
};

const charVariant = {
  hidden: {
    opacity: 0,
    y: 80,
    rotateX: 90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
};

export function SplitText({
  text,
  className,
  as: Tag = "h1",
  delay = 0,
}: SplitTextProps) {
  const words = text.split(" ");

  return (
    <Tag className={className} style={{ perspective: "1000px", fontFamily: "var(--font-display)" }}>
      <motion.span
        variants={container}
        initial="hidden"
        animate="visible"
        custom={delay}
        className="inline-flex flex-wrap"
      >
        {words.map((word, wi) => (
          <span key={wi} className="inline-flex mr-[0.25em]">
            {word.split("").map((char, ci) => (
              <motion.span
                key={`${wi}-${ci}`}
                variants={charVariant}
                className="inline-block"
                style={{ transformOrigin: "bottom center" }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
