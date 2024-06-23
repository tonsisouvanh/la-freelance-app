import { Avatar, Button } from "antd";
import { useState } from "react";
import { FaAngleRight, FaUser } from "react-icons/fa6";

type submenuType = {
  text: string;
};

interface MenuType {
  id: number;
  text: string;
  isOpen: boolean;
  submenu?: submenuType[];
}

const menu: MenuType[] = [
  {
    id: 1,
    text: "ສະໝັກເປັນຝຣີແລນ",
    isOpen: false,
    submenu: [
      {
        text: "sub menu 1",
      },
      {
        text: "sub menu 2",
      },
      {
        text: "sub menu 2",
      },
    ],
  },
  {
    id: 2,
    text: "ບົດຄວາມທີ່ໜ້າສົນໃຈ",
    isOpen: false,
    submenu: [
      {
        text: "sub menu 1",
      },
      {
        text: "sub menu 2",
      },
      {
        text: "sub menu 2",
      },
    ],
  },
  {
    id: 3,
    text: "ປະຫວັດ",
    isOpen: false,
  },
  {
    id: 4,
    text: "ຂໍຄວາມຊ່ວຍເຫຼືອ",
    isOpen: false,
  },
  {
    id: 5,
    text: "ຕິດຕໍ່ເຈົ້າໜ້າທີ່",
    isOpen: false,
    submenu: [
      {
        text: "sub menu 1",
      },
      {
        text: "sub menu 2",
      },
      {
        text: "sub menu 2",
      },
    ],
  },
  {
    id: 6,
    text: "ຄຳຖາມທີ່ມັກພົບ",
    isOpen: false,
  },
  {
    id: 7,
    text: "LA_FREELANCE ເຮັດວຽກແນວໃດ?",
    isOpen: false,
  },
  {
    id: 8,
    text: "ເງື່ອນໄຂ ແລະ ນະໂຍບາຍ",
    isOpen: false,
  },
  {
    id: 9,
    text: "ຮັບປະກັນການຈ້າງງານ",
    isOpen: false,
  },
  {
    id: 10,
    text: "ເງື່ອນໄຂການບໍລິການ",
    isOpen: false,
  },
  {
    id: 11,
    text: "ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ",
    isOpen: false,
  },
];

const ProfileHeader = () => {
  const [activeSubmenu, setActiveSubmenu] = useState<MenuType[]>(menu);

  return (
    <div className="">
      <div className="bg-color-1 w-full h-28 rounded-b-xl"></div>
      <div className="flex gap-2 flex-col items-center -mt-10">
        <Avatar
          className="w-28 h-28 border-4 border-white"
          style={{ backgroundColor: "#87d068" }}
          icon={<FaUser />}
        />
        <h4>ຍັງບໍ່ທັນເຂົ້າສູ່ລະບົບ</h4>
        <Button
          type="primary"
          className="text-white bg-color-1 rounded-full px-10"
          size="large"
        >
          ເຂົ້າສູ່ລະບົບ/ສະໝັກສະມາຊິກ
        </Button>
      </div>
      <div className="px-2 flex flex-col py-10 _container">
        <ul className="divide-y-[1px]">
          {activeSubmenu.map((item, index) => (
            <li
              onClick={() => {
                const updatedMenu = [...activeSubmenu];
                updatedMenu[index].isOpen = !updatedMenu[index].isOpen;
                setActiveSubmenu(updatedMenu);
              }}
              key={item.id}
              className="flex flex-col py-4"
            >
              <div className="flex items-center justify-between">
                <span>{item.text}</span>
                {item.submenu && <FaAngleRight />}
              </div>
              {item.submenu && item.isOpen && (
                <ul className="ml-4">
                  {item.submenu.map((subitem, index) => (
                    <li
                      key={index}
                      className="flex py-2 items-center justify-between"
                    >
                      <span>{subitem.text}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileHeader;
