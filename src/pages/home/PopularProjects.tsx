import { workb } from "../../assets";

const PopularProjects = () => {
  return (
    <div className="p-1">
      <h1 className="text-primary text-2xl md:text-4xl font-bold mb-4">
        ງານຍອດນິຍົມ
      </h1>
      <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
        {Array.from({ length: 6 }, (__, index) => (
          // <div
          //   key={index}
          //   className="group cursor-pointer p-1 h-fit py-6 flex items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm border duration-200 "
          // >
          //   <p className="max-sm:text-xs">ແປພາສາຈີນ</p>
          // </div>
          <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
            <a href="#">
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <img src={workb} alt="Hotel Photo" />
                <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-slate-400 ml-1 text-sm">4.9</span>
                </div>
              </div>
              <div className="mt-1 p-2">
                <h2 className="text-slate-700">ແປພາສາຈີນ</h2>
                {/* <p className="text-slate-400 mt-1 text-sm">Translato, Portugal</p> */}
                <div className="mt-3 flex items-end justify-between">
                  <p>
                    <span className="text-sm font-bold text-blue-500">
                      500,000₭
                    </span>
                  </p>
                  <div className="group inline-flex rounded-xl bg-blue-100 p-2 hover:bg-blue-200">
                    
                    <span>ເບິ່ງຕື່ມ</span>
                  </div>
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default PopularProjects;
