"use client";

import { motion } from "framer-motion";
import { stickyNotes } from "@/data/skills";

const noteVariants = {
  hidden: { opacity: 0, scale: 0.3, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.05,
      type: "spring" as const,
      stiffness: 260,
      damping: 20,
    },
  }),
};

const titleVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const },
  },
};

function NoteContent({ note }: { note: (typeof stickyNotes)[0] }) {
  if (note.type === "category") {
    return (
      <p
        className="text-base lg:text-lg font-bold leading-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {note.text}
      </p>
    );
  }
  if (note.type === "statement") {
    return (
      <p className="text-xs lg:text-sm leading-snug font-medium italic">
        {note.text}
      </p>
    );
  }
  // skills
  return (
    <p className="text-[11px] lg:text-xs leading-snug">
      {note.text}
    </p>
  );
}

export function StickyNotesArsenal() {
  return (
    <>
      {/* Desktop: vertical collage */}
      <div className="hidden lg:block w-full">
        {/* Title */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <h2
            className="text-5xl font-bold text-[var(--color-primary)] -rotate-3"
            style={{ fontFamily: "var(--font-handwritten)" }}
          >
            My Arsenal
          </h2>
        </motion.div>

        {/* Notes container — separate relative context */}
        <div className="relative mt-10 min-h-[600px]">
          {stickyNotes.map((note, i) => (
            <motion.div
              key={`${note.cluster}-${note.type}-${i}`}
              custom={i}
              variants={noteVariants}
              initial="hidden"
              animate="visible"
              className={`absolute ${note.width} ${note.color} ${note.textColor} rounded-sm p-3 cursor-default shadow-[0_2px_12px_rgba(0,0,0,0.15)]`}
              style={{
                left: `${note.x}%`,
                top: `${note.y}%`,
                zIndex: note.zIndex,
                rotate: `${note.rotation}deg`,
              }}
              whileHover={{
                scale: 1.1,
                zIndex: 50,
                boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <NoteContent note={note} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet: 2-column grid fallback */}
      <div className="lg:hidden">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="text-3xl font-bold text-[var(--color-primary)] mb-4 -rotate-2"
          style={{ fontFamily: "var(--font-handwritten)" }}
        >
          My Arsenal
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {stickyNotes
            .filter((n) => n.type !== "statement")
            .map((note, i) => (
              <motion.div
                key={`mobile-${note.cluster}-${i}`}
                custom={i}
                variants={noteVariants}
                initial="hidden"
                animate="visible"
                className={`${note.color} ${note.textColor} rounded-sm p-3 shadow-[0_2px_8px_rgba(0,0,0,0.12)]`}
                style={{ rotate: `${note.rotation * 0.5}deg` }}
                whileHover={{
                  scale: 1.05,
                  zIndex: 10,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
              >
                <NoteContent note={note} />
              </motion.div>
            ))}
        </div>
      </div>
    </>
  );
}
