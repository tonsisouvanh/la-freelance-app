import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { projects } from "../assets/index";
import TyperText from "./TyperText";

const Hero = () => {
  return (
    <div className="py-10 w-full relative lg:py-24 px-2 lg:px-10 bg-gradient-to-b from-primary via-primary to-cyan-500">
      <div className="absolute bottom-0 left-0 right-0">
        <img
          src={projects}
          className="h-full opacity-50 w-full object-cover"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <TyperText />
        <div className="mt-5">
          <p className=" text-md text-white lg:text-lg mb-3 z-[1] font-bold text-center ">
            ຄົ້ນຫາຟີຣແລນສ
          </p>
          <Input
            size="large"
            className="shadow-lg p-2 w-[20rem] md:w-[40rem] lg:py-4"
            placeholder="By Freelance name or project"
            prefix={
              <SearchOutlined className="text-primary border-r-2 border-r-primary px-1 mr-2" />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
