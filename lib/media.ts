/**
 * Every screenshot and video on the page lives here.
 *
 * The page has ONE video: the phone at the very top (`hero`).
 * Everything else is a screenshot.
 *
 * To fill a space:
 *   1. Drop the file into /public/media (for example hero.mp4 or inbox.png)
 *   2. Set its `src` below (for example "/media/hero.mp4")
 *
 * Slots without a `src` show a friendly placeholder that says what to capture,
 * so the page never looks broken while you collect your footage.
 *
 * Tips
 *  - Phone slots are 9:19.5. A normal phone screenshot fits them exactly.
 *  - Wide slots (4:3) show the top of the image, so crop a phone screenshot to 4:3
 *    or use a landscape screenshot.
 *  - The hero video plays muted and loops. Keep it short (6 to 12 seconds) and under 3 MB.
 *    Use .mp4 (H.264) for the widest support, and add a `poster` image if you like.
 */
export type MediaDef = {
  kind: "image" | "video";
  ratio: "phone" | "wide" | "card";
  alt: string;
  /** What to capture. Shown on the placeholder. */
  hint: string;
  src?: string;
  poster?: string;
};

const define = <T extends Record<string, MediaDef>>(slots: T) => slots;

export const media = define({
  // the only video on the page
  hero: {
    kind: "image",
    ratio: "phone",
    src: "/media/hero.jpg",
    alt: "Scribble on a phone: a library of saved links, notes and drawings",
    hint: "Your library home screen, scrolling gently. 8 seconds, loops.",
  },

  // How it works: the phone that stays in place while you scroll
  shareFlow: {
    kind: "image",
    ratio: "phone",
    src: "/media/IMG_2046.jpg",
    alt: "The phone's share sheet with Scribble listed, shown from inside Instagram",
    hint: "Screenshot: the share sheet in Instagram with Scribble in the list.",
  },
  inbox: {
    kind: "image",
    ratio: "phone",
    src: "/media/IMG_2044.PNG",
    alt: "The Scribble Inbox with a few shared items and a check button on each",
    hint: "Screenshot: the Inbox with a few shares waiting.",
  },
  library: {
    kind: "image",
    ratio: "phone",
    src: "/media/IMG_2045.PNG",
    alt: "The Scribble library with the search bar, sort button and Instagram filter",
    hint: "Screenshot: the library with tag chips and the search bar.",
  },

  // Features
  shareFeature: {
    kind: "image",
    ratio: "card",
    src: "/media/IMG_2046.jpg",
    alt: "A link shared from a news site, saved with its headline and cover image",
    hint: "Screenshot (4:3): a saved article with its cover image.",
  },
  pad: {
    kind: "video",
    ratio: "card",
    src: "/media/video.mp4",
    alt: "A large drawing on the Scribble pad, zoomed out",
    hint: "Screenshot (4:3): a big sketch on the pad.",
  },

  // A day with Scribble
  dayMorning: {
    kind: "image",
    ratio: "card",
    alt: "A reel shared from Instagram sitting in the Scribble Inbox",
    hint: "Screenshot: a reel waiting in the Inbox.",
  },
  dayCommute: {
    kind: "image",
    ratio: "card",
    alt: "A news article saved with its headline and cover image",
    hint: "Screenshot: an article with its cover image.",
  },
  dayWork: {
    kind: "image",
    ratio: "card",
    alt: "The Scribble composer with a voice note, a pasted link and a screenshot",
    hint: "Screenshot: the composer with a note, a tag and an attachment.",
  },
  dayMeeting: {
    kind: "image",
    ratio: "card",
    alt: "A large diagram drawn on the Scribble pad",
    hint: "Screenshot: a big sketch on the pad, zoomed out.",
  },
  dayEvening: {
    kind: "image",
    ratio: "card",
    alt: "The Inbox with a few items, ready to keep or discard",
    hint: "Screenshot: the Inbox before tidying.",
  },
  dayWeekend: {
    kind: "image",
    ratio: "card",
    alt: "The link screen for sharing a Recipes collection",
    hint: "Screenshot: the Link ready sheet.",
  },
});

export type MediaId = keyof typeof media;
