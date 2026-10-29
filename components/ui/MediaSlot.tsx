"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { ImageIcon, Play } from "lucide-react";
import { media, type MediaDef, type MediaId } from "@/lib/media";

const RATIO = { phone: "aspect-[9/19.5]", wide: "aspect-video", card: "aspect-[4/3]" } as const;

type Props = {
  id: MediaId;
  /** fill the parent (used inside the phone frame) instead of setting its own shape */
  fill?: boolean;
  /** pause a video even while it is on screen (used by the sticky phone) */
  play?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

export function MediaSlot({ id, fill, play = true, priority, sizes = "(min-width: 1024px) 420px, 90vw", className = "" }: Props) {
  const m: MediaDef = media[id];
  const shape = fill ? "absolute inset-0" : `relative w-full ${RATIO[m.ratio]}`;
  const wrap = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const [onScreen, setOnScreen] = useState(false);

  // videos only play while you can see them, which keeps the page light
  useEffect(() => {
    const el = wrap.current;
    if (!el || m.kind !== "video" || !m.src) return;
    const io = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, [m.kind, m.src]);

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    if (onScreen && play && !reduce) v.play().catch(() => {});
    else v.pause();
  }, [onScreen, play, reduce]);

  if (!m.src) {
    const Icon = m.kind === "video" ? Play : ImageIcon;
    const ext = m.kind === "video" ? "mp4" : "png";
    return (
      <div
        ref={wrap}
        role="img"
        aria-label={`Placeholder: ${m.alt}`}
        className={`${shape} overflow-hidden rounded-[inherit] bg-paper ${className}`}
      >
        <div
          className={`absolute inset-2 flex flex-col items-center justify-center gap-2 rounded-[inherit] border border-dashed border-white/15 px-4 text-center ${
            fill ? "pt-10" : ""
          }`}
        >
          <span className="grid size-11 place-items-center rounded-full bg-white/[0.07] text-clay">
            <Icon size={20} strokeWidth={1.75} />
          </span>
          <p className="font-script text-[30px] leading-none text-chalk/85">
            {m.kind === "video" ? "A video goes here" : "A screenshot goes here"}
          </p>
          <p className="max-w-[24ch] text-[13px] leading-snug text-smoke">{m.hint}</p>
          <code className="rounded-md bg-white/[0.06] px-2 py-1 text-[11px] text-smoke">
            public/media/{id}.{ext}
          </code>
        </div>
      </div>
    );
  }

  return (
    <div ref={wrap} className={`${shape} overflow-hidden rounded-[inherit] bg-paper ${className}`}>
      {m.kind === "video" ? (
        <video
          ref={video}
          src={m.src}
          poster={m.poster}
          muted
          loop
          playsInline
          preload="metadata"
          controls={!!reduce}
          aria-label={m.alt}
          className="absolute inset-0 size-full object-cover"
        />
      ) : (
        <Image src={m.src} alt={m.alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />
      )}
    </div>
  );
}
