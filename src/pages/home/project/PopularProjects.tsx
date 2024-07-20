import { Button } from "antd";
import SectionHeading from "../../../components/SectionHeading";
import PopProjectCard from "./PopProjectCard";
import { GoArrowRight } from "react-icons/go";

const PopularProjects = () => {
  return (
    <section className="">
      <SectionHeading title="ງານຍອດນິຍົມ" />
      <div className="mb-[40px] grid grid-cols-4 gap-[32px] max-md:grid-cols-3 max-sm:grid-cols-2">
          <PopProjectCard />
        {/* {projectData.map((project, index) => (
          <PopProjectCard key={index} id={index} />
        ))} */}
      </div>
      {/* <Button icon={<GoArrowRight />} iconPosition={} >ເບິ່ງທັງໝົດ</Button> */}
      <div className="ml-auto max-w-fit">
        <Button
          className="border-none text-[16px] font-bold text-color-1 shadow-none"
          icon={<GoArrowRight size={25} className="font-bold" />}
          type="default"
          iconPosition={"end"}
        >
          ເບິ່ງທັງໝົດ
        </Button>
      </div>
    </section>
  );
};

export default PopularProjects;
