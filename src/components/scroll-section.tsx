"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ScrollSectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export default function ScrollSection({
  id,
  className,
  children,
}: ScrollSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 80, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ amount: 0.25, once: false, margin: "-10% 0px" }}
    >
      {children}
    </motion.section>
  );
}
