import HowToStartHiring from "./HowToStartHiring";
import Reason from "./Reason";
import Hero from "./hero/Hero";
import ProjectCategories from "./ProjectCategories";
import FreelanceQuality from "./FreelanceQuality";
import AdSlider from "./AdSlider";
import PopularProjects from "./PopularProjects";

const Home = () => {
  return (
    <>
      <div className="w-full overflow-hidden">
        <Hero />
        <div className="max-w-6xl px-4 mx-auto py-10">
          <AdSlider classname="" />
        </div>
        {/* TODO:  Change the UI to be exact same as design for mobile view*/}
        <div className="_container max-sm:py-2 max-sm:gap-[1rem]">
          <div className="space-y-4">
            <ProjectCategories />
            <PopularProjects />
          </div>
          <Reason className="max-sm:hidden" />
          <HowToStartHiring className="max-sm:hidden" />
          <FreelanceQuality className="max-sm:hidden" />
        </div>
      </div>
    </>
  );
};

export default Home;
