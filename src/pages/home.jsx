import Hero from "../components/Home/hero";
import About from "../components/Home/About";
import Programs from "../components/Home/Programs";
import ImpactStats from "../components/Home/ImpactStats";
import HowWeWork from "../components/Home/HowWeWork";
import ActiveCampaigns from "../components/Home/ActiveCampaigns";
import SuccessStories from "../components/Home/SuccessStories"; 
import Gallery from "../components/Home/Gallery"; 
import VolunteerCTA from "../components/Home/VolunteerCTA"; 
import NGOImageSlider from "../components/Home/NGOImageSlider"; 
import DonatePopup from "../components/Home/DonatePopup"; 
import ImpactTicker from "../components/Home/ImpactTicker";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <Hero />
      <ImpactTicker/>
      <About/>
      <NGOImageSlider/>
      <Programs/>
      <HowWeWork/>
      <ActiveCampaigns/>
      <Gallery/>
      <SuccessStories/>
      <ImpactStats/>
        <VolunteerCTA/>
        <DonatePopup/>
    </>
  );
};

export default Home;