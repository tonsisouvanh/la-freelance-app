import { Link, useParams } from "react-router-dom";
import { CategoryType } from "../type";
import AdSlider from "../components/AdSlider";
import { Button } from "antd";
import ProjectCard from "../components/card/ProjectCard";
import { ArrowRightOutlined } from "@ant-design/icons";
import Projects from "../components/workboard/Projects";
import HorizalScrollProjectCategory from "../components/shared/HorizalScrollWorkCategory";
const categories: CategoryType[] = [
  { id: 1, name: "ຕາກ້ອງ" },
  { id: 2, name: "ອອກແບບ" },
  { id: 3, name: "ອອກແບບບ້ານ ແລະ ໂຄງການ" },
  { id: 4, name: "ຂຽນໂປຮແກຮມ" },
  { id: 5, name: "ຕັດຕໍ່ວິດີໂອ ແລະ ຮູບພາບ" },
  { id: 6, name: "ແປພາສາ ແລະ ເອກະສານ" },
  { id: 7, name: "ການຕະຫຼາດ" },
];

const ProjectsPage = () => {
  const { category = "" } = useParams();
  console.log(category);

  return (
    <div>
      <HorizalScrollProjectCategory categories={categories} />
      <div className="_container max-md:py-4 gap-2">
        <AdSlider classname="h-[14rem]" />
        <h1 className="text-3xl font-bold">ສະບາຍດີ , ແບັກ</h1>
        {/* Popular */}
        <div className="">
          <div className="w-full flex items-center justify-between mb-4 md:mb-8">
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
              <Link to="/projects/category/1" key={index}>
                <ProjectCard classname="w-72" />
              </Link>
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
