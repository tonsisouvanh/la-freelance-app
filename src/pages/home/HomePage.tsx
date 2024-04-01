import HowToStartHiring from "./HowToStartHiring";
import Reason from "./Reason";
import Hero from "./Hero";
import ProjectCategories from "./ProjectCategories";
import FreelanceQuality from "./FreelanceQuality";
import AdSlider from "./AdSlider";

const Home = () => {
  return (
    <>
      <div className="w-full overflow-hidden">
        <Hero />
        <div className="max-w-6xl px-4 mx-auto py-10">
          <AdSlider classname="" />
        </div>
        <div className="_container max-sm:py-2 max-sm:gap-[8rem]">
          <ProjectCategories />
          <Reason />
          <HowToStartHiring />
          <FreelanceQuality />
        </div>
      </div>
    </>
  );
};

export default Home;
