import SectionHeading from "../../../components/SectionHeading";
import PopProjectCard from "./PopProjectCard";

const PopularProjects = () => {
  return (
    <section className="">
      <SectionHeading title="ງານຍອດນິຍົມ" />
      <div className="grid max-sm:grid-cols-2 max-md:grid-cols-3 max-lg:grid-cols-4 grid-cols-5 gap-2">
        {Array.from({ length: 6 }, (__, index) => (
          <PopProjectCard key={index} id={index} />
        ))}
      </div>
      <div></div>
    </section>
  );
};

export default PopularProjects;
