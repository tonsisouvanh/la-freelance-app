import React from "react";
import { Link } from "react-router-dom";
import Rating from "../../../components/shared/Rating";
import { Avatar } from "antd";
import { workb } from "../../../assets";

type Props = {
  key?: number;
  id: number;
};

const PopularFreelancerCard = ({ id }: Props) => {
  return (
    <div
      key={id}
      className="rounded-xl border bg-color-8 px-[16px] py-[12px] hover:shadow-xl"
    >
      <Link to="#">
        <article className="space-y-[10px] divide-y-[2px]">
          <div className="flex w-full flex-col items-center gap-[12px]">
            <div className="space-y-[4px] text-center">
              <img
                className="h-[120px] w-[120px] rounded-full object-cover"
                src="https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
                alt=""
              />
              <p className="text-[14px] font-medium text-color-7">
                Angelo Abear
              </p>
            </div>
            <h2 className="line-clamp-2 h-[3rem] text-[14px] text-color-2">
              Graphic Designer, Illustrator and Motion Graphic Designer
            </h2>
            <div className="">
              <Rating value={4} color="#FFC700" className="gap-1" />
            </div>
          </div>
          <div className="flex items-end justify-between pt-[10px]">
            <div>
              <p className="text-[14px] text-color-2">ວຽກທີ່ໄດ້ຮັບ: 26</p>
            </div>
            <div className="space-y-1 text-end">
              <p className="text-[14px] text-color-2">ເລີ່ມຕົ້ນ</p>
              <p className="text-[16px] font-bold text-color-1">
                1.000.000 ກີບ
              </p>
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default PopularFreelancerCard;
