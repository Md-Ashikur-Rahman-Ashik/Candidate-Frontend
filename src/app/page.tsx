import Image from "next/image";
import HeroSection from "./components/HeroSection";
import { CommitmentBannerExample } from "./components/FeatureCard";
import FeatureCards from "./components/ThreeCard";
import CandidateProfile from "./components/CandidateProfile";
import { candidateData } from "@/types/profile";
import Policies, { policiesData } from "./components/Policies";
import UpcomingEvents, { MOCK_EVENTS } from "./components/UpcomingEvents";

export default function Home() {
  return (
    <div className="container mx-auto">
      <HeroSection />
      <CommitmentBannerExample />
      <FeatureCards />
      <CandidateProfile data={candidateData} />
      <Policies policies={policiesData} />
      <UpcomingEvents events={MOCK_EVENTS} />
    </div>
  );
}
