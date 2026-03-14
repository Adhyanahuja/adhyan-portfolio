"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { NumberCounter } from "@/components/ui/NumberCounter";

const leadershipItems = [
  {
    title: "Team Lead — Mathematics Association",
    org: "BITS Pilani",
    description:
      "Led a 4-member team, executed 10+ events, and increased participation by 14% using predictive analytics and A/B testing.",
    metrics: [
      { value: 10, suffix: "+", label: "Events Led" },
      { value: 14, suffix: "%", label: "Participation Increase" },
    ],
  },
  {
    title: "Campus Ambassador — APOGEE",
    org: "BITS Pilani",
    description:
      "Promoted the AAROHAN IQ exam across institutes and managed logistics for 1,200+ students.",
    metrics: [{ value: 1200, suffix: "+", label: "Students Managed" }],
  },
];

const volunteeringItems = [
  {
    title: "Community Volunteer",
    org: "Janaagraha",
    description:
      "Helped secure ₹15L funding for public infrastructure improvements. Conducted civic audits on water and sewage systems.",
    highlight: "₹15L secured for public infrastructure",
  },
  {
    title: "Plantation Drive Volunteer",
    org: "Nyati Group · 2015 — Present",
    description:
      "Active contributor to urban environmental sustainability for over 10 years.",
    highlight: "10+ years of consistent contribution",
  },
];

const causes = [
  "Education",
  "Environment",
  "Poverty Alleviation",
  "Human Rights",
];
const languages = ["English", "Hindi", "Spanish"];

export function Leadership() {
  return (
    <section className="px-6 py-[var(--spacing-section)] bg-[var(--color-bg)] section-divider">
      <div className="mx-auto max-w-6xl">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[var(--color-accent)] text-sm uppercase tracking-[0.25em] mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Leadership & Impact
        </motion.p>

        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[var(--font-size-headline)] font-bold tracking-tight text-[var(--color-primary)] mb-16"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Beyond the desk
        </motion.h2>

        {/* Leadership roles */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
        >
          {leadershipItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass-card rounded-2xl p-8 hover:shadow-[var(--shadow-glow)] transition-all duration-500"
            >
              <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-accent)] mb-2">
                {item.org}
              </p>
              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.title}
              </h3>
              <p className="text-[var(--color-secondary)] text-[var(--font-size-small)] leading-relaxed mb-6">
                {item.description}
              </p>
              <div className="flex gap-8">
                {item.metrics.map((metric, mi) => (
                  <div key={mi}>
                    <p className="text-2xl font-bold gradient-text">
                      <NumberCounter
                        value={metric.value}
                        suffix={metric.suffix}
                      />
                    </p>
                    <p className="text-xs text-[var(--color-tertiary)] mt-1">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Volunteering */}
        <motion.h3
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[var(--font-size-title)] font-semibold text-[var(--color-primary)] mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Community & Volunteering
        </motion.h3>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {volunteeringItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass-card rounded-2xl p-8 hover:border-[rgba(59,130,246,0.2)] transition-all duration-500"
            >
              <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-tertiary)] mb-2">
                {item.org}
              </p>
              <h4 className="text-lg font-semibold text-[var(--color-primary)] mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.title}
              </h4>
              <p className="text-[var(--color-secondary)] text-[var(--font-size-small)] leading-relaxed mb-4">
                {item.description}
              </p>
              <p className="text-sm font-medium text-[var(--color-accent)]">
                {item.highlight}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Causes & Languages */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-12 pb-4"
        >
          <div>
            <p className="text-sm font-medium text-[var(--color-primary)] mb-3">
              Causes I care about
            </p>
            <div className="flex flex-wrap gap-2">
              {causes.map((cause) => (
                <span
                  key={cause}
                  className="px-4 py-2 rounded-full glass-card text-sm text-[var(--color-secondary)] hover:text-[var(--color-accent)] hover:border-[rgba(59,130,246,0.2)] transition-all duration-300"
                >
                  {cause}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-[var(--color-primary)] mb-3">
              Languages
            </p>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="px-4 py-2 rounded-full glass-card text-sm text-[var(--color-secondary)] hover:text-[var(--color-accent)] hover:border-[rgba(59,130,246,0.2)] transition-all duration-300"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
