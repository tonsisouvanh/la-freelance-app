import { Carousel } from "antd";
import { adone } from "../../assets";
import Image from "../../components/Image";

type Props = {
  classname?: string;
};

const adData = [adone];

const AdSlider = ({ classname }: Props) => {
  return (
    <>
      <div className="rounded-md">
        <Carousel className="flex justify-center" dots={false} autoplay>
          {adData.map((item, index) => (
            <div
              key={index}
              className={`h-[12rem] md:h-[20rem] ${classname && classname}`}
            >
              <Image
                image={item}
                className={"w-full h-full object-contain"}
              ></Image>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default AdSlider;
