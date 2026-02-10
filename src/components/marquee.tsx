"use client";

import type { ReactNode } from "react";

type MarqueeProps = {
  items: ReactNode[];
};

export default function Marquee({ items }: MarqueeProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/70 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
      <div className="flex gap-10 whitespace-nowrap px-6 text-sm font-semibold uppercase tracking-[0.2em] text-muted/80">
        <div className="flex min-w-full animate-marquee gap-10">
          {items.map((item, index) => (
            <span key={`marquee-a-${index}`} className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-accent" />
              {item}
            </span>
          ))}
        </div>
        <div
          className="flex min-w-full animate-marquee gap-10"
          aria-hidden
        >
          {items.map((item, index) => (
            <span key={`marquee-b-${index}`} className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-accent-2" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
