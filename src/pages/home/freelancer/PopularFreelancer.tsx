import SectionHeading from "../../../components/SectionHeading";
import PopularFreelancerCard from "./PopularFreelancerCard";
import { Button } from "antd";
import { GoArrowRight } from "react-icons/go";

type Props = {};

const PopularFreelancer = (props: Props) => {
  return (
    <section className="">
      <SectionHeading title="ຟຣີແລນສ໌ຍອດນິຍົມ" />
      <div className="grid max-sm:grid-cols-2 max-md:grid-cols-3 grid-cols-4 gap-[32px] mb-[40px]">
        {Array.from({ length: 6 }, (__, index) => (
          <PopularFreelancerCard key={index} id={index} />
        ))}
      </div>
      {/* <Button icon={<GoArrowRight />} iconPosition={} >ເບິ່ງທັງໝົດ</Button> */}
      <div className="max-w-fit ml-auto">
        <Button
          className="text-[16px] border-none shadow-none text-color-1 font-bold"
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

export default PopularFreelancer;
