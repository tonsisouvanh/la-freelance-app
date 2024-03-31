import { Carousel } from "antd";
import { adone } from "../assets";
type Props = {
  classname?: string;
};

const adData = [adone];

const AdSlider = ({ classname }: Props) => {
  return (
    <>
      <div className="rounded-md">
        <Carousel dots={false} autoplay>
          {adData.map((item, index) => (
            <div
              key={index}
              className={`h-[12rem] md:h-[20rem] ${classname && classname}`}
            >
              <img src={item} className="w-full h-full object-contain" alt="" />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default AdSlider;
