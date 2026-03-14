"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function GradientCursor() {
  const [isHoverDevice, setIsHoverDevice] = useState(false);
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover)").matches;
    setIsHoverDevice(canHover);

    if (!canHover) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!isHoverDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-30">
      <motion.div
        className="pointer-events-none absolute w-[500px] h-[500px] rounded-full"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(139, 92, 246, 0.3) 40%, transparent 70%)",
          opacity: 0.12,
        }}
      />
    </div>
  );
}
