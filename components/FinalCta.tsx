import { site } from "@/lib/site";
import { Button } from "./ui/Button";
import { Underline } from "./ui/Doodle";

export function FinalCta() {
  return (
    <section className="paper relative px-5 py-32 text-center">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-script text-[84px] leading-[0.82] sm:text-[124px]">
          <span className="relative inline-block">
            Start dropping things.
            <Underline inView className="absolute -bottom-2 left-0 h-4 w-full text-clay" />
          </span>
        </h2>
        <p className="mx-auto mt-10 max-w-[44ch] text-[18px] leading-[1.65] text-chalk/75">
          Open Scribble in your browser, then install it so you can share to it from your other apps.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href={site.appUrl}>Open Scribble</Button>
        </div>
      </div>
    </section>
  );
}
