import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-script text-[40px] leading-[0.8]">Scribble</p>
          <p className="mt-1 text-[14px] text-smoke">{site.tagline}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-smoke">
          <a href="#how" className="hover:text-chalk">How it works</a>
          <a href="#features" className="hover:text-chalk">What it does</a>
          <a href="#faq" className="hover:text-chalk">Questions</a>
          <a href={site.appUrl} className="hover:text-chalk">Open the app</a>
        </nav>
        <p className="w-full text-[13px] text-smoke/80">&copy; {new Date().getFullYear()} Scribble</p>
      </div>
    </footer>
  );
}
