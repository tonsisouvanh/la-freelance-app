import HowToStartHiring from "../components/HowToStartHiring";
import Reason from "../components/Reason";
import Hero from "../components/Hero";
import WorkCategories from "../components/WorkCategories";
import FreelanceQuality from "../components/FreelanceQuality";
import AdSlider from "../components/AdSlider";

const Home = () => {
  return (
    <>
      <div className="w-full overflow-hidden">
        <Hero />
        <div className="max-w-6xl px-4 mx-auto py-10">
          <AdSlider />
        </div>
        <div className="_container">
          <WorkCategories />
          <Reason />
          <HowToStartHiring />
          <FreelanceQuality />
        </div>
      </div>
    </>
  );
};

export default Home;
