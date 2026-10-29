"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How do I save from Instagram or X?",
    a: "Install Scribble on your Android phone from Chrome, then use Share in any app and pick Scribble. On iPhone, add a two-step Shortcut that puts Scribble in the share sheet. The app walks you through both.",
  },
  {
    q: "Does it work on iPhone?",
    a: "Yes. Scribble runs in Safari and Chrome, and you can add it to your Home Screen. Apple doesn't let websites join the share sheet directly, so sharing in from other apps uses a small Shortcut you set up once.",
  },
  {
    q: "What can I save?",
    a: "Links and posts, plain notes, photos and screenshots, PDFs and Word files up to 4 MB, and your own drawings from the scribble pad. You can add a note and tags to anything.",
  },
  {
    q: "What happens to things I share in?",
    a: "They wait in your Inbox until you decide. Tap the check to keep one, discard it, or keep them all. Only the things you keep join your library.",
  },
  {
    q: "Can other people see my stuff?",
    a: "No. Your library is private and tied to your login. The only way anyone else sees something is a link you make yourself, and you can stop sharing it at any time.",
  },
  {
    q: "Can I use it on my laptop?",
    a: "Yes. Open it in any modern browser, paste links, drag files in, and install it from Chrome or Edge if you'd like it in its own window.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number[]>([0]);
  const uid = useId();
  const toggle = (i: number) => setOpen((o) => (o.includes(i) ? o.filter((x) => x !== i) : [...o, i]));

  return (
    <section id="faq" className="px-5 py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <h2 className="font-script text-[72px] leading-[0.85] sm:text-[96px]">Good questions.</h2>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {faqs.map((f, i) => {
            const isOpen = open.includes(i);
            return (
              <div key={f.q}>
                <h3>
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`${uid}-${i}`}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left text-[18px] font-medium transition-colors duration-100 active:text-clay"
                  >
                    {f.q}
                    <motion.span
                      aria-hidden
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                      className="grid size-8 shrink-0 place-items-center rounded-full bg-white/[0.08]"
                    >
                      <Plus size={16} strokeWidth={2} />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`${uid}-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[58ch] pb-6 text-[16px] leading-[1.7] text-smoke">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
