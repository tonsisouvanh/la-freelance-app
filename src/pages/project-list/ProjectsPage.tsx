import { useParams } from "react-router-dom";

import FilterBar from "./FilterBar";
import ProjectCard from "../../components/card/ProjectCard";

// const { Option } = Select;

// const categories: CategoryType[] = [
//   { id: 1, name: "ຕາກ້ອງ" },
//   { id: 2, name: "ອອກແບບ" },
//   { id: 3, name: "ອອກແບບບ້ານ ແລະ ໂຄງການ" },
//   { id: 4, name: "ຂຽນໂປຮແກຮມ" },
//   { id: 5, name: "ຕັດຕໍ່ວິດີໂອ ແລະ ຮູບພາບ" },
//   { id: 6, name: "ແປພາສາ ແລະ ເອກະສານ" },
//   { id: 7, name: "ການຕະຫຼາດ" },
// ];

// const projects = [
//   // Array of project data
//   {
//     id: 1,
//     title: "ออกแบบ โลโก้ ร้าน อาคาเฟ่, แบรนด์เสื้อผ้า",
//     imageUrl: "path_to_image",
//     freelancerName: "Jennifer Kim",
//     reviews: 19,
//     rating: 4,
//     price: "200,000 ກີບ",
//   },
//   // Add more project objects
// ];

const ProjectsPage = () => {
  const { category = "" } = useParams();
  console.log(category);

  return (
    <div className="_container gap-[48px]">
      {/* Search Bar */}
      {/* Filters */}
      <FilterBar />
      <div className="mb-[40px] grid grid-cols-4 gap-[32px] max-md:grid-cols-3 max-sm:grid-cols-2">
        <ProjectCard />
      </div>

      {/* <div className="mb-[40px] grid grid-cols-4 gap-[32px] max-md:grid-cols-3 max-sm:grid-cols-2">
        {Array.from({ length: 8 }, (__, index) => (
          <ProjectCard id={index} key={index} />
        ))}
      </div> */}
    </div>
  );
};

export default ProjectsPage;
