import Hero from "../components/Hero";
import HeroImage from "../assets/HeroImage.png";
import AboutSection from "../components/AboutSection";
import TeamImage from "../assets/TeamWork.png";
import Footer from "../components/Footer";
import VisionMissionValues from "../components/VisionMissionValues";
import Sustainability from "../components/Sustainability";
import {Sprout, SolarPanel, ChartNoAxesCombined, UsersRound } from "lucide-react";
import TeamSection from "../components/TeamSection";


function About() {
  return (
    <>
    <Hero
      eyebrow="About Nomexa Solutions"
      title={
        <>
          Innovation 
          <br />
          for a Stronger{" "} <br/>
          <span className="text-[#78BE44]">
            Agricultural Future
          </span>
        </>
      }
      description="We are a climate-smart agricultural technology company developing practical, sustainable and scalable solutions that help farmers produce more, use resources efficiently and adapt to a changing climate."
      backgroundImage={HeroImage}
      primaryButtonText={false}
     primaryButtonLink={false}
      secondaryButtonText= {false}
      secondaryButtonLink={false}
      badgeTitle={false}
      badgeDescription={false}
     showCTA={false}
     showBadge={false}
    heroImageClassName="relative flex min-h-[540px] items-center overflow-hidden bg-cover bg-left md:min-h-[600px] lg:min-h-[620px]"
    
    />

<AboutSection
  eyebrow="OUR STORY"
  title="Building Solutions for Real-World Challenges"
  description={
    <p>
      At Nomexa Solutions, was founded with a clear purpose: to support farmers with innovative technologies that address real 
      agricultural challenges, from water access and climate variability to the need for more efficient and sustainable food production.
       <p className="py-4">
      We combine renewable energy, digital innovation and modern growing systems to create practical solutions that improve productivity, optimise resource use and build resilience across agricultural communities.</p>
    </p>
  }
  imageAlt="Agricultural professional using digital technology in a greenhouse"
  image={TeamImage}
  cta={false}
  coreValues={false}
/>

<VisionMissionValues/>

<Sustainability
  eyebrow="Our Approach"
  title="Technology For People, Farms and the Planet"
  description="We take an integrated approach, combining renewable energy, digital technology and modern agricultural systems to deliver solutions that are practical, scalable and inclusive."
  buttonText="Explore Our Technology"
  buttonLink="/technology"
  solutions={[
    {
      title: "Renewable Energy",
      description: "Clean, reliable power for agriculture productivity.",
      icon: SolarPanel,
    },
    {
      title: "Digital Innovation",
      description: "Data-driven tools for smarter farming decisions.",
      icon: ChartNoAxesCombined,
    },
    {
      title: "Modern Growing Systems",
      description: "Efficient and resilient agricultural production.",
      icon: Sprout,
    },
    {
      title: "Inclusive Growth",
      description: "Opportunities for farmers, women and youth.",
      icon: UsersRound,
    },
  ]}
/>

<TeamSection/>


<Footer/>
    
  </>
  )
}

export default About