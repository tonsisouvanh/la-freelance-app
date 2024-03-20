import { Carousel } from "antd";
import { adone, adtwo } from "../assets";
type Props = {};

const AdSlider = (props: Props) => {
  return (
    <>
      <div className="rounded-md">
        <Carousel autoplay>
          <div className="h-[20rem]">
            <img src={adone} className="w-full h-full object-cover" alt="" />
          </div>
          <div className="h-[20rem]">
            <img src={adtwo} className="w-full h-full object-cover" alt="" />
          </div>
          <div className="h-[20rem]">
            <img src={adone} className="w-full h-full object-cover" alt="" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default AdSlider;
