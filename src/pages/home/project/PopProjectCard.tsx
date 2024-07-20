import { Avatar } from "antd";
import Rating from "../../../components/shared/Rating";
import { Link } from "react-router-dom";
import { projectData } from "../../../const";
import { formatPrice } from "../../../utils";

type Props = {
  id: number;
};

// const PopProjectCard = ({ id }: Props) => {
const PopProjectCard = () => {
  return (
    <>
      {projectData.map((project) => (
        <div
          key={project.id}
          className="rounded-xl border bg-white p-[12px] hover:shadow-xl"
        >
          <Link to={`/projects/${"cate"}/${1}`}>
            <div className="relative flex items-end overflow-hidden rounded-xl">
              <img src={project.thumbnail} alt="Hotel Photo" />
            </div>
            <article className="mt-1 space-y-3 p-2">
              <h2 className="mb-10 line-clamp-2 h-[3rem] text-[16px] text-color-5">
                {project.title}
              </h2>
              <div className="mb-[12px] flex items-center gap-2 divide-x-[1px]">
                <div>
                  <p className="text-[14px] text-color-2">
                    ວຽກທີ່ໄດ້ຮັບ: {project.completedProject}
                  </p>
                </div>
                <div>
                  <Rating
                    value={project.rate}
                    color="#FFC700"
                    className="gap-1 pl-2"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[7px]">
                  <div className="mr-3 h-[40px] w-[40px] shrink-0 overflow-hidden rounded-full">
                    <img
                      src={project.profileImage}
                      alt="User"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="text-[14px] text-color-3">
                    {project.freelancerName}
                  </p>
                </div>
                <div className="text-end">
                  <p className="text-[14px] text-color-2">ເລີ່ມຕົ້ນ</p>
                  <p className="text-[13px] font-bold text-color-1">
                    {formatPrice(project.budget)}
                  </p>
                </div>
              </div>
            </article>
          </Link>
        </div>
      ))}
    </>
  );
};

export default PopProjectCard;
