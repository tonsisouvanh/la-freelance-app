import { Avatar } from "antd";
import { workb } from "../../../assets";
import Rating from "../../../components/shared/Rating";
import { Link } from "react-router-dom";

type Props = {
  id: number;
};

const PopProjectCard = ({ id }: Props) => {
  return (
    <div
      key={id}
      className="rounded-xl border bg-white hover:shadow-xl p-[12px]"
    >
      <Link to="/projects/:category/:projectId">
        <div className="relative flex items-end overflow-hidden rounded-xl">
          <img src={workb} alt="Hotel Photo" />
        </div>
        <article className="mt-1 p-2 space-y-3">
          <h2 className="text-color-5 text-[16px] h-[3rem] line-clamp-2 mb-10">
            ອອກແບບ ໂລໂກ້ ຮ້ານ ອາຫານ, ແບຣນເສື້ອຜ້ານ, ແບຣນເສື້ອຜ້ານ, ແບຣນເສື້ອຜ້ານ, ແບຣນເສື້ອຜ້ານ, ແບຣນເສື້ອຜ້ານເສື້ອຜ້ານເສື້ອຜ້ານເສື້ອຜ້ານເສື້ອຜ້ານເສື້ອຜ້າ
          </h2>
          <div className="flex items-center divide-x-[1px] gap-2 mb-[12px]">
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
                icon="user"
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

export default PopProjectCard;
