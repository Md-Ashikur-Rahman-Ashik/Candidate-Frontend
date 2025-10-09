import Image from "next/image";
import HeroSection from "./components/HeroSection";
import { CommitmentBannerExample } from "./components/FeatureCard";

export default function Home() {
  return (
    <div className="container mx-auto">
      <HeroSection />
      <CommitmentBannerExample />
    </div>
  );
}
