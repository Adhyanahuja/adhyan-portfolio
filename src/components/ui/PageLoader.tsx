"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("page-loaded");
    if (hasLoaded) {
      setLoading(false);
      return;
    }
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("page-loaded", "true");
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] as const }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#09090b]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const }}
            className="text-center"
          >
            <motion.span
              className="text-5xl md:text-7xl font-bold tracking-tighter gradient-text"
              style={{ fontFamily: "var(--font-display)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.25, 0.4, 0.25, 1] as const,
              }}
            >
              AA
            </motion.span>
            <motion.div
              className="mt-4 h-0.5 mx-auto bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-purple)]"
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0.25, 0.4, 0.25, 1] as const,
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
