import HeroSection from "@/components/home/HeroSection";
import BgGradient from "@/components/comman/BgGradient";
import DemoSection from "@/components/home/DemoSection";
import HowitWorksSection from "@/components/home/HowitWorksSection";
import PricingSection from "@/components/home/PricingSection";
import CTAsection from "@/components/home/CTAsection";


export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient/>
      <div className="flex flex-col">
      <HeroSection/>
      <DemoSection/>
     <HowitWorksSection/>
      <PricingSection/>
      <CTAsection/>

      </div>
    </div>
  );
}
