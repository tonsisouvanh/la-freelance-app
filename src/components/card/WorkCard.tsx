import { HeartOutlined } from "@ant-design/icons";
import { worka } from "../../assets";
import { Rate } from "antd";
type Props = {
  classname?: string;
};

const WorkCard = ({ classname }: Props) => {
  return (
    <div
      className={`bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2d border hover:border-primary transition-all relative ${
        classname && classname
      }`}
    >
      <div className="bg-white w-8 h-8 flex items-center justify-center rounded-md cursor-pointer absolute top-4 right-4">
        <HeartOutlined />
      </div>
      <div className="h-[160px] sm:h-[220px] p-3 overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
        <img
          src={worka}
          alt="Product 1"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-xs sm:text-sm sm:line-clamp-2 font-bold text-gray-800">
          Logo design + Brand CI ออกแบบโดย ดีไซน์เนอร์ Degree เมืองนอก
        </h3>
        <h4 className="text-md sm:text-lg font-bold mt-2 text-primary">
          200.000 K
        </h4>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <p className="text-gray-500 mt-2d text-xs sm:text-md">
            ຂາຍສຳເລັດ: 10
          </p>
          <div className="mt-2d sm:mt-6d">
            <Rate className="text-sm" value={5} disabled />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
