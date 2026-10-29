# Scribble landing page

The marketing page for Scribble: what it does, how it works, and what a day with it looks like.
It has ready-made spaces for one video (the phone at the top) and screenshots everywhere else, so you can launch it first and fill them in as you capture.

Built with Next.js, Tailwind CSS and Motion. The look matches the app: warm dark paper, Reenie Beanie for the
handwriting and Shantell Sans for text. It is a separate project, so it deploys on its own.

## Run it

```bash
npm install
cp .env.example .env.local     # then edit the two URLs inside
npm run dev                    # http://localhost:3000
```

## Point it at your app

Set these in `.env.local`, and in Vercel under Project Settings, Environment Variables:

| Variable | What it is |
|---|---|
| `NEXT_PUBLIC_APP_URL` | Your deployed Scribble app. Every "Open Scribble" button goes here. |
| `NEXT_PUBLIC_SITE_URL` | This landing page's own address. Used for the link preview image. |

Other copy (name, tagline, description) lives in `lib/site.ts`.

## Add your video and screenshots

The page has **one video**: the phone at the very top. Everything else is a screenshot.
Every space is listed in **`lib/media.ts`**. For each one:

1. Drop the file into `public/media/` (for example `hero.mp4` or `inbox.png`).
2. Set its `src` in `lib/media.ts`, for example `src: "/media/inbox.png"`.

Spaces without a `src` show a placeholder that says what to capture, and the file name to use.

| Slot | Where it shows | Type | Shape |
|---|---|---|---|
| `hero` | Top of the page, in the phone | **Video** | Phone (9:19.5) |
| `shareFlow`, `inbox`, `library` | How it works: the phone that stays in place while you scroll | Screenshot | Phone (9:19.5) |
| `shareFeature`, `pad` | Feature grid | Screenshot | 4:3 |
| `dayMorning` to `dayWeekend` | A day with Scribble, one per moment | Screenshot | 4:3 |

Tips:

- **Phone screenshots** (the three in How it works) fit the phone frame as they are. Take them straight on your phone.
- **4:3 slots** show the top of the image, so crop a phone screenshot to 4:3 or use a wide one.
- **The hero video**: record your screen on your phone (iPhone: Screen Recording, Android: Quick Settings screen recorder). Keep it 6 to 12 seconds, muted, under 3 MB, as `.mp4` (H.264). It loops and only plays while on screen. Add a `poster` image in `lib/media.ts` for a still frame while it loads.
- Screenshots work best as PNG or JPG, about 1200 pixels wide for the 4:3 slots.

## Change the words

- Hero, steps and feature tiles: `components/Hero.tsx`, `HowItWorks.tsx`, `Features.tsx`
- The day timeline and the sticky notes: `components/DayToDay.tsx`
- Questions and answers: `components/Faq.tsx`

## Deploy

Push to GitHub and import the project in Vercel. Add the two environment variables above, and deploy.
