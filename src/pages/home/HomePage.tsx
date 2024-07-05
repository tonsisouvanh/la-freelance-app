import HowToStartHiring from "./HowToStartHiring";
import Hero from "./hero/Hero";
import ProjectCategories from "./ProjectCategories";
import PopularProjects from "./project/PopularProjects";
import PopularFreelancer from "./freelancer/PopularFreelancer";
import Reason from "./Reason";
import CtaSection from "./CtaSection";

const Home = () => {
  return (
    <>
      <div className="w-full overflow-hidden">
        <Hero />
        {/* <div className="max-w-7xl px-4 mx-auto max-sm:mt-5 mt-14">
          <AdSlider classname="" />
        </div> */}
        {/* TODO:  Change the UI to be exact same as design for mobile view*/}
        <ProjectCategories />
        <div className="_container max-sm:gap-[3rem] max-sm:py-10 pb-0">
          <PopularProjects />
          <PopularFreelancer />
          <HowToStartHiring className="" />
          <Reason className="" />
          <CtaSection />
        </div>
      </div>
    </>
  );
};

export default Home;
