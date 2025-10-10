import Image from "next/image";
import HeroSection from "./components/HeroSection";
import { CommitmentBannerExample } from "./components/FeatureCard";
import FeatureCards from "./components/ThreeCard";
import CandidateProfile from "./components/CandidateProfile";
import { candidateData } from "@/types/profile";

export default function Home() {
  return (
    <div className="container mx-auto">
      <HeroSection />
      <CommitmentBannerExample />
      <FeatureCards />
      <CandidateProfile data={candidateData} />
    </div>
  );
}
