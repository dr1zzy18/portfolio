"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

const springConfig = { stiffness: 220, damping: 22 };

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  cardClassName?: string;
};

export default function TiltCard({
  children,
  className,
  cardClassName,
}: TiltCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-1, 1], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [-1, 1], [-8, 8]), springConfig);
  const glowX = useTransform(x, [-1, 1], ["20%", "80%"]);
  const glowY = useTransform(y, [-1, 1], ["20%", "80%"]);
  const glow = useMotionTemplate`radial-gradient(220px at ${glowX} ${glowY}, rgba(79,124,255,0.35), transparent 70%)`;

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const xPos = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const yPos = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    x.set(Math.max(-1, Math.min(1, xPos)));
    y.set(Math.max(-1, Math.min(1, yPos)));
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className={`group relative perspective-[1200px] ${className ?? ""}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className={`relative h-full w-full rounded-3xl border border-border bg-surface/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.35)] transition-transform duration-300 group-hover:-translate-y-1 [transform-style:preserve-3d] ${
          cardClassName ?? ""
        }`}
      >
        <motion.div
          aria-hidden
          style={{ background: glow }}
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        <div className="relative z-10">{children}</div>
      </motion.div>
    </div>
  );
}
