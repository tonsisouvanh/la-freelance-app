import { Button, Modal } from "antd";
import Logo from "../shared/Logo";
import { Link, useLocation } from "react-router-dom";
import MobileDrawer from "./MobileDrawer";
import { useAppDispatch, useAppSelector } from "../../hook/hooks";
import { logout } from "../../store/slices/auth/AuthSlice";
import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";

// type MenuItem = Required<MenuProps>["items"][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],
//   type?: "group"
// ): MenuItem {
//   return {
//     label,
//     key,
//     icon,
//     children,
//     type,
//   } as MenuItem;
// }

// const items: MenuProps["items"] = [
//   getItem(<Link to="/">ໜ້າຫຼັກ</Link>, "1", <HomeOutlined />),
//   getItem(<Link to="/project-board">ປະກາດຫາວຽກ</Link>, "2", <SoundOutlined />),
//   getItem(<Link to="/projects">ວຽກທັງໝົດ</Link>, "5", <ProjectOutlined />),
//   getItem(<Link to="/about">ກ່ຽວກັບ</Link>, "3", <TeamOutlined />),
//   getItem(
//     <Link to="/freelancer/signup">ສະໝັກເປັນຟີຣແລນສ໌</Link>,
//     "4",
//     <SignatureOutlined />
//   ),
// ];

type MenuItem = {
  id: number;
  title: string;
  path: string;
  icon?: React.ReactNode;
};

const menuItems: MenuItem[] = [
  {
    id: 1,
    title: "ໜ້າຫຼັກ",
    path: "/",
  },
  {
    id: 2,
    title: "ປະກາດຫາຟຣີແລນສ໌",
    path: "/project-board",
  },
  {
    id: 3,
    title: "ວຽກທັງໝົດ",
    path: "/projects",
  },
  {
    id: 4,
    title: "ກ່ຽວກັບ",
    path: "/about",
  },
  {
    id: 5,
    title: "ຂໍ້ຄວາມ",
    path: "/chat-list",
  },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    dispatch(logout());
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <header className="fixed top-0 z-[999] flex h-20 w-full flex-1 items-center justify-between gap-10 border-b-[0.5px] bg-white px-24 shadow">
      {/* <header className="fixed max-md:hidden top-0 w-full z-[999] shadow px-24 py-5 max-sm:py-0 max-sm:bg-primaryd lg:py-12d bg-white flex border-b-[0.5px] items-center justify-between flex-1 gap-10"> */}
      <Modal
        title="ແນ່ໃຈບໍ່ວ່າຕ້ອງການອອກຈາກລະບົບ?"
        open={isModalOpen}
        onOk={handleOk}
        okButtonProps={{ style: { backgroundColor: "#1A96CB", color: "#fff" } }}
        onCancel={handleCancel}
      ></Modal>
      <div className="hidden">
        <MobileDrawer />
      </div>
      <Link to="/">
        <Logo className="w-20" />
      </Link>
      {/* <Menu
        mode="horizontal"
        style={{ flex: 1, minWidth: 0, margin: 0}}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        items={items}
        className="bg-transparent border-none hidden lg:flex text-lg"
      /> */}
      <ul className="flex flex-1 items-center gap-10">
        {menuItems.map((item) =>
          item.path === "/chat-list" ? (
            <li className="relative text-color-3" key={item.id}>
              <div className="absolute right-[-4px] top-[-4px] flex h-[13px] w-[13px] items-center justify-center rounded-full bg-[#FF0707] text-[8px] text-white">
                <span>2</span>
              </div>
              <Link
                className={`whitespace-nowrap text-[16px] ${
                  pathname === item.path &&
                  "text-color-1 underline decoration-2 underline-offset-8"
                }`}
                to={item.path}
              >
                {item.title}
              </Link>
            </li>
          ) : (
            <li className="text-color-3" key={item.id}>
              <Link
                className={`whitespace-nowrap text-[16px] ${
                  pathname === item.path &&
                  "text-color-1 underline decoration-2 underline-offset-8"
                }`}
                to={item.path}
              >
                {item.title}
              </Link>
            </li>
          ),
        )}
      </ul>
      {user && user.token ? (
        <ProfileDropdown showModal={showModal} />
      ) : (
        <div className="hidden space-x-3 divide-x-[1px] divide-[#BABABA] lg:flex">
          <Link to="signin">
            <Button
              type="primary"
              size="large"
              className="flex items-center justify-center rounded-full bg-color-1 px-[16px] py-[18px] text-[16px] font-semibold shadow-md shadow-black/30"
            >
              ສະໝັກເປັນຟີຣແລນສ໌
            </Button>
          </Link>
          <Link to="/signup">
            <Button
              type="default"
              size="large"
              className="border-none text-[16px] text-color-3 shadow-none"
            >
              ສະໝັກເປັນຜູ້ຈ້າງ
            </Button>
          </Link>
          {/* <LanguageDropdown /> */}
        </div>
      )}
    </header>
  );
};

export default Navbar;
