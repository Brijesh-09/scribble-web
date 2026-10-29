"use client";

import { motion, useReducedMotion } from "motion/react";

type Pts = [number, number, number, number, number, number, number, number];

type StrokeProps = {
  d: string;
  delay?: number;
  duration?: number;
  /** draw when scrolled into view instead of on load */
  inView?: boolean;
  width?: number;
};

/** One hand-drawn stroke that draws itself. Drawing is skipped for reduced motion. */
export function Stroke({ d, delay = 0, duration = 0.9, inView = false, width = 2.5 }: StrokeProps) {
  const reduce = useReducedMotion();
  const to = { pathLength: 1, opacity: 1 };
  return (
    <motion.path
      d={d}
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={reduce ? to : { pathLength: 0, opacity: 0 }}
      {...(inView
        ? { whileInView: to, viewport: { once: true, margin: "-10% 0px" } }
        : { animate: to })}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

// two short strokes at the tip, pointing back along the way the arrow travels
function head([, , , , x2, y2, x3, y3]: Pts, size: number) {
  const dx = x3 - x2;
  const dy = y3 - y2;
  const len = Math.hypot(dx, dy) || 1;
  const bx = -dx / len;
  const by = -dy / len;
  const rot = (a: number): [number, number] => [
    x3 + (bx * Math.cos(a) - by * Math.sin(a)) * size,
    y3 + (bx * Math.sin(a) + by * Math.cos(a)) * size,
  ];
  const [ax, ay] = rot(0.5);
  const [cx, cy] = rot(-0.5);
  return `M${ax} ${ay} L${x3} ${y3} L${cx} ${cy}`;
}

type ArrowProps = {
  /** start, two control points, end: x0 y0 x1 y1 x2 y2 x3 y3 */
  pts: Pts;
  viewBox: string;
  className?: string;
  size?: number;
  delay?: number;
  inView?: boolean;
};

export function Arrow({ pts, viewBox, className, size = 15, delay = 0, inView }: ArrowProps) {
  const [x0, y0, x1, y1, x2, y2, x3, y3] = pts;
  return (
    <svg aria-hidden viewBox={viewBox} fill="none" className={className} style={{ overflow: "visible" }}>
      <Stroke d={`M${x0} ${y0} C${x1} ${y1} ${x2} ${y2} ${x3} ${y3}`} delay={delay} inView={inView} />
      <Stroke d={head(pts, size)} delay={delay + 0.7} duration={0.3} inView={inView} />
    </svg>
  );
}

/** the wobbly underline from the app's header */
export function Underline({
  className,
  delay = 0,
  inView,
}: {
  className?: string;
  delay?: number;
  inView?: boolean;
}) {
  return (
    <svg aria-hidden viewBox="0 0 120 8" fill="none" preserveAspectRatio="none" className={className}>
      <Stroke d="M2 5c18-4 34 2 52-1s40 2 64-1" delay={delay} inView={inView} duration={0.8} width={2} />
    </svg>
  );
}

/** a rough hand-drawn ring, for step numbers */
export function Ring({ className, delay = 0, inView = true }: { className?: string; delay?: number; inView?: boolean }) {
  return (
    <svg aria-hidden viewBox="0 0 62 62" fill="none" className={className}>
      <Stroke
        d="M32 5C48 4 59 17 57 32C55 48 41 58 26 56C10 54 3 40 6 26C9 12 23 4 41 9"
        delay={delay}
        inView={inView}
        duration={0.9}
        width={2.2}
      />
    </svg>
  );
}
