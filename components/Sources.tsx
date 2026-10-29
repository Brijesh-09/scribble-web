const sources = [
  "Instagram",
  "YouTube",
  "X",
  "Reddit",
  "LinkedIn",
  "TikTok",
  "Spotify",
  "GitHub",
  "news sites",
  "any website",
];

export function Sources() {
  return (
    <section aria-label="Where you can save from" className="px-5 pb-8 pt-4">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-[17px] text-smoke">Works with whatever you&apos;re scrolling.</p>
        <ul className="mt-5 flex flex-wrap items-baseline justify-center gap-x-8 gap-y-1">
          {sources.map((s, i) => (
            <li
              key={s}
              className="font-script text-[44px] leading-[1.15] text-chalk/70"
              style={{ transform: `rotate(${[-2, 1.5, -1, 2, -1.5][i % 5]}deg)` }}
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
