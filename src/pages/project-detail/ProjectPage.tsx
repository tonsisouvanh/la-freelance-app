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
    <div className="_container py-4 max-md:px-0 max-md:py-0">
      <div className="flex flex-1 justify-center">
        <div className="overflow-hidden bg-transparent max-md:max-w-full">
          <div className="relative md:mx-auto md:w-1/2">
            <Image
              image="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              className="h-full w-full md:object-cover"
            />
            <div className="absolute left-0 right-0 top-0 flex h-[5rem] items-start justify-between bg-gradient-to-b from-black/40 to-transparent p-4">
              <button onClick={() => navigate(-1)}>
                <FaChevronLeft className="cursor-pointer text-2xl font-bold text-white" />
              </button>
              <div className="space-x-4">
                <span>
                  <HeartFilled className="cursor-pointer text-2xl font-bold text-red-500" />
                </span>
                <span>
                  <ShareAltOutlined className="cursor-pointer text-2xl font-bold text-white" />
                </span>
              </div>
            </div>
            <div className="divide-y-2 divide-slate-300 p-2">
              <div className="">
                <h3 className="mb-2 text-lg font-medium">
                  ຣັບແປຣພາສາ ອັງກິດ ລາວ ຈີນ ໄທ
                </h3>
                <div className="flex items-center gap-2">
                  <StarFilled className="text-xl text-yellow-400" />
                  {"4.9"}
                  <p className="text-md text-gray-600">ຂາຍໄດ້ 26 ຄັ້ງ</p>
                </div>
                <p className="mb-4 text-sm text-gray-600">
                  ຣັບແປພາສາທາງການ ແລະ ບໍທາງການ ເດີ້
                </p>
              </div>
              <div className="py-6">
                <PackageTabs />
              </div>
              <div className="space-y-5 py-6">
                <Button
                  block
                  className="bg-color-1 text-white"
                  type="primary"
                  htmlType="button"
                >
                  ແຊັດກັບຟີຣແລຣນ
                </Button>
                <p className="text-center text-sm text-gray-500">
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
