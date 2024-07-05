import { workb } from "../../assets";
import { Avatar } from "antd";
import { tailwindMerge } from "../../utils/tailwindMerge";
import { Link } from "react-router-dom";
import Rating from "../shared/Rating";
type Props = {
  className?: string;
  id: number;
};

const ProjectCard = ({ className, id }: Props) => {
  const baseClass = "rounded-xl border bg-white hover:shadow-xl p-[10px]";
  const mergedClass = tailwindMerge(baseClass, className);
  return (
    <div key={id} className={mergedClass}>
      <Link to="#">
        <div className="relative flex items-end overflow-hidden rounded-[8px]">
          <img src={workb} alt="Hotel Photo" />
        </div>
        <article className="mt-1 space-y-3">
          <h2 className="mb-10 line-clamp-2 h-[3rem] text-[16px] text-color-5">
            ອອກແບບ ໂລໂກ້ ຮ້ານ ອາຫານ, ແບຣນເສື້ອຜ້ານ, ແບຣນເສື້ອຜ້ານ,
            ແບຣນເສື້ອຜ້ານ, ແບຣນເສື້ອຜ້ານ,
            ແບຣນເສື້ອຜ້ານເສື້ອຜ້ານເສື້ອຜ້ານເສື້ອຜ້ານເສື້ອຜ້ານເສື້ອຜ້າ
          </h2>
          <div className="mb-[12px] flex items-center gap-2 divide-x-[1px]">
            <div>
              <p className="text-[14px] text-color-2">ວຽກທີ່ໄດ້ຮັບ: 19</p>
            </div>
            <div>
              <Rating value={4} color="#FFC700" className="gap-1 pl-2" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[7px]">
              <Avatar
                size={"large"}
                src="https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
              />
              <p className="text-[14px] text-color-3">Jennifer Kim</p>
            </div>
            <div className="text-end">
              <p className="text-[14px] text-color-2">ເລີ່ມຕົ້ນ</p>
              <p className="text-[16px] font-bold text-color-1">500,000 ກີບ</p>
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default ProjectCard;
