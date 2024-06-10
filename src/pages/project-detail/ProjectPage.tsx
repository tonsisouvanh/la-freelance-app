import { HeartFilled, ShareAltOutlined, StarFilled } from "@ant-design/icons";
import { FaChevronLeft } from "react-icons/fa";

import PackageTabs from "./PackageTabs";
import { Button } from "antd";
import Reviews from "./Reviews";
import FreelancerStats from "./FreelancerStats";
import { useNavigate } from "react-router-dom";
import Image from "../../components/Image";

const ProjectPage = () => {
  const navigate = useNavigate();
  return (
    <div className="_container max-md:py-0 max-md:px-0 py-4">
      <div className="flex flex-1 justify-center">
        <div className="bg-transparent overflow-hidden max-md:max-w-full">
          <div className="relative md:w-1/2 md:mx-auto">
            <Image
              image="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              className="w-full h-full md:object-cover "
            />
            {/* <img
              alt="Product Image"
            /> */}
            <div className="absolute bg-gradient-to-b from-black/40 to-transparent h-[5rem] p-4 flex justify-between items-start top-0 left-0 right-0">
              <button onClick={() => navigate(-1)}>
                <FaChevronLeft className="cursor-pointer font-bold text-white text-2xl" />
              </button>
              <div className="space-x-4">
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
                  <p className="text-gray-600 text-md">ຂາຍໄດ້ 26 ຄັ້ງ</p>
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
                <FreelancerStats />
              </div>
              <div className="py-6">
                <Reviews />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
