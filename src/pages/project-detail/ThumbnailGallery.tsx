import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "./styles.css";
import Review from "./Review";
import { freelancea, proc, prod, thumba, thumbb, thumbc } from "../../assets";

const sliderProjectImages = [
  "https://images.unsplash.com/3/doctype-hi-res.jpg?q=80&w=2930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const ThumbnailGallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="w-full max-w-2xl flex-1 space-y-[48px] max-xl:max-w-xl max-lg:max-w-lg">
      <div className="space-y-5">
        <Swiper
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 rounded-xl"
        >
          <Swiper
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper bg-transparent"
          >
            {sliderProjectImages?.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="-mb-3 rounded-lg bg-transparent !p-0"
              >
                <div className="relative h-[22rem] w-full max-sm:h-[12rem]">
                  <img
                    className="h-full w-full !object-cover"
                    src={slide}
                    alt={"project"}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Swiper>
        {/* ================================= */}
        <Swiper
          // onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative h-[5rem] w-full max-sm:h-[12rem]">
              <img className="h-full w-full !object-cover" src={thumba} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[5rem] w-full max-sm:h-[12rem]">
              <img className="h-full w-full !object-cover" src={thumbb} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[5rem] w-full max-sm:h-[12rem]">
              <img className="h-full w-full !object-cover" src={thumbc} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[5rem] w-full max-sm:h-[12rem]">
              <img className="h-full w-full !object-cover" src={prod} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[5rem] w-full max-sm:h-[12rem]">
              <img className="h-full w-full !object-cover" src={proc} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="space-y-[16px]">
        <h3 className="text-[20px] font-bold text-color-1">ຟີຣແລນສ໌</h3>
        <div className="rounded-lg border bg-white p-4 text-color-7">
          <div className="mt-2 flex items-start">
            <div className="h-[70px] min-w-[70px]">
              <img
                src={freelancea}
                alt="Freelancer"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <div className="ml-4 space-y-5 divide-y-[1px]">
              <div className="space-y-[16px] text-[16px]">
                <div className="space-y-[4px]">
                  <h4 className="text-[20px] font-bold text-color-1">
                    Angelo Abear
                  </h4>
                  <p>Graphic Designer</p>
                  <p className="flex items-center gap-1">
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 10C8.55 10 9.02083 9.80417 9.4125 9.4125C9.80417 9.02083 10 8.55 10 8C10 7.45 9.80417 6.97917 9.4125 6.5875C9.02083 6.19583 8.55 6 8 6C7.45 6 6.97917 6.19583 6.5875 6.5875C6.19583 6.97917 6 7.45 6 8C6 8.55 6.19583 9.02083 6.5875 9.4125C6.97917 9.80417 7.45 10 8 10ZM8 20C5.31667 17.7167 3.3125 15.5958 1.9875 13.6375C0.6625 11.6792 0 9.86667 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 9.86667 15.3375 11.6792 14.0125 13.6375C12.6875 15.5958 10.6833 17.7167 8 20Z"
                        fill="#00A6ED"
                      />
                    </svg>
                    Vientiane
                  </p>
                </div>
                <p className="leading-relaxed text-gray-600">
                  Hey! This is Laira studio, a highly creative and multitalented
                  Graphic design studio based in Pakistan with a magnanimous
                  experience of +10 years in this field. In my corporate and
                  freelance careers, I have worked for organizations of every
                  scale startups, emerging firms, non-profits, and global
                  enterprises. I am an experienced Multidisciplinary designer
                  with a unique and adaptable style specializing in Logo design,
                  illustrations, and much more.
                </p>
              </div>
              <div className="">
                <div className="mt-4 flex justify-between text-center">
                  <div>
                    <span className="text-gray-600">ສໍາເລັດວຽກ</span>
                    <p className="text-lg font-bold text-color-1">18 ຄັ້ງ</p>
                  </div>
                  <div>
                    <span className="text-gray-600">ຂາຍໄດ້</span>
                    <p className="text-lg font-bold text-color-1">20 ຄັ້ງ</p>
                  </div>
                  <div>
                    <span className="text-gray-600">ຖືກຈ້າງ</span>
                    <p className="text-lg font-bold text-color-1">20 ຄັ້ງ</p>
                  </div>
                  <div>
                    <span className="text-gray-600">ຕອບກັບພາຍໃນ</span>
                    <p className="text-lg font-bold text-color-1">10 ນາທີ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Review />
    </div>
  );
};

export default ThumbnailGallery;
