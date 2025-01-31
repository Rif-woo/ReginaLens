import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import LocationSection from "@/components/sections/LocationSection";
import SocialLinksSection from "@/components/sections/SocialLinksSection";

export default function Home() {
  return (
    <main className="bg-[#fcf5e8] min-h-screen">
      <div className="w-[1600px] h-screen mx-auto">
        <HeroSection />
        <AboutSection />
        <WhyChooseUsSection />
        <ShowcaseSection />
        <LocationSection />
        <SocialLinksSection />
      </div>
    </main>
  );
}
