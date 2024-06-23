import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { projectSliderData } from "../../../const";

type Props = {};

const ProjectSlider = (props: Props) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-md"
      >
        {projectSliderData?.map((slide) => (
          <SwiperSlide key={slide.id} className="mb-5 bg-transparent ">
            <div className="relative max-sm:h-[15rem]">
              <img
                className="h-full w-full object-cover"
                src={slide.imageUrl}
                alt={"project"}
              />
              <div className="absolute rounded-md bottom-0 max-sm:h-[7rem] h-[10rem] flex items-end justify-center left-0 right-0 p-5 bg-gradient-to-t from-color-1 via-color-1/90 to-transparent">
                <h1
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                  className="text-xl text-white lg:text-3xl"
                >
                  {slide.title}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProjectSlider;
