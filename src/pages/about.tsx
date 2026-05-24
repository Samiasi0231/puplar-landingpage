
import { AboutHero } from "@/components/about-section/about-hero";
import { AboutMissions } from "@/components/about-section/about-missions";
import { AboutValues } from "@/components/about-section/about-values";      
import { AboutTimeline } from "../components/about-section/about-timeline";    
import { AboutStats } from "../components/about-section/about-statistics";
import { AboutOffices } from "../components/about-section/about-offices";
import { AboutCompany } from "../components/about-section/about-company";

export default function About() {
  return (
    <div>
     
      <AboutHero />
      <AboutMissions />
      <AboutValues />
      <AboutTimeline />
      <AboutStats />
      <AboutOffices />
      <AboutCompany />
     
    </div>
  );
}
