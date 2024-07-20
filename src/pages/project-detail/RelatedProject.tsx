import ProjectCard from "../../components/card/ProjectCard";

type Props = {};

const RelatedProject = (props: Props) => {
  return (
    <div>
      <h4 className="mb-[18px] text-[20px] font-semibold text-color-7">
        ວຽກທີ່ຄ້າຍກັນ
      </h4>
      <div className="grid grid-cols-4 gap-[40px]">
          <ProjectCard />
        {/* {Array.from({ length: 4 }, (__, index) => (
          <div key={index} className="">
            <ProjectCard id={index} />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default RelatedProject;
