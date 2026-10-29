"use client";

import { motion, useReducedMotion } from "motion/react";
import { site } from "@/lib/site";
import { Button } from "./ui/Button";
import { PhoneFrame } from "./ui/PhoneFrame";
import { Arrow, Underline } from "./ui/Doodle";

const spring = { type: "spring", bounce: 0, duration: 0.9 } as const;

type Pts = [number, number, number, number, number, number, number, number];

// Hand-written notes around the phone, like the annotated sketch this app started from.
// They only appear on wide screens, where there is room beside the phone.
function Note({
  children,
  className,
  delay,
  pts,
  arrowClass,
  wide,
}: {
  children: string;
  className: string;
  delay: number;
  pts: Pts;
  arrowClass: string;
  /** needs extra room beside the phone, so only shows on very wide screens */
  wide?: boolean;
}) {
  return (
    <div aria-hidden className={`pointer-events-none absolute hidden w-[150px] ${wide ? "2xl:block" : "xl:block"} ${className}`}>
      <p className="font-script text-[36px] leading-[0.88] text-clay">{children}</p>
      <Arrow pts={pts} viewBox="0 0 100 70" delay={delay} className={`mt-1 h-[70px] w-[100px] ${arrowClass}`} />
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  // one orchestrated moment on load: the headline rises, then the underline and notes draw themselves
  const rise = (i: number) => ({
    initial: { y: "135%" },
    animate: { y: 0 },
    transition: reduce ? { duration: 0 } : { ...spring, delay: 0.1 + i * 0.12 },
  });

  return (
    <section id="top" className="paper relative isolate overflow-hidden px-5 pb-28 pt-36 lg:pt-44">
      {/* fade the dots toward the edges so the page feels like one big sheet */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-ink [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black_85%)]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <h1 className="font-script text-[80px] leading-[0.8] whitespace-nowrap sm:text-[124px] lg:text-[150px]">
            <span className="block overflow-hidden pb-4 pt-3">
              <motion.span className="block" {...rise(0)}>
                Drop it.
              </motion.span>
            </span>
            <span className="relative inline-block">
              <span className="block overflow-hidden pb-4 pt-3">
                <motion.span className="block" {...rise(1)}>
                  Find it later.
                </motion.span>
              </span>
              <Underline delay={reduce ? 0 : 0.9} className="absolute -bottom-1 left-1 h-4 w-[96%] text-clay" />
            </span>
          </h1>

          <motion.p
            className="mt-10 max-w-[44ch] text-[19px] leading-[1.6] text-chalk/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 0.6 }}
          >
            Scribble is one calm place for everything you come across: links, posts, photos, files, notes and drawings.
            Share them in from any app, and sort them out when you have a minute.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 0.75 }}
          >
            <Button href={site.appUrl}>Open Scribble</Button>
            <Button href="#how" variant="glass">
              See how it works
            </Button>
          </motion.div>

          <p className="mt-6 max-w-[44ch] text-[14px] leading-6 text-smoke">
            Runs in your browser on any device. Install it on Android to join the share sheet, or add a Shortcut on
            iPhone.
          </p>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[290px]"
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={reduce ? { duration: 0 } : { ...spring, delay: 0.25 }}
        >
          <PhoneFrame id="hero" priority />

          <Note
            className="-left-[62%] top-[7%]"
            delay={1.2}
            pts={[4, 6, 40, 0, 75, 14, 96, 48]}
            arrowClass="ml-[52px]"
          >
            share it from any app
          </Note>
          <Note
            className="-left-[62%] bottom-[9%]"
            delay={1.7}
            pts={[4, 8, 26, 56, 66, 62, 96, 22]}
            arrowClass="ml-[52px]"
          >
            find it in a second
          </Note>
          <Note
            className="-right-[58%] top-[38%]"
            delay={2.2}
            pts={[92, 6, 70, 0, 30, 10, 4, 44]}
            arrowClass="-ml-7"
            wide
          >
            it waits in your inbox
          </Note>
        </motion.div>
      </div>
    </section>
  );
}
