import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Sources } from "@/components/Sources";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { DayToDay } from "@/components/DayToDay";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Sources />
        <HowItWorks />
        <Features />
        <DayToDay />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
