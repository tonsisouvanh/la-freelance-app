import ThumbnailGallery from "./ThumbnailGallery";
import ProjectDescription from "./ProjectDescription";
import RelatedProject from "./RelatedProject";
import { Breadcrumb } from "antd";

const ProjectPage = () => {

  return (
    <div className="container mx-auto p-4 py-20">
      <Breadcrumb
        className="mb-[40px] text-[16px] text-color-1"
        separator=">"
        items={[
          {
            title: "ໝວດໝູ່ວຽກທັງໝົດ",
          },
          {
            title: "Graphic Design",
          },
          {
            title: "ອອກແບບໂລໂກ້",
          },
        ]}
      />
      <div className="flex flex-col items-start gap-10 md:flex-row">
        {/* Left Column */}
        <ThumbnailGallery />

        {/* Right Column */}
        <ProjectDescription />
      </div>
      <div className="mt-[80px]">
        <RelatedProject />
      </div>
    </div>
  );
};

export default ProjectPage;
