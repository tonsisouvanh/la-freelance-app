import { Carousel } from "antd";
import { adone, adtwo } from "../assets";
type Props = {
  classname?: string;
};

const AdSlider = ({ classname }: Props) => {
  return (
    <>
      <div className="rounded-md">
        <Carousel autoplay>
          <div className={`h-[12rem] md:h-[20rem] ${classname && classname}`}>
            <img src={adone} className="w-full h-full object-cover" alt="" />
          </div>
          <div className={`h-[12rem] md:h-[20rem] ${classname && classname}`}>
            <img src={adtwo} className="w-full h-full object-cover" alt="" />
          </div>
          <div className={`h-[12rem] md:h-[20rem] ${classname && classname}`}>
            <img src={adone} className="w-full h-full object-cover" alt="" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default AdSlider;
