import { CheckOutlined } from "@ant-design/icons";

const PackageTab = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-color-1 text-lg">ແພັກເກັດ: ແປພາສາອັງກິດ</h3>
      <p>
        ເປັນພຽງລາຄາເລີ່ມຕົ້ນ ຫາກຕ້ອງການເພີ່ມຈຳນວນ ແມ່ນຈະໄດ້ຄິດລາຄາເພີ່ມຕາມວຽກ
      </p>
      <ul className="w-full">
        <li className="flex items-center justify-between">
          <span>ໄຟຣຕົ້ນສະບັບ</span>
          <CheckOutlined className="text-green-500" />
        </li>
        <li className="flex items-center justify-between">
          <span>ຄວາມລະອຽດສູງ</span>
          <CheckOutlined className="text-green-500" />
        </li>
        <li className="flex items-center justify-between">
          <span>ສາມມາດດັດແກ້ໄດ້ 3 ເທື່ອ</span>
          <CheckOutlined className="text-green-500" />
        </li>
      </ul>
    </div>
  );
};

export default PackageTab;
