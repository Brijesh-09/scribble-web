"use client";

import { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { Coffee, Moon, PenLine, Share2, Sparkles, Train, type LucideIcon } from "lucide-react";
import { MediaSlot } from "./ui/MediaSlot";
import type { MediaId } from "@/lib/media";

const moments: { time: string; icon: LucideIcon; title: string; body: string; media: MediaId }[] = [
  {
    time: "7:40 am",
    icon: Coffee,
    title: "A reel worth keeping",
    body: "You're scrolling Instagram with your chai. A recipe reel stops you. Tap Share, pick Scribble, carry on scrolling. It's in your Inbox before the tea cools.",
    media: "dayMorning",
  },
  {
    time: "9:15 am",
    icon: Train,
    title: "Read later, for real",
    body: "A long article on the commute. Share it and it arrives with its headline, cover image and a short description, so you'll know what it was in a week.",
    media: "dayCommute",
  },
  {
    time: "1:30 pm",
    icon: PenLine,
    title: "A thought, caught",
    body: "Say it out loud instead of typing it. Paste a link beside it, attach a screenshot, add a #work tag and a few words about why. Done in the time it takes to sip water.",
    media: "dayWork",
  },
  {
    time: "4:00 pm",
    icon: Sparkles,
    title: "Draw the whole idea",
    body: "In a meeting, sketch the flow on the pad. Run out of room? Pinch out and keep going. It saves as one image you can pull up later.",
    media: "dayMeeting",
  },
  {
    time: "9:00 pm",
    icon: Moon,
    title: "Two minutes to tidy",
    body: "Open the Inbox. Tap the check on what you'll want again, discard the rest, and pin the one you need tomorrow. Your library only ever holds things you chose.",
    media: "dayEvening",
  },
  {
    time: "Sunday",
    icon: Share2,
    title: "Send it on",
    body: "Planning a trip with friends? Share your Goa tag as a link. They open it on their phones, no account needed, and you can stop sharing whenever you like.",
    media: "dayWeekend",
  },
];

const notes: { text: string; tone: string; tilt: number }[] = [
  { text: "That recipe reel", tone: "bg-[#e9c9bf] text-[#2b1f1b]", tilt: -3 },
  { text: "Flights to Goa", tone: "bg-[#f3dca5] text-[#2f2512]", tilt: 2 },
  { text: "Thread on pricing pages", tone: "bg-[#c9e0c4] text-[#1d2b1b]", tilt: -1.5 },
  { text: "Birthday gift ideas", tone: "bg-chalk text-[#241f1e]", tilt: 3 },
  { text: "Flat listings to compare", tone: "bg-[#f3dca5] text-[#2f2512]", tilt: -2.5 },
  { text: "Podcast to try", tone: "bg-[#e9c9bf] text-[#2b1f1b]", tilt: 1.5 },
  { text: "Wi-Fi code for the cabin", tone: "bg-[#c9e0c4] text-[#1d2b1b]", tilt: -3.5 },
  { text: "Sketch: kitchen layout", tone: "bg-chalk text-[#241f1e]", tilt: 2.5 },
];

export function DayToDay() {
  const track = useRef<HTMLOListElement>(null);
  // the line grows exactly as far as you've scrolled: it follows your thumb, 1:1
  const { scrollYProgress } = useScroll({ target: track, offset: ["start 65%", "end 60%"] });

  return (
    <section id="day" className="px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-script text-[72px] leading-[0.85] sm:text-[96px]">A day with Scribble.</h2>
        <p className="mt-5 max-w-[46ch] text-[18px] leading-[1.65] text-chalk/75">
          Scribble fits into the gaps in your day. It never asks you to stop what you&apos;re doing.
        </p>

        <ol ref={track} className="relative mt-16 space-y-14 pl-12 sm:pl-16">
          {/* the thread that ties the day together */}
          <span aria-hidden className="absolute bottom-2 left-[19px] top-2 w-px bg-white/10 sm:left-[27px]" />
          <motion.span
            aria-hidden
            style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
            className="absolute bottom-2 left-[19px] top-2 w-px bg-clay sm:left-[27px]"
          />

          {moments.map((m) => {
            const Icon = m.icon;
            return (
              <li key={m.title} className="relative grid gap-6 md:grid-cols-[1fr_300px] md:items-center md:gap-10">
                <span
                  aria-hidden
                  className="absolute -left-12 top-0 grid size-10 place-items-center rounded-full bg-ink text-clay ring-1 ring-clay/60 sm:-left-16 sm:size-14"
                >
                  <Icon size={19} strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-script text-[40px] leading-none text-clay">{m.time}</p>
                  <h3 className="mt-1 font-script text-[52px] leading-[0.9]">{m.title}</h3>
                  <p className="mt-3 max-w-[46ch] text-[17px] leading-[1.65] text-chalk/80">{m.body}</p>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-28">
          <h3 className="font-script text-[56px] leading-[0.9]">Things worth keeping.</h3>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-6">
            {notes.map((n) => (
              <li
                key={n.text}
                style={{ transform: `rotate(${n.tilt}deg)` }}
                className={`${n.tone} rounded-[5px] px-5 py-4 font-script text-[32px] leading-[0.95] shadow-[0_14px_26px_-12px_rgba(0,0,0,0.7)]`}
              >
                {n.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
