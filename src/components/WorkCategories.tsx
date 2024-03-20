import { pentool, language, rating } from "../assets";
type Props = {};

const WorkCategories = (props: Props) => {
  return (
    <div className="p-1 flex space-y-10 flex-col items-center justify-center">
      <h1 className="text-primary text-4xl font-bold">ໜວດໜູທັງຫມົດ</h1>
      <div className="flex flex-wrap items-center justify-center">
        <div className="flex-shrink-0 m-6 relative overflow-hidden border rounded-lg max-w-xs shadow-lg group">
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: "0.1" }}
          >
            <rect
              x="159.52"
              y={175}
              width={152}
              height={152}
              rx={8}
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width={152}
              height={152}
              rx={8}
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: "0.2",
              }}
            ></div>
            <img className="relative w-32" src={rating} alt="" />
          </div>
          <div className="relative text-slate-800 px-6 pb-6 mt-6">
            <span className="block mx-auto max-w-fit font-semibold text-xl">
              ແນະນຳ
            </span>
          </div>
        </div>
        <div className="flex-shrink-0 m-6 relative overflow-hidden border rounded-lg max-w-xs shadow-lg group">
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: "0.1" }}
          >
            <rect
              x="159.52"
              y={175}
              width={152}
              height={152}
              rx={8}
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width={152}
              height={152}
              rx={8}
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: "0.2",
              }}
            ></div>
            <img className="relative w-32" src={rating} alt="" />
          </div>
          <div className="relative text-slate-800 px-6 pb-6 mt-6">
            <span className="block mx-auto max-w-fit font-semibold text-xl">
              ແນະນຳ
            </span>
          </div>
        </div>
        {/* Card 2 */}
        {/* <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-[18rem]">
          <img
            src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
            alt="University of Southern California"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <h3 className="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
          <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            City of love
          </div>
        </article>
        */}
      </div>
    </div>
  );
};

export default WorkCategories;
