import { Avatar } from "antd";
import { FaHandsHelping, FaRocketchat, FaShoppingCart } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";

const FreelancerStats = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Avatar
          src="https://bidinnovacion.org/economiacreativa/wp-content/uploads/2014/10/speaker-3.jpg"
          size={65}
        />
        <p>Backky</p>
      </div>
      <div className="grid grid-cols-4 divide-x-2">
        <div className="flex flex-col items-center gap-2">
          <FaHandsHelping className="text-gray-500 text-xl" />
          <div className="text-[0.8rem] text-center">
            <p>ຄວາມສຳເລັດ</p>
            <p>100%</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FaShoppingCart className="text-gray-500 text-xl" />
          <div className="text-[0.8rem] text-center">
            <p>ການສັ່ງຊື້</p>
            <p>12 ຄັ້ງ</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FaArrowRotateLeft className="text-gray-500 text-xl" />
          <div className="text-[0.8rem] text-center">
            <p>ການສັ່ງຊ້ຳ</p>
            <p>12 ຄັ້ງ</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FaRocketchat className="text-gray-500 text-xl" />
          <div className="text-[0.8rem] text-center">
            <p>ການຕອບແຊັດ</p>
            <p>12 ນາທີ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerStats;
