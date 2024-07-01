import SectionHeading from "../../components/SectionHeading";

type Props = {
  className?: string;
};
const FreelanceQuality = ({ className }: Props) => {
  return (
    // <section className={`bg-transparent ${className && className}`}>
    //   <div className="">
    //     <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
    //       <h2 className="text-4xl leading-relaxed font-bold text-color-1 ">
    //         ເຮົາມີຟີຮແລຮນຄຸນນະພາບ ແລະ ຜູ້ຊ່ຽວຊານຫຼາກຫຼາຍຄ່ອຍໃຫ້ບໍລິການ
    //       </h2>
    //     </div>
    //     <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
    //       {/* Pricing Card */}
    //       {Array.from({ length: 3 }, (__, index) => (
    //         <div
    //           key={index}
    //           className="flex flex-col p-3 md:p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8"
    //         >
    //           <h3 className="mb-4 text-2xl font-semibold">Freelance QC</h3>
    //           <p className="font-light text-gray-500 sm:text-lg ">
    //             Provide quality check for your project.
    //           </p>
    //           {/* List */}
    //           <ul role="list" className="mb-8 mt-8 space-y-4 text-left">
    //             <li className="flex items-center space-x-3">
    //               {/* Icon */}
    //               <svg
    //                 className="flex-shrink-0 w-5 h-5 text-green-500 "
    //                 fill="currentColor"
    //                 viewBox="0 0 20 20"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path
    //                   fillRule="evenodd"
    //                   d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
    //                   clipRule="evenodd"
    //                 />
    //               </svg>
    //               <span> ຜ່ານການຢືນຢັ້ນໃນລະບົບ</span>
    //             </li>
    //             <li className="flex items-center space-x-3">
    //               {/* Icon */}
    //               <svg
    //                 className="flex-shrink-0 w-5 h-5 text-green-500 "
    //                 fill="currentColor"
    //                 viewBox="0 0 20 20"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path
    //                   fillRule="evenodd"
    //                   d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
    //                   clipRule="evenodd"
    //                 />
    //               </svg>
    //               <span> ຜ່ານການກວດສອບຕົວຕົນ</span>
    //             </li>
    //           </ul>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section className="text-gray-600">
      <div className="">
        <div className="text-center mb-10 max-sm:mb-3">
          <SectionHeading title="ເຮົາມີຟີຮແລຮນຄຸນນະພາບ ແລະ ຜູ້ຊ່ຽວຊານຫຼາກຫຼາຍຄ່ອຍໃຫ້ບໍລິການ" />
          {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
            pug.
          </p> */}
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                className="text-color-1 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <span className="title-font font-medium">
                Authentic Cliche Forage
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                className="text-color-1 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <span className="title-font font-medium">
                Kinfolk Chips Snackwave
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                className="text-color-1 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <span className="title-font font-medium">
                Coloring Book Ethical
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                className="text-color-1 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <span className="title-font font-medium">
                Typewriter Polaroid Cray
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                className="text-color-1 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <span className="title-font font-medium">Pack Truffaut Blue</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                className="text-color-1 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              <span className="title-font font-medium">
                The Catcher In The Rye
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreelanceQuality;
