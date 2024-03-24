import {
  SolutionOutlined,
  SafetyCertificateOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";
type Props = {};

const Reason = (props: Props) => {
  return (
    <>
      <div className="space-y-10">
        <div className="">
          <h1 className="text-3xl font-bold">
            ເປັນຫຍັງຕ້ອງເລືອກໃຊ້ LA-FREELANCE ?
          </h1>
          <h1 className="text-primary text-4xl mt-3 font-bold">
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
          {/* <div>
            <div className="mt-32">
              <h1 className="text-4xl text-blue-700 font-bold">
                ເລີ່ມຈ້າງວຽກຟີຮແລຮນງ່າຍໆ ກັບ LA-FREELANCE
              </h1>
            </div>
            <div className="mt-24">
              <div className="flex gap-24">
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
              </div>
            </div>
          </div> */}
          {/* <div className="flex gap-32 mt-12">
            <div>
              <h1 className="font-bold text-2xl">
                3. ຈ່າຍເງິນຜ່ານ SCanX
                <br />
                <span className="text-lg font-medium">ໄດ້ວຽກແນ່ນອນ</span>
              </h1>
            </div>
            <div>
              <h1 className="font-bold text-2xl ml-12">
                4. ອະນຸມັດວຽກ ແລະ ລີວິວ
                <br />
                <span className="text-lg font-medium">
                  ກວດສອບງານທີ່ໄດ້ຮັບອະນຸມັດ ແລະ ລີວິວວຽກ
                </span>
              </h1>
            </div>
          </div>
          <div>
            <div className="text-center mt-16">
              <h1 className="text-3xl font-bold ">
                ເຮົາມີຟີຮແລຮນຄຸນນະພາບ ແລະ ຜູ້ຊ່ຽວຊານຫຼາກຫຼາຍຄ່ອຍໃຫ້ບໍລິການ
              </h1>
            </div>
            <div>
              <div className="border rounded-lg mt-12 text-center w-80 py-32 shadow-xl">
                <h1 className="text-center text-2xl font-bold">Freelancer</h1>
                <div className="text-center mt-10">
                  <h1>
                    <CheckOutlined className="text-blue-700" />{" "}
                    ຜ່ານການຢືນຢັ້ນໃນລະບົບ
                  </h1>
                  <h1>
                    <CheckOutlined className="text-blue-700" />{" "}
                    ຜ່ານການກວດສອບຕົວຕົນ
                  </h1>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Reason;
