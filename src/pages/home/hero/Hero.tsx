import { Button } from "antd";
import SearchForm from "./SearchForm";
import ProjectSlider from "./ProjectSlider";
const Hero = () => {
  return (
    <section className="py-10 max-sm:rounded-b-2xl w-full relative lg:py-20 px-[16px] lg:px-20">
      <div className="flex items-center max-md:flex-col max-lg:gap-5 gap-28">
        <article className="flex-1 space-y-16 max-lg:space-y-10 max-sm:space-y-6">
          <div className="space-y-3 max-sm:space-y-1">
            <h1 className="font-robotocon text-color-1 max-lg:text-5xl text-7xl font-extrabold">
              LA FREELANCE
            </h1>
            <h3 className="text-3xl max-lg:text-lg">
              ສູນລວມ
              <span className="font-robotocon mx-2 underline-offset-4 underline decoration-color-1 decoration-[6px] max-lg:decoration-[3px] decoration">
                Freelance
              </span>
              ຄຸນນະພາບ!
            </h3>
          </div>
          <div className="space-y-8 max-sm:space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <Button
                size="large"
                type="primary"
                className="bg-color-1 text-lg rounded-full w-[10rem] max-lg:p-3 max-lg:text-sm p-6 flex items-center justify-center"
              >
                ເປັນຟີຣແລນສ໌
              </Button>
              <Button
                size="large"
                key="submit"
                className="text-lg rounded-full max-lg:p-3 max-lg:text-sm p-6 w-[10rem] flex items-center justify-center border-color-1 border-2"
              >
                ສະໝັກ
              </Button>
            </div>
            <div className="">
              <SearchForm />
            </div>
          </div>
        </article>
        <div className="max-md:max-w-sm max-w-lg">
          <ProjectSlider />
        </div>
      </div>

      {/* <div className="absolute bottom-0 left-0 right-0">
          <img
            src={projects}
            className="h-full opacity-50 w-full object-cover"
            alt=""
          />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="max-sm:hidden">
          <TyperText />
        </div>
        <div className="mt-5">
          <p className=" text-md text-white lg:text-lg mb-3 z-[1] font-bold text-center ">
            ຄົ້ນຫາຟີຣແລນສ
          </p>
          <Input
            size="large"
            className="shadow-lg p-2 w-[20rem] md:w-[40rem] lg:py-4"
            placeholder="ພິມຊື່ໂປຣເຈັກທີ່ຕ້ອງການຄົ້ນຫາ"
            prefix={
              <SearchOutlined className="text-color-1 border-r-2 border-r-color-1 px-1 mr-2" />
            }
          />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
