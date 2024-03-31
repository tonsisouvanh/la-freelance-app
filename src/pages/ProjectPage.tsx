import {
  LeftCircleFilled,
  HeartFilled,
  ShareAltOutlined,
  StarFilled,
} from "@ant-design/icons";
import PackageTabs from "../components/project/PackageTabs";
import { Avatar, Button } from "antd";
import { FaHandsHelping, FaRocketchat, FaShoppingCart } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import Rating from "../components/Rating";

const ProjectPage = () => {
  return (
    <div className="_container py-4">
      <div className="flex flex-1 justify-center">
        <div className="bg-transparent overflow-hidden max-sm:max-w-sm">
          <div className="relative md:w-1/2 md:mx-auto">
            <img
              className="w-full h-full md:object-cover "
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              alt="Product Image"
            />
            <div className="absolute bg-gradient-to-b from-black/40 to-transparent h-[5rem] p-2 flex justify-between items-start top-0 left-0 right-0">
              <div>
                <LeftCircleFilled className="cursor-pointer font-bold text-white text-2xl" />
              </div>
              <div className="space-x-2">
                <span>
                  <HeartFilled className="cursor-pointer font-bold text-red-500 text-2xl" />
                </span>
                <span>
                  <ShareAltOutlined className="cursor-pointer font-bold text-white text-2xl" />
                </span>
              </div>
            </div>
            <div className="p-2 divide-y-2 divide-slate-300">
              <div className="">
                <h3 className="text-lg font-medium mb-2">
                  ຣັບແປຣພາສາ ອັງກິດ ລາວ ຈີນ ໄທ
                </h3>
                <div className="flex items-center gap-2">
                  <StarFilled className="text-yellow-400 text-xl" />
                  {"4.9"}
                  <p className="text-gray-600 text-sm">ຂາຍໄດ້ 26 ຄັ້ງ</p>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  ຣັບແປພາສາທາງການ ແລະ ບໍທາງການ ເດີ້
                </p>
              </div>
              <div className="py-6">
                <PackageTabs />
              </div>
              <div className="py-6 space-y-5">
                <Button
                  block
                  className="text-white bg-primary"
                  type="primary"
                  htmlType="button"
                >
                  ແຊັດກັບຟີຣແລຣນ
                </Button>
                <p className="text-sm text-center text-gray-500">
                  ທ່ານຈະບໍ່ເສຍຄ່າໃຊ້ຈ່າຍ
                </p>
              </div>
              <div className="py-6">
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
                      <div className="text-[0.6rem] text-center">
                        <p>ຄວາມສຳເລັດ</p>
                        <p>100%</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <FaShoppingCart className="text-gray-500 text-xl" />
                      <div className="text-[0.6rem] text-center">
                        <p>ການສັ່ງຊື້</p>
                        <p>12 ຄັ້ງ</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <FaArrowRotateLeft className="text-gray-500 text-xl" />
                      <div className="text-[0.6rem] text-center">
                        <p>ການສັ່ງຊ້ຳ</p>
                        <p>12 ຄັ້ງ</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <FaRocketchat className="text-gray-500 text-xl" />
                      <div className="text-[0.6rem] text-center">
                        <p>ການຕອບແຊັດ</p>
                        <p>12 ນາທີ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-6 space-y-4">
                <p className="text-xs">ຣີວິວຈາກຜູ້ຈ້າງ ( 23 )</p>
                <div className="flex items-center justify-between gap-4">
                  <div className="bg-primary/60 w-14 h-14 flex items-center justify-center rounded-full">
                    <span className="text-white">5.0</span>
                  </div>
                  <div className="flex flex-1 items-center justify-between">
                    <div className="text-xs whitespace-nowrap text-gray-500">
                      <p>ການຕອບ</p>
                      <p>ການຣັບວຽກ ສົ່ງວຽກ</p>
                    </div>
                    <div className="text-xs text-gray-500 space-y-1 ">
                      <Rating value={4} color={"#ffe234"} />
                      <Rating value={5} color={"#ffe234"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
