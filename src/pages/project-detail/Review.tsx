import { Avatar, Button, Card } from "antd";
import { FaUser } from "react-icons/fa";
import Rating from "../../components/shared/Rating";

type Props = {};
const reviews = [
  {
    name: "Jennifer Kim",
    date: "02/07/2024",
    rating: 5,
    comment:
      "ຜົນງານຄຸນນະພາບດີ ງາມ ທັນສະໄໝ ຖືກໃຈ ແລະ ສົ່ງຜົນງານຕາມເວລາທີ່ກໍານົດ",
  },
  {
    name: "Iamjack",
    date: "02/07/2024",
    rating: 4,
    comment: "ຕອບກັບໄວ ເປັນກັນເອງ ງານຄຸນນະພາບດີ",
  },
  {
    name: "Brunooo",
    date: "02/07/2024",
    rating: 5,
    comment: "ໃຫ້ຄໍາແນະນໍາໄດ້ດີ ອອກແບບງາມ",
  },
  {
    name: "Ppoppiee",
    date: "02/07/2024",
    rating: 4,
    comment: "ຕັ້ງໃຈ ລະອຽດ ສົ່ງວຽກໄວ",
  },
  {
    name: "Chirst",
    date: "02/07/2024",
    rating: 4,
    comment: "ອອກແບບໄດ້ຕອບໂຈດ ຖ້າມີໂອກາດຈະຈ້າງອີກແນ່ນອນ",
  },
];
const Review = (props: Props) => {
  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="mb-4 text-xl font-semibold">ຣີວິວຈາກຜູ້ຈ້າງ (20)</div>

        <div className="flex items-start gap-5">
          <div className="border-r-2 p-5">
            <div className="flex flex-col items-center whitespace-nowrap rounded-lg bg-[#ECF3FF] p-5 px-[34px] py-[24px]">
              <div className="text-[28px] font-bold text-color-1">4.5</div>
              <div className="text-[14px] text-gray-500">จาก 5</div>
            </div>
          </div>
          <div className="w-full space-y-[20px]">
            {reviews.map((review, index) => (
              <Card key={index} className="rounded-lg bg-color-8 shadow-md">
                <div className="mb-2 flex items-center">
                  <Avatar size="large" icon={<FaUser />} className="mr-4" />
                  <div>
                    <div className="text-color-7">{review.name}</div>
                    <div className="text-color-2">{review.date}</div>
                  </div>
                  <div className="ml-auto">
                    <Rating color="#FFC700" value={review.rating} />
                  </div>
                </div>
                <p className="text-[16px] text-color-7">{review.comment}</p>
              </Card>
            ))}
            <div className="mx-auto w-full max-w-[20rem]">
              <Button
                size="large"
                className="mt-4 w-full bg-color-8 text-color-1"
              >
                ເບິ່ງຣີວີວທັງໝົດ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
