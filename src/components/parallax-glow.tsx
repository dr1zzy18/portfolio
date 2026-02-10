"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxGlow() {
  const { scrollYProgress } = useScroll();
  const yTop = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yBottom = useTransform(scrollYProgress, [0, 1], [0, 160]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        style={{ y: yTop }}
        className="absolute -top-32 right-10 h-80 w-80 rounded-full bg-accent/20 blur-[140px]"
      />
      <motion.div
        style={{ y: yBottom }}
        className="absolute -bottom-32 left-0 h-[28rem] w-[28rem] rounded-full bg-accent-2/20 blur-[160px]"
      />
    </div>
  );
}
