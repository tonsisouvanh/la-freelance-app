import { Link, useParams } from "react-router-dom";
import { CategoryType } from "../../type";
import AdSlider from "../home/AdSlider";
import { Button } from "antd";
import ProjectCard from "../../components/card/ProjectCard";
import { ArrowRightOutlined } from "@ant-design/icons";
import AllProjects from "../project-board/AllProjects";
import HorizalScroll from "../../components/shared/HorizalScroll";
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
      {/* Categories tab */}
      <div
        className={`flexd hidden flex-col bg-white m-auto p-auto border py-4`}
      >
        <div className="flex overflow-x-scroll hide-scroll-bar">
          <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 gap-4">
            <HorizalScroll>
              {categories.map((category, index) => (
                <Button
                  key={index}
                  htmlType="button"
                  type="default"
                  size="large"
                  className={`font-semibold ${
                    index === 0 && "bg-color-1 text-white"
                  }`}
                >
                  {category.name}
                </Button>
              ))}
            </HorizalScroll>
          </div>
        </div>
      </div>
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
                className="bg-color-1 text-white"
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
          <div className="w-full flex-col flex items-center justify-between mb-4 md:mb-8">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800">
              ທົ່ວໄປ
            </h2>
          </div>
          <div className="flex py-4 w-full gap-3 hide-scroll-bar scroll-smooth items-center justify-start overflow-x-scroll">
            {categories.map((category, index) => (
              <Button
                key={index}
                htmlType="button"
                type="default"
                size="large"
                className={`font-semibold ${
                  index === 0 && "bg-color-1 text-white"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
          <AllProjects />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
