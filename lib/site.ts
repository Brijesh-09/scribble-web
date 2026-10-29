// Edit these once and the whole page follows.
export const site = {
  name: "Scribble",
  tagline: "Drop it. Find it later.",
  description:
    "Scribble is one calm place for everything you come across: links, posts, photos, files, notes and drawings. Share them in from any app, and sort them out when you have a minute.",
  // The deployed Scribble app. Every "Open Scribble" button goes here.
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://scribble-self-one.vercel.app/",
  // This landing page (used for the share preview image).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export const appHost = (() => {
  try {
    return new URL(site.appUrl).host;
  } catch {
    return "https://scribble-self-one.vercel.app/";
  }
})();
