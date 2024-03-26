import { Button } from "antd";
import React from "react";
import { CategoryType } from "../../type";

interface HorizalScrollWorkCategoryProps {
  classname?: string;
  categories: CategoryType[]; // Prop name with its type (string in this case)
  // age?: number; // Optional prop with a question mark (?)
  // onClick?: (name: string) => void; // Function prop for handling clicks
}

const HorizalScrollWorkCategory: React.FC<HorizalScrollWorkCategoryProps> = ({
  categories,
  classname,
}) => {
  return (
    <>
      <div
        className={`flex flex-col bg-white m-auto p-auto border py-4 ${
          classname && classname
        }`}
      >
        <div className="flex overflow-x-scroll hide-scroll-bar">
          <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                htmlType="button"
                type="default"
                size="large"
                className={`font-semibold ${
                  index === 0 && "bg-primary text-white"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n",
        }}
      />
    </>
  );
};

export default HorizalScrollWorkCategory;
