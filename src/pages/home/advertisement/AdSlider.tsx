import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { advertisementData } from "../../../const";
import "./styles.css";

type Props = {
  classname?: string;
};

const AdSlider = ({ classname }: Props) => {
  return (
    <>
      <div className="w-full">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper rounded-lg shadow-lg"
        >
          {advertisementData?.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="-mb-3 bg-transparent rounded-lg !p-0"
            >
              <div className="relative w-full max-sm:h-[12rem] h-[22rem]">
                <img
                  className="h-full w-full !object-cover"
                  src={slide.imageUrl}
                  alt={"project"}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default AdSlider;
