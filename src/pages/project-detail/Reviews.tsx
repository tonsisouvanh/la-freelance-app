import { worke } from "../../assets";
import Rating from "../../components/shared/Rating";

const Reviews = () => {
  return (
    <>
      <div>
        <div className="inline-flex items-center gap-2">
          <p className="text-sm">ຣີວິວຈາກຜູ້ຈ້າງ ( 23 )</p>
        </div>
        <div className="flex pt-2 items-center justify-between gap-4">
          <div className="bg-color-1/60 w-14 h-14 flex items-center justify-center rounded-full">
            <span className="text-white">5.0</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div className="text-sm whitespace-nowrap text-gray-500">
                <p>ການຕອບ</p>
                <p>ການຣັບວຽກ ສົ່ງວຽກ</p>
              </div>

              <div className="text-sm text-gray-500 space-y-1 ">
                <Rating value={4} color={"#FFC700"} />
                <Rating value={5} color={"#FFC700"} />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-flow-row-dense divide-y-2">
          {Array.from({ length: 4 }, (__, index) => (
            <div
              key={index}
              className="flex py-6 items-start justify-between gap-4"
            >
              <div className="bg-color-1/60 w-10 h-10 flex items-center justify-center rounded-full">
                <img
                  src={worke}
                  className="w-full h-full object-cover rounded-full"
                  alt=""
                />
                {/* <span className="text-white">5.0</span> */}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p>{"John Doe"}</p>
                  <Rating value={4} color={"#FFC700"} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mt-2">
                    {"ຕອບກັບໄວ, ສົ່ງວຽກຕົງເວລາ ແລະ ວຽກຕົງກັບຄວາມຕ້ອງການ."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex group items-center gap-1 text-xs px-2 mx-auto max-w-fit p-1 cursor-pointer border rounded-md border-color-1 text-color-1">
          {/* <FaEye className="text-gray-500 group-hover:text-color-1" /> */}
          ເບິ່ງທັງໝົດ
        </div>
      </div>
    </>
  );
};

export default Reviews;
