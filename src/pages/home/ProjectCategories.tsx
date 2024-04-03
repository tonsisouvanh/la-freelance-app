import HorizalScroll from "../../components/shared/HorizalScroll";
import categoriesData from "../../data/categoriesData";

const ProjectCategories = () => {
  return (
    <div className="p-1">
      <h1 className="text-primary text-2xl md:text-4xl font-bold">
        ໜວດໝູ່ທັງຫມົດ
      </h1>
      <HorizalScroll className="py-4">
        {categoriesData.map((cate, index) => (
          <div
            key={index}
            className="w-[9rem] space-y-2 py-4 border flex flex-col items-center justify-center shadow-md rounded-xl"
          >
            <div className="w-[3rem]">
              <img
                src={cate.icon}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <h2 className="block text-center font-semibold text-[15px]">
              {cate.name}
            </h2>
          </div>
        ))}
      </HorizalScroll>
    </div>
  );
};

export default ProjectCategories;
