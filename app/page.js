import Image from "next/image";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import LocationSection from "@/components/sections/LocationSection";
import SocialLinksSection from "@/components/sections/SocialLinksSection";

export default function Home() {
  return (
    <main className="bg-[#fcf5e8] min-h-screen">
      <div className="w-full">
        <HeroSection />
        <AboutSection />
        <WhyChooseUsSection />
        <ShowcaseSection />
        <LocationSection />
        <SocialLinksSection />
        <Image
          width={50}
          height={50}
          className="w-[7.03%] h-[1.32%] absolute right-[48.7%] left-[44.27%] bottom-[98.27%] top-[0.41%] overflow-visible"
          src="/group.svg"
          alt="Group icon"
        />
      </div>
    </main>
  );
}
