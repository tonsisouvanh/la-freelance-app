type Props = {
  className?: string;
};

const HowToStartHiring = ({ className }: Props) => {
  return (
    <div className={`space-y-10 ${className && className}`}>
      <div className="">
        <h1 className="text-4xl text-color-1 font-bold">
          ເລີ່ມຈ້າງວຽກຟີຮແລຮນງ່າຍໆ ກັບ LA-FREELANCE
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div>
          <h1 className="font-bold text-2xl">
            1. ຄົ້ນຫາຟີຮແລຮນທີ່ຖືກໃຈ
            <br />
            <span className="text-lg font-medium">
              ພິຈາລະນາຈາກຄວາມສາມາດ ແລະ ຄະແນນລີວິວ
            </span>
          </h1>
        </div>
        <div>
          <h1 className="font-bold text-2xl">
            2. ລົມລາຍລະອຽດ
            <br />
            <span className="text-lg font-medium">
              ອະທິບາຍວຽກໃຫ້ຟີຮແລຮນເພື່ອສ້າງໃບສະເໜີລາຄາ
            </span>
          </h1>
        </div>
        <div>
          <h1 className="font-bold text-2xl">
            3. ຈ່າຍເງິນຜ່ານ BCELONE
            <br />
            <span className="text-lg font-medium">ໄດ້ວຽກແນ່ນອນ</span>
          </h1>
        </div>
        <div>
          <h1 className="font-bold text-2xl">
            4. ອະນຸມັດວຽກ ແລະ ລີວິວ
            <br />
            <span className="text-lg font-medium">
              ກວດສອບງານທີ່ໄດ້ຮັບອະນຸມັດ ແລະ ລີວິວວຽກ
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HowToStartHiring;
