import { FaSearch } from "react-icons/fa";
import { herobg } from "../../../assets";
import { IoSearchOutline } from "react-icons/io5";
import { Button, Select } from "antd";
const Hero = () => {
  return (
    // <section className="relative max-sm:rounded-b-2xl w-full px-20 max-sm:py-6 py-8 max-lg:py-10 max-lg:px-3">
    //   <div className="flex items-center max-w-7xl mx-auto max-md:flex-col max-lg:gap-5 gap-28">
    //     <article className="flex-1 space-y-16 max-lg:space-y-10 max-sm:space-y-6">
    //       <div className="space-y-3 max-sm:space-y-1">
    //         <img src="/heroheadline.svg" alt="" />
    //         <h3 className="text-3xl max-lg:text-lg text-gray-900">
    //           ສູນລວມ
    //           <span className="font-robotocon mx-2 underline-offset-4 underline decoration-color-1 decoration-[6px] max-lg:decoration-[3px] decoration">
    //             Freelance
    //           </span>
    //           ຄຸນນະພາບ!
    //         </h3>
    //       </div>
    //       <div className="space-y-8 max-sm:space-y-4">
    //         <div className="flex items-center gap-3 flex-wrap">
    //           <Button
    //             size="large"
    //             type="primary"
    //             className="bg-color-1 text-lg rounded-full w-[10rem] max-lg:p-3 max-lg:text-sm p-6 flex items-center justify-center shadow-lg"
    //           >
    //             ເປັນຟີຣແລນສ໌
    //           </Button>
    //           <Button
    //             size="large"
    //             key="submit"
    //             className="text-lg rounded-full max-lg:p-3 max-lg:text-sm p-6 w-[10rem] flex items-center justify-center shadow-lg border-color-1 border-2"
    //           >
    //             ສະໝັກ
    //           </Button>
    //         </div>
    //         <div className="">
    //           <SearchForm />
    //         </div>
    //       </div>
    //     </article>
    //     <div className="max-md:w-full max-w-lg">
    //       <ProjectSlider />
    //     </div>
    //   </div>
    // </section>
    <section className="relative bg-black py-24">
      <div className="absolute inset-0">
        <img
          src={herobg}
          alt="Background Image"
          className="h-full w-full object-cover opacity-30"
        />
      </div>
      <div className="mx-autod relative z-10 mx-auto flex w-full max-w-screen-xl flex-col items-center gap-[52px] px-8 text-white">
        <div className="space-y-3 text-center">
          <div className="w-full max-w-xl">
            <img
              src="/heroheadline.svg"
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <h1 className="text-[36px]">
            ສູນລວມ
            <span className="relative inline-flex justify-center whitespace-nowrap font-robotocon font-bold">
              {/* <img
              src={horizalline}
              className="object-cover absolute bottom-0 hidden w-full text-blue-600 sm:block"
              alt=""
            /> */}
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute left-0 top-2/3 h-[0.58em] w-full fill-color-1"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
              </svg>
              <span className="relative mx-4">Freelance</span>
            </span>
            ຄຸນນະພາບ
          </h1>
        </div>
        <form action="" className="w-full max-w-[600px]">
          <div className="flex items-center gap-[12px] divide-x-2 rounded-full border border-color-1 bg-white px-[8px] py-[8px]">
            <div className="flex w-full max-w-3xl items-center gap-[12px]">
              <IoSearchOutline size={30} className="font-medium text-color-1" />
              <input
                type="text"
                className="w-full max-w-5xl bg-transparent text-color-3 focus:outline-none"
                placeholder="Search freelancer or project name / category"
              />
            </div>
            <Button
              type="primary"
              className="rounded-full bg-color-1 px-10 py-5 text-white"
            >
              ຄົ້ນຫາ
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Hero;
