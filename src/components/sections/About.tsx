"use client";

import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";

export function About() {
  return (
    <section
      id="about"
      className="px-6 py-[var(--spacing-section)] bg-[var(--color-bg)] section-divider"
    >
      <div className="mx-auto max-w-6xl">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[var(--color-accent)] text-sm uppercase tracking-[0.25em] mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Operator definition */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="border-l-2 border-[var(--color-accent)] pl-8"
          >
            <h2
              className="text-[var(--font-size-headline)] font-bold tracking-tight mb-2 text-[var(--color-primary)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              op·er·a·tor
            </h2>
            <p className="text-[var(--color-accent)] italic mb-8">
              /ˈɒpəreɪtər/ · noun
            </p>

            <div className="space-y-6">
              <div>
                <span className="text-[var(--color-accent)] text-sm font-medium">
                  1.
                </span>
                <p className="text-[var(--color-primary)] text-[var(--font-size-body)] leading-relaxed mt-1">
                  A person who acts with clarity and decisiveness — turning
                  complex problems into structured, high-impact outcomes.
                </p>
              </div>
              <div>
                <span className="text-[var(--color-accent)] text-sm font-medium">
                  2.
                </span>
                <p className="text-[var(--color-primary)] text-[var(--font-size-body)] leading-relaxed mt-1">
                  Someone who bridges the gap between deep technical capability
                  and strategic business thinking. Equally comfortable building
                  ML pipelines and presenting insights to leadership.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Narrative */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <p className="text-[var(--font-size-title)] font-semibold leading-snug gradient-text"
              style={{ fontFamily: "var(--font-display)" }}
            >
              I turn pressure into progress.
            </p>

            <p className="text-[var(--color-secondary)] text-[var(--font-size-body)] leading-relaxed">
              I am a strategic operator who builds things that matter. Currently
              at{" "}
              <span className="text-[var(--color-accent)] font-medium">
                D. E. Shaw
              </span>
              , I support data-driven decision-making through analytics,
              modeling, and structured reporting. Previously, I built AI systems
              at{" "}
              <span className="text-[var(--color-accent)] font-medium">
                Piramal Finance
              </span>{" "}
              that automated 22,000 hours of manual work monthly.
            </p>

            <p className="text-[var(--color-secondary)] text-[var(--font-size-body)] leading-relaxed">
              I bring 1.5 years of experience across financial analytics,
              machine learning, and applied data science, complemented by a{" "}
              <span className="text-[var(--color-accent)] font-medium">
                dual degree from BITS Pilani
              </span>{" "}
              (B.E. Electrical & Electronics + M.Sc. Mathematics) and a minor in
              Data Science.
            </p>

            <p className="text-[var(--color-secondary)] text-[var(--font-size-body)] leading-relaxed">
              I am particularly interested in problems at the intersection of
              data, decision science, and business strategy — where rigorous
              analysis meets real-world impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
