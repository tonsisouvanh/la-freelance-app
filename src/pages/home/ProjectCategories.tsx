import { Button } from "antd";
import { categoryData } from "../../const";
import { FaAlignRight, FaArrowRight } from "react-icons/fa";
import SectionHeading from "../../components/SectionHeading";

const ProjectCategories = () => {
  return (
    // <section className="relative bg-background-category bg-no-repeat rounded-lg bg-center bg-cover overflow-hidden">
    //   <div className="bg-color-1/80 w-full h-full absolute inset-0"></div>
    //   <div className="flex overflow-auto max-md:gap-3 gap-7 max-sm:m-3 max-lg:m-5 m-10 items-center justify-start relative z-10">
    //     {categoryData.map((category) => (
    //       <div className="bg-white min-w-[10rem] h-[7rem] max-sm:h-[6rem] max-sm:min-w-[7rem] p-2 overflow-hidden rounded-lg gap-2 flex justify-evenly items-center flex-col">
    //         <div className="w-[2.5rem] h-auto max-sm:w-[2rem] max-sm:h-auto">
    //           <img
    //             className="w-full h-full object-contain object-center"
    //             src={category.imageUrl}
    //             alt="graphic"
    //           />
    //         </div>
    //         <h2 className="max-sm:text-[10px] leading-3 text-sm text-center font-bold">
    //           {category.title}
    //         </h2>
    //       </div>
    //     ))}
    //   </div>
    // </section>
    // GRID
    <section>
      <SectionHeading className="" title="ໝວດໝູ່" />
      <div className="relative bg-background-category text-gray-900 bg-no-repeat rounded-lg bg-center bg-cover overflow-hidden">
        <div className="bg-color-1/80 w-full h-full absolute inset-0"></div>
        <div className="max-md:p-3 p-8 space-y-8 max-md:space-y-3">
          <div className="grid grid-cols-5 gap-8 max-md:gap-3 max-sm:grid-cols-2 max-lg:grid-cols-4 relative z-10">
            {categoryData.map((category) => (
              <div
                key={category.id}
                className="bg-white shadow-lg p-4 w-full h-full overflow-hidden rounded-lg gap-5 flex justify-evenly items-center flex-col"
              >
                <div className="w-full h-[5rem]">
                  <img
                    className="w-full h-full object-contain"
                    src={category.imageUrl}
                    alt="graphic"
                  />
                </div>
                <h2 className="text-lg text-center font-medium max-sm:text-sm max-lg:text-base">
                  {category.title}
                </h2>
              </div>
            ))}
          </div>
          <div className="max-w-fit mx-auto">
            <Button
              size="middle"
              className="bg-white text-color-1 font-bold hover:text-white flex items-center"
            >
              ໝວດໝູ່ທັງໝົດ {<FaArrowRight className="ml-2" />}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCategories;
