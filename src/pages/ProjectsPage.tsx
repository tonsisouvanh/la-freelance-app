import { Link, useParams } from "react-router-dom";
import { CategoryType } from "../type";
import AdSlider from "../components/AdSlider";
import { Button } from "antd";
import ProjectCard from "../components/card/ProjectCard";
import { ArrowRightOutlined } from "@ant-design/icons";
import Projects from "../components/workboard/Projects";
import HorizalScrollProjectCategory from "../components/shared/HorizalScrollWorkCategory";
const categories: CategoryType[] = [
  { name: "ຕາກ້ອງ" },
  { name: "ອອກແບບ" },
  { name: "ອອກແບບບ້ານ ແລະ ໂຄງການ" },
  { name: "ຂຽນໂປຮແກຮມ" },
  { name: "ຕັດຕໍ່ວິດີໂອ ແລະ ຮູບພາບ" },
  { name: "ແປພາສາ ແລະ ເອກະສານ" },
  { name: "ການຕະຫຼາດ" },
];


const ProjectsPage = () => {
  const { category = "" } = useParams();
  console.log(category);

  return (
    <div>
      <HorizalScrollProjectCategory categories={categories} />
      <div className="_container max-md:py-4 gap-10">
        <AdSlider classname="h-[14rem]" />
        <h1 className="text-3xl mt-4 mb-12 font-bold">ສະບາຍດີ , ແບັກ</h1>
        {/* Popular */}
        <div className="">
          <div className="w-full flex items-center justify-between mb-4 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800">
              ມາແຮງ
            </h2>
            <Link to="/projects/:popular">
              <Button
                icon={<ArrowRightOutlined />}
                type="primary"
                className="bg-primary text-white"
              ></Button>
            </Link>
          </div>
          <div className="flex overflow-x-scroll hide-scroll-bar gap-6 pb-10">
            {Array.from({ length: 10 }, (__, index) => (
              <div key={index}>
                <ProjectCard classname="w-72" />
              </div>
            ))}
          </div>
        </div>
        {/* All */}
        <div className="flex flex-col items-center justify-center">
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
