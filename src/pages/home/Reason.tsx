import {
  SolutionOutlined,
  SafetyCertificateOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";
type Props = {
  className?: string;
};
const Reason = ({ className }: Props) => {
  return (
    <>
      <div className={`space-y-10 ${className && className}`}>
        <div className="">
          <h1 className="text-3xl font-bold">
            ເປັນຫຍັງຕ້ອງເລືອກໃຊ້ LA-FREELANCE ?
          </h1>
          <h1 className="text-primary leading-relaxed text-4xl mt-3 font-bold">
            ເພາະເຮົາສາມາດປຽ່ນໄອເດຍເຈົ້າໃຫ້ເປັນຈິງ ດ້ວຍຟີຮແລຮນມືອາຊີບ
          </h1>
        </div>
        <div className="">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 place-content-center gap-10">
            <div className="flex items-start">
              <SolutionOutlined className="text-[56px] text-primary" />
              <h1 className="text-xl whitespace-nowrap ml-5 font-bold">
                ຟີຣແລຮນຄຸນນະພາບອັນດັບ 1<br />
                <span className="text-sm font-medium">
                  ຟີຣແລຮນຈະຜ່ານການຄັດເລືອກ ແລະ ຢືນຢັນຕົວຕົນ
                  <br />
                  ກັບ LA-FREELANCE ສາມາດກວດສອບໄດ້
                </span>
              </h1>
            </div>
            <div className="flex items-start">
              <SafetyCertificateOutlined className="text-[56px] text-primary" />
              <h1 className="text-xl whitespace-nowrap ml-5 font-bold">
                ຮັບປະກັບການຈ້າງວຽກ
                <br />
                <span className="text-sm font-medium">
                  ເງິນຂອງທ່ານຈະໄດ້ຮິບການຄຸ້ມຄອງຕັ້ງແຕ່ຟີຮແລຮນ
                  <br />
                  ເລິ່ມເຮັດວຽກຈົນໄດ້ຮັບວຽກທີ່ພໍໃຈ
                </span>
              </h1>
            </div>
            <div className="flex items-start">
              <FileSearchOutlined className="text-[56px] text-primary" />
              <h1 className="text-xl whitespace-nowrap ml-5 font-bold">
                ມີບໍລິການຫຼາຍຢ່າງໃຫ້ທ່ານເລືອກ
                <br />
                <span className="text-sm font-medium">
                  ມີຟີຮແລຮນຫຼາຍຄົນທີ່ພ້ອມໃຫ້ບໍລິການ
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reason;
