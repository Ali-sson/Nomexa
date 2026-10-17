
import Hero from "../components/Hero";
import HeroImage from "../assets/HeroImage1.png";
import FocusAreas from "../components/FocusAreas";
import Impact from "../components/Impact";
import AboutSection from "../components/AboutSection";
import HowItWorks from "../components/HowItWorks";
import Sustainability from "../components/Sustainability";
import PartnerCTA from "../components/PartnerCTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
    <Hero
      eyebrow="CLIMATE-SMART AGRICULTURE"
      title={
        <>
          Smart Solutions
          <br />
          for a{" "}
          <span className="text-[#78BE44]">
            Resilient
          </span>
          <br />
          Food Future
        </>
      }
      description="We develop solar-powered, IoT-enabled and sustainable agricultural technologies that help farmers grow more, use resources efficiently and adapt to a changing climate."
      backgroundImage={HeroImage}
      primaryButtonText="Explore Our Technology"
      primaryButtonLink="/technology"
      secondaryButtonText="Partner With Us"
      secondaryButtonLink="/partnerships"
      badgeTitle="Clean Energy. Productive Farms."
      badgeDescription="Resilient Communities."
    />

    <FocusAreas />
    <Impact/>
    <AboutSection/>
    <HowItWorks/>
    <Sustainability/>
    <Partners/>
    <PartnerCTA/>
    <Footer/>

    </>
  );
};

export default Home;


// import Hero from "../components/Hero";
// import HeroImage from "../assets/HeroImage.png";

// const Home = () => {
//   return (
//     <Hero
//       eyebrow="ABOUT NOMEXA SOLUTIONS"
//        title={
//         <>
//           Innovation <br />
//            for a Stronger
//           Agricultural Future
//         </>
//       }
//       description="We are a climate-smart agricultural technology company developing practical, sustainable and scalable solutions that help farmers produce more, use resources efficiently and adapt to a changing climate."
//       backgroundImage={HeroImage}
//     />
//   );
// };

// export default Home;
