import { rating } from "../../assets";
import HorizalScroll from "../../components/shared/HorizalScroll";

const ProjectCategories = () => {
  return (
    <div className="p-1 md:space-y-10">
      <h1 className="text-primary text-2xl md:text-4xl font-bold">
        ໜວດໝູ່ທັງຫມົດ
      </h1>
      <HorizalScroll className="py-4">
        {Array.from({ length: 4 }, (__, index) => (
          <div
            key={index}
            className="w-[8rem] space-y-2 py-6 px-2 border flex flex-col items-center justify-center shadow-md rounded-lg"
          >
            <div className="w-[3rem]">
              <img src={rating} className="w-full h-full object-cover" alt="" />
            </div>
            <h2 className="block text-center font-semibold text-sm">
              Graphic Design
            </h2>
          </div>
        ))}
      </HorizalScroll>
    </div>
  );
};

export default ProjectCategories;
