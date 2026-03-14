"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainerSlow } from "@/lib/animations";
import { testimonials } from "@/data/testimonials";
import Image from "next/image";

export function Recommendations() {
  return (
    <section className="px-6 py-[var(--spacing-section)] bg-[var(--color-bg-alt)] dot-grid">
      <div className="mx-auto max-w-6xl">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[var(--color-accent)] text-sm uppercase tracking-[0.25em] mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Recommendations
        </motion.p>

        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[var(--font-size-headline)] font-bold tracking-tight text-[var(--color-primary)] mb-16"
          style={{ fontFamily: "var(--font-display)" }}
        >
          What others say
        </motion.h2>

        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass-card rounded-2xl p-10 border-t-2 border-t-[var(--color-accent)]/20"
            >
              {/* Quote mark */}
              <svg
                className="w-10 h-10 mb-6 gradient-text"
                fill="currentColor"
                viewBox="0 0 32 32"
                style={{ WebkitTextFillColor: "unset" }}
              >
                <defs>
                  <linearGradient id={`quote-grad-${index}`} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="var(--color-accent)" />
                    <stop offset="100%" stopColor="var(--color-accent-purple)" />
                  </linearGradient>
                </defs>
                <path
                  fill={`url(#quote-grad-${index})`}
                  d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"
                />
              </svg>

              <p className="text-[var(--color-primary)] text-[var(--font-size-body)] leading-relaxed italic mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[var(--color-accent)]/20">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[var(--color-primary)] text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-[var(--color-tertiary)] text-xs">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
