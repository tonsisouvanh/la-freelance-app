import { Link } from "react-router-dom";
import ProjectCard from "../card/ProjectCard";

const Projects = () => {
  return (
    <>
      <div className="">
        <div className="w-full flex items-center justify-between mb-4 md:mb-8">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800">
            ທົ່ວໄປ
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6">
          {Array.from({ length: 10 }, (__, index) => (
            <div key={index} className="">
              <Link to="/projects/2" key={index}>
                <ProjectCard classname="border" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
