"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { NumberCounter } from "@/components/ui/NumberCounter";
import { experiences, type TimelineType } from "@/data/experience";

const typeConfig: Record<
  TimelineType,
  { label: string; color: string; dotColor: string }
> = {
  work: {
    label: "Work",
    color: "text-blue-400",
    dotColor: "from-blue-400 to-blue-600",
  },
  education: {
    label: "Education",
    color: "text-emerald-400",
    dotColor: "from-emerald-400 to-emerald-600",
  },
  achievement: {
    label: "Achievement",
    color: "text-amber-400",
    dotColor: "from-amber-400 to-amber-600",
  },
  leadership: {
    label: "Leadership",
    color: "text-purple-400",
    dotColor: "from-purple-400 to-purple-600",
  },
};

function YearMarker({ year }: { year: number }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="relative flex items-center justify-center"
    >
      {/* Desktop */}
      <div className="hidden md:flex justify-center w-full">
        <div className="relative z-10 rounded-full px-6 py-2 bg-[var(--color-bg-alt)] border border-white/10 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
          <span
            className="text-sm font-semibold gradient-text"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {year}
          </span>
        </div>
      </div>
      {/* Mobile */}
      <div className="md:hidden flex gap-6 w-full items-center">
        <div className="flex flex-col items-center">
          <div className="relative z-10 rounded-full px-4 py-1.5 bg-[var(--color-bg-alt)] border border-white/10 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
            <span
              className="text-xs font-semibold gradient-text"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {year}
            </span>
          </div>
        </div>
        <div className="h-px flex-1 bg-white/5" />
      </div>
    </motion.div>
  );
}

function CardContent({ exp }: { exp: (typeof experiences)[0] }) {
  const config = typeConfig[exp.type];

  return (
    <>
      <div className="flex items-center gap-3 mb-2">
        <span
          className={`text-[10px] uppercase tracking-[0.15em] font-medium ${config.color}`}
        >
          {config.label}
        </span>
        <span className="text-[var(--color-tertiary)] text-[10px]">·</span>
        <span className="text-xs tracking-[0.1em] text-[var(--color-accent)]">
          {exp.period}
        </span>
      </div>
      <h3
        className="text-xl font-semibold text-[var(--color-primary)] mb-1"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {exp.company}
      </h3>
      <p className="text-[var(--color-secondary)] text-sm mb-4">
        {exp.role}
        {exp.location && ` · ${exp.location}`}
      </p>
      <p className="text-[var(--color-secondary)] text-[var(--font-size-small)] leading-relaxed mb-6">
        {exp.description}
      </p>

      {exp.metrics.length > 0 && (
        <div className="flex flex-wrap gap-6">
          {exp.metrics.map((metric, mi) => (
            <div key={mi}>
              <p className="text-2xl font-bold gradient-text">
                <NumberCounter value={metric.value} suffix={metric.suffix} />
              </p>
              <p className="text-xs text-[var(--color-tertiary)] mt-1">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

function TimelineCard({
  exp,
  isLeft,
}: {
  exp: (typeof experiences)[0];
  isLeft: boolean;
}) {
  const config = typeConfig[exp.type];

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative flex items-center"
    >
      {/* Desktop: alternating sides */}
      <div className="hidden md:grid md:grid-cols-[1fr_48px_1fr] w-full items-center">
        {/* Left column */}
        <div className="flex justify-end">
          {isLeft ? (
            <div className="glass-card rounded-2xl p-8 hover:shadow-[var(--shadow-glow)] hover:border-[rgba(59,130,246,0.2)] transition-all duration-500 w-full">
              <CardContent exp={exp} />
            </div>
          ) : (
            <div />
          )}
        </div>

        {/* Center dot on timeline */}
        <div className="flex justify-center">
          <div
            className={`w-4 h-4 rounded-full bg-gradient-to-br ${config.dotColor} ring-4 ring-[var(--color-bg-alt)] z-10`}
          />
        </div>

        {/* Right column */}
        <div className="flex justify-start">
          {!isLeft ? (
            <div className="glass-card rounded-2xl p-8 hover:shadow-[var(--shadow-glow)] hover:border-[rgba(59,130,246,0.2)] transition-all duration-500 w-full">
              <CardContent exp={exp} />
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* Mobile: always left-aligned with line on left */}
      <div className="md:hidden flex gap-6 w-full">
        <div className="relative flex flex-col items-center">
          <div
            className={`w-3 h-3 rounded-full bg-gradient-to-br ${config.dotColor} ring-4 ring-[var(--color-bg-alt)] z-10 mt-8`}
          />
        </div>
        <div className="glass-card rounded-2xl p-6 flex-1">
          <CardContent exp={exp} />
        </div>
      </div>
    </motion.div>
  );
}

type TimelineEntry =
  | { kind: "year"; year: number }
  | { kind: "card"; exp: (typeof experiences)[0]; index: number };

export function ImpactTimeline() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 80%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Build items array with year markers interspersed
  const items: TimelineEntry[] = [];
  let lastYear: number | null = null;

  experiences.forEach((exp, index) => {
    if (exp.year !== lastYear) {
      items.push({ kind: "year", year: exp.year });
      lastYear = exp.year;
    }
    items.push({ kind: "card", exp, index });
  });

  // Track card index for alternating sides
  let cardCount = 0;

  return (
    <section
      id="journey"
      className="bg-[var(--color-bg-alt)] dot-grid px-6 py-[var(--spacing-section)]"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[var(--color-accent)] text-sm uppercase tracking-[0.25em] mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Journey
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[var(--font-size-headline)] font-bold tracking-tight text-[var(--color-primary)] mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          The trajectory so far
        </motion.h2>

        {/* Legend */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 mb-16"
        >
          {(Object.entries(typeConfig) as [TimelineType, (typeof typeConfig)[TimelineType]][]).map(
            ([key, config]) => (
              <div key={key} className="flex items-center gap-2">
                <div
                  className={`w-2.5 h-2.5 rounded-full bg-gradient-to-br ${config.dotColor}`}
                />
                <span className="text-xs text-[var(--color-tertiary)]">
                  {config.label}
                </span>
              </div>
            ),
          )}
        </motion.div>

        {/* Timeline */}
        <div ref={sectionRef} className="relative">
          {/* Vertical line - desktop center, mobile left */}
          <div className="absolute top-0 bottom-0 left-[7px] md:left-1/2 md:-translate-x-px w-px bg-white/5">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-accent-purple)]"
            />
          </div>

          {/* Items */}
          <div className="space-y-12 md:space-y-16">
            {items.map((item, i) => {
              if (item.kind === "year") {
                return <YearMarker key={`year-${item.year}`} year={item.year} />;
              }

              const isLeft = cardCount % 2 === 0;
              cardCount++;

              return (
                <TimelineCard
                  key={`card-${i}`}
                  exp={item.exp}
                  isLeft={isLeft}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
