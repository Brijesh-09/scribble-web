import {
  ArrowUpDown,
  Camera,
  Check,
  ClipboardPaste,
  Copy,
  ImagePlus,
  Link2,
  Lock,
  Mic,
  Paperclip,
  PenLine,
  Pin,
  Search,
  Share2,
  Trash2,
} from "lucide-react";
import { MediaSlot } from "./ui/MediaSlot";
import { Arrow } from "./ui/Doodle";
import { appHost } from "@/lib/site";

function Title({ children, className = "" }: { children: string; className?: string }) {
  return <h3 className={`font-script text-[54px] leading-[0.86] ${className}`}>{children}</h3>;
}

function Body({ children, className = "" }: { children: string; className?: string }) {
  return <p className={`mt-3 max-w-[40ch] text-[16px] leading-[1.65] ${className || "text-smoke"}`}>{children}</p>;
}

const chip = "rounded-full px-3.5 py-1.5 text-[14px]";
const chipDim = `${chip} bg-white/[0.08]`;

export function Features() {
  return (
    <section id="features" className="px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-[16ch] font-script text-[72px] leading-[0.85] sm:text-[96px]">
          Small things that add up.
        </h2>
        <p className="mt-5 max-w-[48ch] text-[18px] leading-[1.65] text-chalk/75">
          Scribble does a few things and does them without making you think. Here&apos;s what&apos;s inside.
        </p>

        <div className="mt-14 grid gap-4 lg:grid-cols-4 lg:grid-rows-[repeat(5,minmax(230px,auto))]">
          {/* share from any app */}
          <article className="flex flex-col overflow-hidden rounded-[36px] bg-paper p-8 lg:col-span-2 lg:row-span-2">
            <Title>Share from any app</Title>
            <Body>
              Instagram, YouTube, X, Reddit, LinkedIn, news sites, anything with a share button. Scribble keeps the link
              and, when the site offers them, the title, cover image and description.
            </Body>
            <div className="mt-7 flex flex-1 items-end">
              <div className="relative w-full overflow-hidden rounded-[24px] ring-1 ring-white/10">
                <MediaSlot id="shareFeature" />
              </div>
            </div>
          </article>

          {/* capture anything */}
          <article className="rounded-[28px] bg-raised p-8 lg:col-span-2">
            <Title>Capture anything</Title>
            <Body>
              Paste a link, type a note, drop a file, take a photo, add a screenshot or dictate with your voice. Add a few
              words so you remember why you saved it.
            </Body>
            <ul aria-hidden className="mt-6 flex flex-wrap gap-2.5">
              {[ClipboardPaste, PenLine, Paperclip, Camera, ImagePlus, Mic].map((Icon, i) => (
                <li key={i} className="grid size-11 place-items-center rounded-full bg-white/[0.08] text-clay">
                  <Icon size={19} strokeWidth={1.75} />
                </li>
              ))}
            </ul>
          </article>

          {/* inbox */}
          <article className="rounded-[40px] border border-white/10 p-8 lg:col-span-2">
            <Title>Inbox first, library second</Title>
            <Body>New shares wait for you. Keep one with a tap, drop the rest, or keep everything at once.</Body>
            <div aria-hidden className="mt-6 rounded-3xl bg-paper p-4">
              <p className="line-clamp-1 text-[15px] font-medium">Why pricing pages are so hard to get right</p>
              <p className="mt-0.5 text-[12px] text-smoke">linear.app, just now</p>
              <div className="mt-3 flex gap-2">
                <span className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-white/[0.07] py-2 text-[14px] text-smoke">
                  <Trash2 size={14} strokeWidth={1.9} /> Discard
                </span>
                <span className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-clay py-2 text-[14px] font-semibold text-ink">
                  <Check size={14} strokeWidth={2.4} /> Keep
                </span>
              </div>
            </div>
          </article>

          {/* the pad: the one light tile on the page */}
          <article className="relative flex flex-col overflow-hidden rounded-[32px] bg-chalk p-8 text-ink lg:col-span-2 lg:row-span-2">
            <Title>A pad with no edges</Title>
            <Body className="text-ink/70">
              Draw with a finger or an Apple Pencil. Pinch to zoom out, drag with two fingers to roam, and keep going. When
              you&apos;re done it saves as an image.
            </Body>
            <div className="mt-7 flex flex-1 items-end">
              <div className="w-full overflow-hidden rounded-[22px] ring-1 ring-black/10">
                <MediaSlot id="pad" />
              </div>
            </div>
            <Arrow
              pts={[88, 4, 100, 30, 70, 50, 40, 62]}
              viewBox="0 0 100 70"
              inView
              className="pointer-events-none absolute right-10 top-[52px] hidden h-[70px] w-[100px] text-ink/60 sm:block"
            />
          </article>

          {/* tags */}
          <article className="rounded-[28px] bg-paper p-8 lg:col-span-2">
            <Title>Tags that tag themselves</Title>
            <Body>Every link is sorted by where it came from. Add your own tags on top, and filter in one tap.</Body>
            <ul aria-hidden className="mt-6 flex flex-wrap gap-2">
              <li className={`${chip} flex items-center gap-1.5 bg-chalk text-ink`}>
                <Pin size={13} strokeWidth={2.2} /> Pinned
              </li>
              {["Instagram", "YouTube", "X", "Reddit", "Web"].map((t) => (
                <li key={t} className={chipDim}>
                  {t}
                </li>
              ))}
              {["#Recipes", "#Trip", "#Ideas"].map((t) => (
                <li key={t} className={`${chipDim} text-clay`}>
                  {t}
                </li>
              ))}
            </ul>
          </article>

          {/* search, sort, pin */}
          <article className="rounded-[40px] border border-white/10 p-8 lg:col-span-2">
            <Title>Search, sort, pin</Title>
            <Body>
              Find anything by a word from its title, note or site. Sort by newest, oldest or A to Z. Pin your favourites to
              the top.
            </Body>
            <div aria-hidden className="mt-6 flex items-center gap-2">
              <span className="flex flex-1 items-center gap-2 rounded-2xl bg-white/[0.07] px-3.5 py-3 text-[15px] text-chalk/80">
                <Search size={16} strokeWidth={1.9} className="text-smoke" /> recipe
              </span>
              <span className="grid size-11 place-items-center rounded-2xl bg-white/[0.07]">
                <ArrowUpDown size={17} strokeWidth={1.9} />
              </span>
              <span className="grid size-11 place-items-center rounded-2xl bg-white/[0.07] text-amber">
                <Pin size={17} strokeWidth={2.1} />
              </span>
            </div>
          </article>

          {/* share a collection */}
          <article className="rounded-[28px] bg-raised p-8 lg:col-span-2">
            <Title>Share a collection</Title>
            <Body>
              Send a whole tag, or one save, as a link. Anyone can open it without an account. Stop sharing and the link
              stops working at once.
            </Body>
            <div aria-hidden className="mt-6 rounded-2xl bg-paper p-4">
              <p className="flex items-center gap-2 break-all text-[13px] text-chalk/85">
                <Link2 size={15} strokeWidth={1.9} className="shrink-0 text-clay" />
                {appHost}/s/9f3a1c2e…
              </p>
              <div className="mt-3 flex gap-2">
                <span className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-white/[0.08] py-2 text-[14px]">
                  <Copy size={14} strokeWidth={1.9} /> Copy
                </span>
                <span className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-clay py-2 text-[14px] font-semibold text-ink">
                  <Share2 size={14} strokeWidth={1.9} /> Share
                </span>
              </div>
            </div>
          </article>

          {/* private */}
          <article className="rounded-[32px] bg-paper p-8 lg:col-span-2">
            <div className="flex items-start gap-4">
              <span className="mt-1 grid size-12 shrink-0 place-items-center rounded-full bg-white/[0.08] text-sage">
                <Lock size={20} strokeWidth={1.9} />
              </span>
              <div>
                <Title>Yours by default</Title>
                <Body>
                  Your library is private and tied to your own login, with Google or email. Nothing is public unless you
                  make a link.
                </Body>
              </div>
            </div>
            <dl aria-hidden className="mt-6 divide-y divide-white/[0.07] rounded-2xl bg-ink/60 px-4 text-[14px]">
              <div className="flex justify-between py-3">
                <dt className="text-smoke">Who can see your library</dt>
                <dd>Only you</dd>
              </div>
              <div className="flex justify-between py-3">
                <dt className="text-smoke">Public links</dt>
                <dd>None until you make one</dd>
              </div>
            </dl>
          </article>
        </div>
      </div>
    </section>
  );
}
