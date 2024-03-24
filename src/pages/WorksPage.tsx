import { useParams } from "react-router-dom";
import { CategoryType } from "../type";
import HorizalScrollWorkCategory from "../components/shared/HorizalScrollWorkCategory";
import AdSlider from "../components/AdSlider";
import { Button, Card } from "antd";
import WorkCard from "../components/card/WorkCard";
import Works from "../components/workboard/Works";
import {
  ArrowDownOutlined,
  CaretDownOutlined,
  DownOutlined,
} from "@ant-design/icons";
const categories: CategoryType[] = [
  { name: "ຕາກ້ອງ" },
  { name: "ອອກແບບ" },
  { name: "ອອກແບບບ້ານ ແລະ ໂຄງການ" },
  { name: "ຂຽນໂປຮແກຮມ" },
  { name: "ຕັດຕໍ່ວິດີໂອ ແລະ ຮູບພາບ" },
  { name: "ແປພາສາ ແລະ ເອກະສານ" },
  { name: "ການຕະຫຼາດ" },
];

const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
};
const data = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
];
const WorksPage = () => {
  const { category } = useParams();
  console.log(category);

  return (
    <div>
      <HorizalScrollWorkCategory categories={categories} />
      <div className="_container gap-10">
        <AdSlider classname="h-[14rem] border" />
        <h1 className="text-3xl mt-4 mb-12 font-bold">ສະບາຍດີ , ແບັກ</h1>
        {/* Popular */}
        <div className="">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12">ມາແຮງ</h2>
          <div className="flex overflow-x-scroll hide-scroll-bar gap-6 pb-10">
            {data.map((_, index) => (
              <div key={index}>
                <WorkCard classname="w-72" />
              </div>
            ))}
          </div>
        </div>
        {/* All */}
        <div className="flex flex-col items-center justify-center">
          <Works />
          <Button className="mt-10 h-fit justify-center items-center flex">
            ໂຫຼດຕື່ມ
            <DownOutlined />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorksPage;
