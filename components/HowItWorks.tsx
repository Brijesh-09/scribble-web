"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { PhoneFrame } from "./ui/PhoneFrame";
import { MediaSlot } from "./ui/MediaSlot";
import { Ring, Underline } from "./ui/Doodle";
import type { MediaId } from "@/lib/media";

const steps: { n: string; title: string; body: string; note: string; media: MediaId }[] = [
  {
    n: "1",
    title: "Share it from any app",
    body: "See something in Instagram, X, YouTube or a news site? Tap Share and pick Scribble. You never leave the app you're in.",
    note: "Android: install Scribble once and it joins your share sheet. iPhone: add a two-step Shortcut.",
    media: "shareFlow",
  },
  {
    n: "2",
    title: "It waits in your Inbox",
    body: "Everything you share lands in the Inbox with its title, cover image and description. Tap the check to keep it, or open it and decide later. Your library stays tidy until you say so.",
    note: "Keep all with one tap when you're sure.",
    media: "inbox",
  },
  {
    n: "3",
    title: "Find it in a second",
    body: "Your library is a grid you can search, sort and filter by where things came from: Instagram, YouTube, the web, or your own tags. Pin the ones you reach for most to the top.",
    note: "Sort by newest, oldest or A to Z.",
    media: "library",
  },
];

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const items = useRef<(HTMLLIElement | null)[]>([]);
  const reduce = useReducedMotion();

  // whichever step crosses the middle of the screen takes the sticky phone
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    items.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="how" className="px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-script text-[72px] leading-[0.85] sm:text-[96px]">
          <span className="relative inline-block">
            From scroll to saved
            <Underline inView className="absolute -bottom-1 left-0 h-3.5 w-full text-clay" />
          </span>
          <br />
          in three steps.
        </h2>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-28">
          <ol>
            {steps.map((s, i) => (
              <li
                key={s.n}
                data-i={i}
                ref={(el) => {
                  items.current[i] = el;
                }}
                className={`py-10 transition-opacity duration-300 lg:flex lg:min-h-[80vh] lg:items-center ${
                  active === i ? "" : "lg:opacity-30"
                }`}
              >
                <div className="max-w-[46ch]">
                  <div className="relative grid size-16 place-items-center">
                    <Ring className="absolute inset-0 text-clay" />
                    <span className="font-script text-[52px] leading-none">{s.n}</span>
                  </div>
                  <h3 className="mt-5 font-script text-[58px] leading-[0.88] text-balance">{s.title}</h3>
                  <p className="mt-4 text-[19px] leading-[1.65] text-chalk/80">{s.body}</p>
                  <p className="mt-4 text-[14px] leading-6 text-smoke">{s.note}</p>

                  {/* on small screens each step carries its own phone */}
                  <div className="mt-10 lg:hidden">
                    <PhoneFrame id={s.media} />
                  </div>
                </div>
              </li>
            ))}
          </ol>

          {/* on large screens one phone stays put and swaps screens as you read */}
          <div className="relative hidden lg:block">
            <div className="sticky top-28 pt-6">
              <PhoneFrame>
                {steps.map((s, i) => (
                  <motion.div
                    key={s.n}
                    className="absolute inset-0"
                    animate={{ opacity: active === i ? 1 : 0, scale: reduce || active === i ? 1 : 0.985 }}
                    transition={{ type: "spring", bounce: 0, duration: 0.45 }}
                  >
                    <MediaSlot id={s.media} fill play={active === i} />
                  </motion.div>
                ))}
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
