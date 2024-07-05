import { categoryData } from "../../const";
import SectionHeading from "../../components/SectionHeading";
import { GoArrowRight } from "react-icons/go";

const ProjectCategories = () => {
  return (
    // GRID
    // TODO: fix responsive card
    <section className="bg-color-1/10 ">
      <div className="py-[24px] max-w-7xl mx-auto">
        <SectionHeading className="" title="ໝວດໝູ່ວຽກ" />
        <div className="relative text-color-3 rounded-lg overflow-hidden">
          <div className="max-md:p-3 p-8 space-y-8 max-md:space-y-3">
            <div className="grid grid-cols-5 gap-8 max-md:gap-3 max-sm:grid-cols-2 max-lg:grid-cols-4 relative z-10">
              {categoryData.map((category) => (
                <div
                  key={category.id}
                  className="bg-[#F4F7FC] p-[32px] w-full h-full overflow-hidden rounded-[16px] gap-[32px] border border-[#D6DDEB] flex justify-evenly items-start flex-col"
                >
                  <div className="w-[48px] h-[48px]">
                    <img
                      className="w-full h-full object-contain"
                      src={category.imageUrl}
                      alt="graphic"
                    />
                  </div>
                  <div className="space-y-[12x]">
                    <h2 className="text-[20px] max-lg:text-[15px] whitespace-nowrap font-bold text-start">
                      {category.title}
                    </h2>
                    <p className="flex items-center gap-[16px] max-lg:text-[11px] whitespace-nowrap">
                      235 jobs available
                      <span>
                        <GoArrowRight
                          size={20}
                          className="text-color-1 font-extrabold"
                        />
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="max-w-fit mx-auto">
              <Button
                size="middle"
                className="bg-white text-color-1 font-bold hover:text-white flex items-center"
              >
                ໝວດໝູ່ທັງໝົດ {<FaArrowRight className="ml-2" />}
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCategories;
