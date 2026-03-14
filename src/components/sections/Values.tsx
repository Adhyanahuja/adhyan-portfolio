"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { values } from "@/data/values";

function KineticValue({
  value,
}: {
  value: { number: string; title: string; description: string };
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.6, 1]);
  const titleColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#3f3f46", "#f5f5f7"]
  );

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 items-start py-16"
    >
      <motion.span
        style={{ opacity }}
        className="text-5xl font-extralight gradient-text"
      >
        {value.number}
      </motion.span>
      <div>
        <motion.h3
          style={{
            scale,
            color: titleColor,
          }}
          className="text-[var(--font-size-title)] font-semibold leading-snug mb-4 origin-left"
        >
          {value.title}
        </motion.h3>
        <motion.p
          style={{ opacity }}
          className="text-[var(--color-secondary)] text-[var(--font-size-body)] leading-relaxed max-w-2xl"
        >
          {value.description}
        </motion.p>
      </div>
    </motion.div>
  );
}

export function Values() {
  return (
    <section className="px-6 py-[var(--spacing-section)] bg-[var(--color-bg-alt)] dot-grid section-divider">
      <div className="mx-auto max-w-6xl">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[var(--color-accent)] text-sm uppercase tracking-[0.25em] mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Philosophy
        </motion.p>

        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[var(--font-size-headline)] font-bold tracking-tight text-[var(--color-primary)] mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          What drives me
        </motion.h2>

        <div className="divide-y divide-white/5">
          {values.map((value) => (
            <KineticValue key={value.number} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
}
