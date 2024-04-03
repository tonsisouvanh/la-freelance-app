import { Link } from "react-router-dom";
import ProjectCard from "../../components/card/ProjectCard";

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
