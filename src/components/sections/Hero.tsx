"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SplitText } from "@/components/ui/SplitText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { StickyNotesArsenal } from "@/components/ui/StickyNotesArsenal";

const ease = [0.25, 0.4, 0.25, 1] as const;

const companyLogos = [
  { src: "/images/logos/deshaw.webp", alt: "D. E. Shaw & Co", h: "h-10" },
  { src: "/images/logos/piramal.webp", alt: "Piramal Finance", h: "h-11" },
  { src: "/images/logos/itc.webp", alt: "ITC Limited", h: "h-14" },
  { src: "/images/logos/csir.webp", alt: "CSIR-CEERI", h: "h-14" },
  { src: "/images/logos/bits.webp", alt: "BITS Pilani", h: "h-12" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden"
    >
      <GradientMesh />

      <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left column: Photo + Text content */}
        <div className="order-2 lg:order-1">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease }}
            className="mb-8"
          >
            <div className="relative gradient-border inline-block">
              <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-[0_0_60px_rgba(59,130,246,0.15)]">
                <Image
                  src="/images/hero/my-avatar.webp"
                  alt="Adhyan Ahuja"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                />
              </div>
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[var(--color-secondary)] text-sm tracking-wide">
              Data Scientist · D. E. Shaw Group
            </span>
          </motion.div>

          <SplitText
            text="Building things that matter."
            as="h1"
            className="text-[var(--font-size-display)] font-bold leading-[1.05] tracking-tight text-shimmer mb-6"
            delay={0.4}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease }}
            className="text-[var(--color-secondary)] text-[var(--font-size-body-lg)] leading-relaxed max-w-lg mb-8"
          >
            From ML models to teams — I combine technical depth with business
            impact. Currently shaping analytics at one of the world&apos;s most
            sophisticated investment firms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4, ease }}
            className="flex items-center gap-4"
          >
            <MagneticButton
              as="button"
              onClick={() =>
                document
                  .querySelector("#about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-full gradient-btn text-white text-sm font-medium"
            >
              Explore my journey
            </MagneticButton>
            <MagneticButton
              as="a"
              href="https://www.linkedin.com/in/adhyanahuja10"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full glass-btn text-sm font-medium text-[var(--color-primary)]"
            >
              LinkedIn
            </MagneticButton>
          </motion.div>

          {/* Company logos marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8, ease }}
            className="mt-12"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-tertiary)] mb-4">
              Experience at
            </p>
            <div className="relative overflow-hidden">
              {/* Edge fades */}
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />
              <div className="flex animate-marquee" style={{ animationDuration: "25s" }}>
                {[0, 1].map((set) => (
                  <div key={set} className="flex shrink-0 items-center gap-16 pr-16">
                    {companyLogos.map((logo) => (
                      <Image
                        key={`${logo.alt}-${set}`}
                        src={logo.src}
                        alt={logo.alt}
                        width={180}
                        height={60}
                        className={`${logo.h} w-auto shrink-0 object-contain opacity-40 hover:opacity-80 transition-opacity duration-300`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right column: My Arsenal */}
        <div className="order-1 lg:order-2">
          <StickyNotesArsenal />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[var(--color-tertiary)] tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-[var(--color-accent)] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
