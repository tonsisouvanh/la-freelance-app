import SectionHeading from "../../../components/SectionHeading";
import PopularFreelancerCard from "./PopularFreelancerCard";
import { Button } from "antd";
import { GoArrowRight } from "react-icons/go";

type Props = {};


const PopularFreelancer = (props: Props) => {
  return (
    <section className="">
      <SectionHeading title="ຟຣີແລນສ໌ຍອດນິຍົມ" />
      <div className="mb-[40px] grid grid-cols-4 gap-[32px] max-md:grid-cols-3 max-sm:grid-cols-2">
        <PopularFreelancerCard />
        {/* {Array.from({ length: 8 }, (__, index) => (
          <PopularFreelancerCard key={index} id={index} />
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

export default PopularFreelancer;
