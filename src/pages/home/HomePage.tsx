import HowToStartHiring from "./HowToStartHiring";
import Reason from "./Reason";
import Hero from "./hero/Hero";
import ProjectCategories from "./ProjectCategories";
import FreelanceQuality from "./FreelanceQuality";
import AdSlider from "./advertisement/AdSlider";
import PopularProjects from "./project/PopularProjects";

const Home = () => {
  return (
    <>
      <div className="w-full overflow-hidden">
        <Hero />
        <div className="max-w-7xl px-4 mx-auto max-sm:mt-5 mt-14">
          <AdSlider classname="" />
        </div>
        {/* TODO:  Change the UI to be exact same as design for mobile view*/}
        <div className="_container max-sm:py-10 max-sm:gap-[3rem]">
          <ProjectCategories />
          <PopularProjects />
          <Reason className="max-sm:hidden" />
          <HowToStartHiring className="" />
          <FreelanceQuality className="max-sm:hidden" />
        </div>
      </div>
    </>
  );
};

export default Home;
