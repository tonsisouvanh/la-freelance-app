import Rating from "../../components/shared/Rating";
import { FaEye } from "react-icons/fa";

const Reviews = () => {
  return (
    <>
      <p className="text-sm">ຣີວິວຈາກຜູ້ຈ້າງ ( 23 )</p>
      <div className="grid grid-flow-row-dense divide-y-2">
        {Array.from({ length: 4 }, (__, index) => (
          <div
            key={index}
            className="flex py-6 items-center justify-between gap-4"
          >
            <div className="bg-primary/60 w-14 h-14 flex items-center justify-center rounded-full">
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
              <div>
                <p className="text-sm line-clamp-2 text-gray-500 mt-2">
                  <span className="font-semibold underline">ຄອມເມັ້ນ:</span>{" "}
                  {
                    "ຕອບກັບໄວ, ສົ່ງວຽກຕົງເວລາ ແລະ ວຽກຕົງກັບຄວາມຕ້ອງການ.ຕອບກັບໄວ, ສົ່ງວຽກຕົງເວລາ ແລະ ວຽກຕົງກັບຄວາມຕ້ອງການ.ຕອບກັບໄວ, ສົ່ງວຽກຕົງເວລາ ແລະ ວຽກຕົງກັບຄວາມຕ້ອງການຕອບກັບໄວ, ສົ່ງວຽກຕົງເວລາ ແລະ ວຽກຕົງກັບຄວາມຕ້ອງການຕອບກັບໄວ, ສົ່ງວຽກຕົງເວລາ ແລະ ວຽກຕົງກັບຄວາມຕ້ອງການ"
                  }
                </p>
              </div>
              <div className="flex items-center gap-1 text-xs border ml-auto max-w-fit mt-2 p-1 rounded-md cursor-pointer hover:border-primary">
                <FaEye className="text-gray-500" />
                ເບິ່ງ
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Reviews;
