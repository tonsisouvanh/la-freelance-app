import { Link } from "react-router-dom";
import ProjectCard from "../../components/card/ProjectCard";
import HorizalScroll from "../../components/shared/HorizalScroll";
import { Button } from "antd";
import { CategoryType } from "../../type";
const categories: CategoryType[] = [
  { id: 1, name: "ຕາກ້ອງ" },
  { id: 2, name: "ອອກແບບ" },
  { id: 3, name: "ອອກແບບບ້ານ ແລະ ໂຄງການ" },
  { id: 4, name: "ຂຽນໂປຮແກຮມ" },
  { id: 5, name: "ຕັດຕໍ່ວິດີໂອ ແລະ ຮູບພາບ" },
  { id: 6, name: "ແປພາສາ ແລະ ເອກະສານ" },
  { id: 7, name: "ການຕະຫຼາດ" },
];
const AllProjects = () => {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6">
          {Array.from({ length: 10 }, (__, index) => (
            <div key={index} className="">
              <Link to="/projects/category/2" key={index}>
                <ProjectCard classname="border" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllProjects;
