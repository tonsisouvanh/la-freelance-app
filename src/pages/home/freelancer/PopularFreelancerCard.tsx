import React from "react";
import { Link } from "react-router-dom";
import Rating from "../../../components/shared/Rating";
import { Avatar } from "antd";
import {
  freelancea,
  freelanceb,
  freelancec,
  freelanced,
  workb,
} from "../../../assets";
import { formatPrice } from "../../../utils";

type Props = {
  key?: number;
  id?: number;
};
const freelancerData = [
  {
    id: 1,
    profileImage: freelancea, // replace with actual path
    name: "Angelo Abear",
    title: "Graphic Designer, Illustrator and Motion Graphic Designer",
    rate: 4,
    completedProjects: 26,
    budget: 1000000,
  },
  {
    id: 2,
    profileImage: freelanceb, // replace with actual path
    name: "Taylor Swift",
    title: "แต่งรูปสินค้า ออกแบบภาพแมว doodle",
    rate: 4,
    completedProjects: 30,
    budget: 100000,
  },
  {
    id: 3,
    profileImage: freelancec, // replace with actual path
    name: "Black Jack",
    title: "Website & Application Developer",
    rate: 4,
    completedProjects: 15,
    budget: 20000000,
  },
  {
    id: 4,
    profileImage: freelanced, // replace with actual path
    name: "Alex Alex",
    title: "UX/UI Designer",
    rate: 4,
    completedProjects: 25,
    budget: 8000000,
  },
];

const PopularFreelancerCard = ({ id }: Props) => {
  return (
    <>
      {freelancerData.map((freelancer) => (
        <div
          key={freelancer.id}
          className="rounded-xl border bg-color-8 px-[16px] py-[12px] hover:shadow-xl"
        >
          <Link to="#">
            <article className="space-y-[10px] divide-y-[2px]">
              <div className="flex w-full flex-col items-center gap-[12px]">
                <div className="space-y-[4px] text-center">
                  <img
                    className="h-[120px] w-[120px] rounded-full object-cover"
                    src={freelancer.profileImage}
                    alt=""
                  />
                  <p className="text-[14px] font-medium text-color-7">
                    {freelancer.name}
                  </p>
                </div>
                <h2 className="line-clamp-2 h-[3rem] text-[14px] text-color-2">
                  {freelancer.title}
                </h2>
                <div className="">
                  <Rating
                    value={freelancer.rate}
                    color="#FFC700"
                    className="gap-1"
                  />
                </div>
              </div>
              <div className="flex items-end justify-between pt-[10px]">
                <div>
                  <p className="text-[14px] text-color-2">
                    ວຽກທີ່ໄດ້ຮັບ: {freelancer.completedProjects}
                  </p>
                </div>
                <div className="space-y-1 text-end">
                  <p className="text-[14px] text-color-2">ເລີ່ມຕົ້ນ</p>
                  <p className="text-[16px] font-bold text-color-1">
                    {formatPrice(freelancer.budget)}
                  </p>
                </div>
              </div>
            </article>
          </Link>
        </div>
      ))}
    </>
  );
};

export default PopularFreelancerCard;
