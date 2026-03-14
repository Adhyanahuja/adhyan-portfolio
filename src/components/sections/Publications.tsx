"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { publications } from "@/data/publications";
import { projects } from "@/data/projects";
import Image from "next/image";

const publisherStyles: Record<string, { watermarkClass: string }> = {
  Springer: { watermarkClass: "h-32 w-auto" },
  IEEE: { watermarkClass: "h-28 w-auto" },
};

function PublicationCard({ pub, index }: { pub: (typeof publications)[0]; index: number }) {
  const style = publisherStyles[pub.publisher] ?? { watermarkClass: "h-28 w-auto" };
  const isReversed = index % 2 !== 0;

  return (
    <motion.a
      href={pub.link}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeInUp}
      className="group block glass-card rounded-2xl overflow-hidden hover:shadow-[var(--shadow-glow)] hover:border-[rgba(59,130,246,0.2)] transition-all duration-500"
    >
      <div
        className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"}`}
      >
        {/* Image area */}
        <div className="relative w-full md:w-2/5 aspect-[16/10] md:aspect-auto overflow-hidden">
          <Image
            src={pub.image}
            alt={pub.imageAlt ?? pub.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          {/* Gradient overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r ${
              isReversed ? "md:bg-gradient-to-l" : ""
            } from-transparent to-black/40`}
          />
          {/* Year badge */}
          <div className="absolute bottom-4 right-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-black/50 backdrop-blur-sm text-white/90 border border-white/10">
              {pub.year}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="relative flex-1 p-8 md:p-10 flex flex-col justify-center overflow-hidden">
          {/* Watermark logo — bottom right */}
          <div className="absolute -bottom-2 -right-2 opacity-[0.06] group-hover:opacity-[0.1] transition-opacity duration-500 pointer-events-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${pub.logo}?v=2`}
              alt=""
              className={`${style.watermarkClass} object-contain`}
              aria-hidden="true"
            />
          </div>

          <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-accent)] mb-3">
            {pub.venue} · {pub.location}
          </p>

          <h3
            className="text-xl md:text-2xl font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors mb-4 leading-snug"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {pub.title}
          </h3>

          <p className="text-[var(--color-secondary)] text-sm leading-relaxed mb-6">
            {pub.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {pub.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-[11px] font-medium bg-white/5 border border-white/5 text-[var(--color-tertiary)] group-hover:border-[var(--color-accent)]/20 group-hover:text-[var(--color-secondary)] transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Read paper link */}
          <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] group-hover:gap-3 transition-all duration-300">
            <span>Read paper</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export function Publications() {
  return (
    <section
      id="research"
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
          Research & Projects
        </motion.p>

        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[var(--font-size-headline)] font-bold tracking-tight text-[var(--color-primary)] mb-16"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Published work & builds
        </motion.h2>

        {/* Publications */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-8 mb-24"
        >
          {publications.map((pub, index) => (
            <PublicationCard key={index} pub={pub} index={index} />
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.h3
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[var(--font-size-title)] font-semibold text-[var(--color-primary)] mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Projects
        </motion.h3>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              className="group block rounded-2xl overflow-hidden glass-card hover:shadow-[var(--shadow-glow)] hover:-translate-y-1 transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-accent)] mb-2">
                  {project.category}
                </p>
                <h4 className="text-base font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                  {project.title}
                </h4>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
