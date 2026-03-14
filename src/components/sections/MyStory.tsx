"use client";

import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { RevealImage } from "@/components/ui/RevealImage";
import { MomentMarquee } from "@/components/ui/MomentMarquee";

const interests = [
  "Sports",
  "Travel",
  "Long conversations",
  "Learning",
  "Curiosity",
  "Perspective",
];

const moments = Array.from(
  { length: 15 },
  (_, i) => `/images/moments/moment-${i + 1}.webp`
);

const storySections = [
  {
    title: "Roots & Grounding",
    text: `Moving back to India to Pune in 2010 was a shift that shaped everything. The friendships I built during school became my foundation. Growing up in a middle-class household instilled values of stability, rational thinking, and a quiet ambition to build something meaningful. It taught me that comfort isn't given — it's earned through consistent effort.`,
    image: "/images/story/Swiss.webp",
    imageAlt: "At Jungfraujoch with Dad",
    imageFirst: false,
  },
  {
    title: "Responsibility & Independence",
    text: `I was shy and introverted as a child, but an early sense of responsibility pushed me to grow. I carry the goal of building a life where my family never has to hesitate about their needs or wants. This drive shapes every career decision I make — not out of pressure, but out of love and purpose.`,
    image: "/images/story/mystory1.webp",
    imageAlt: "College years",
    imageFirst: true,
  },
  {
    title: "Belief, Patience & Perspective",
    text: `Sports shaped my life philosophy more than anything else. Watching Lionel Messi's World Cup journey taught me that progress isn't always visible, and consistency matters more than timing. The lesson: keep showing up, keep improving, and trust that the moment will come.`,
    image: "/images/story/Messi.webp",
    imageAlt: "Inspired by Messi's journey",
    imageFirst: false,
  },
];

export function MyStory() {
  return (
    <section
      id="story"
      className="pt-12 pb-[var(--spacing-section)] bg-[var(--color-bg)] section-divider"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[var(--color-accent)] text-sm uppercase tracking-[0.25em] mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          My Story
        </motion.p>

        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[var(--font-size-headline)] font-bold tracking-tight text-[var(--color-primary)] mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          The person behind the work
        </motion.h2>

        {/* Intro */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <p className="text-[var(--color-secondary)] text-[var(--font-size-body)] leading-relaxed mb-6">
            Born in 2001, I moved to the UK shortly after — spending my early
            years in Brighton and traveling across Europe with my parents. Those
            years shaped me into a quiet observer, someone who finds meaning in
            new places, different people, and the patterns that connect them.
          </p>
        </motion.div>

        {/* Interest tags */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-20"
        >
          {interests.map((interest) => (
            <span
              key={interest}
              className="px-5 py-2.5 rounded-full glass-card text-sm text-[var(--color-secondary)] hover:text-[var(--color-accent)] hover:border-[rgba(59,130,246,0.2)] transition-all duration-300"
            >
              {interest}
            </span>
          ))}
        </motion.div>

        {/* Story sections with RevealImage */}
        <div className="space-y-24">
          {storySections.map((section, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            >
              <div
                className={
                  section.imageFirst ? "order-1" : "order-1 lg:order-2"
                }
              >
                <RevealImage
                  src={section.image}
                  alt={section.imageAlt}
                  className="rounded-2xl aspect-[4/3]"
                />
              </div>

              <motion.div
                variants={section.imageFirst ? slideInRight : slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className={
                  section.imageFirst ? "order-2" : "order-2 lg:order-1"
                }
              >
                <h3
                  className="text-[var(--font-size-title)] font-semibold text-[var(--color-primary)] mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {section.title}
                </h3>
                <p className="text-[var(--color-secondary)] text-[var(--font-size-body)] leading-relaxed">
                  {section.text}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Life Lessons */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mt-24 mb-20"
        >
          <p className="text-[var(--font-size-body-lg)] text-[var(--color-secondary)] leading-relaxed mb-6">
            Life hasn&apos;t been perfectly linear. There have been moments of
            self-doubt, loneliness, and feeling behind. But those moments taught
            me fragility — and with fragility came gratitude.
          </p>
          <p className="text-[var(--font-size-body-lg)] font-medium leading-relaxed gradient-text">
            My goal is simple: leave the world slightly better than I found it.
            Even if I help just one person live a better life — that would be
            enough.
          </p>
        </motion.div>
      </div>

      {/* Moments marquee - full width with edge fading */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10" />
        <div className="space-y-4 mt-12">
          <MomentMarquee images={moments.slice(0, 8)} />
          <MomentMarquee images={moments.slice(8)} reverse />
        </div>
      </div>
    </section>
  );
}
