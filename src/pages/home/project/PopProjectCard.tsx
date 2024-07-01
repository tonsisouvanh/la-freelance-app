import { Rate } from "antd";
import { workb } from "../../../assets";

type Props = {
  id: number;
};

const PopProjectCard = ({ id }: Props) => {
  return (
    <article
      key={id}
      className="rounded-xl border bg-white p-1 shadow-lg hover:shadow-xl"
    >
      <a href="#">
        <div className="relative flex items-end overflow-hidden rounded-xl">
          <img src={workb} alt="Hotel Photo" />
        </div>
        <div className="mt-1 p-2 space-y-3">
          <h2 className="text-color-5 text-sm max-sm:text-xs line-clamp-2">
            ອອກແບບ ໂລໂກ້ ຮ້ານ ອາຫານ, ແບຣນເສື້ອຜ້າ
          </h2>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-color-1">500,000 ₭</p>
            <p className="text-xs text-color-5">ຂາຍສຳເລັດ: 10</p>
          </div>
          <div className="text-sm max-w-fit mx-auto">
            <Rate className="text-sm whitespace-nowrap" value={5} disabled />
          </div>
        </div>
      </a>
    </article>
  );
};

export default PopProjectCard;
