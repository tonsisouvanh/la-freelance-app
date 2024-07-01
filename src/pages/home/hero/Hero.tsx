import { Button } from "antd";
import SearchForm from "./SearchForm";
import ProjectSlider from "./ProjectSlider";
const Hero = () => {
  return (
    <section className="relative max-sm:rounded-b-2xl w-full px-20 max-sm:py-6 py-8 max-lg:py-10 max-lg:px-3">
      {/* <div className="z-[-1] absolute inset-0 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#00A6ED_100%)]"></div>
      <div className="absolute z-[-1] h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div> */}
      <div className="flex items-center max-w-7xl mx-auto max-md:flex-col max-lg:gap-5 gap-28">
        <article className="flex-1 space-y-16 max-lg:space-y-10 max-sm:space-y-6">
          <div className="space-y-3 max-sm:space-y-1">
            <h1 className="font-robotocon text-color-1 max-lg:text-5xl text-7xl font-extrabold">
              LA FREELANCE
            </h1>
            <h3 className="text-3xl max-lg:text-lg text-gray-900">
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
                className="bg-color-1 text-lg rounded-full w-[10rem] max-lg:p-3 max-lg:text-sm p-6 flex items-center justify-center shadow-lg"
              >
                ເປັນຟີຣແລນສ໌
              </Button>
              <Button
                size="large"
                key="submit"
                className="text-lg rounded-full max-lg:p-3 max-lg:text-sm p-6 w-[10rem] flex items-center justify-center shadow-lg border-color-1 border-2"
              >
                ສະໝັກ
              </Button>
            </div>
            <div className="">
              <SearchForm />
            </div>
          </div>
        </article>
        <div className="max-md:w-full max-w-lg">
          <ProjectSlider />
        </div>
      </div>
    </section>
  );
};

export default Hero;
