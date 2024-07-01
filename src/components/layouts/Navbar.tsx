import { Button, Layout, Menu, Modal } from "antd";
import Logo from "../shared/Logo";
import {
  HomeOutlined,
  SoundOutlined,
  SignatureOutlined,
  TeamOutlined,
  ProjectOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Header } = Layout;
import type { MenuProps } from "antd";
import MobileDrawer from "./MobileDrawer";
import { useAppDispatch, useAppSelector } from "../../hook/hooks";
import { logout } from "../../store/slices/auth/AuthSlice";
import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    label,
    key,
    icon,
    children,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem(<Link to="/">ໜ້າຫຼັກ</Link>, "1", <HomeOutlined />),
  getItem(<Link to="/project-board">ປະກາດຫາວຽກ</Link>, "2", <SoundOutlined />),
  getItem(<Link to="/projects">ວຽກທັງໝົດ</Link>, "5", <ProjectOutlined />),
  getItem(<Link to="/about">ກ່ຽວກັບ</Link>, "3", <TeamOutlined />),
  getItem(
    <Link to="/freelancer/signup">ສະໝັກເປັນຟີຣແລນສ໌</Link>,
    "4",
    <SignatureOutlined />
  ),
];

const Navbar = () => {
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
    <Header className="fixed max-md:hidden top-0 w-full z-[999] shadow px-24 py-8 max-sm:py-0 max-sm:bg-primaryd lg:py-12d bg-white flex border-b-[0.5px] items-center justify-between flex-1 gap-10">
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
      <Menu
        mode="horizontal"
        style={{ flex: 1, minWidth: 0 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        items={items}
        className="bg-transparent border-none hidden lg:flex text-lg"
      />
      {user && user.token ? (
        <ProfileDropdown showModal={showModal} />
      ) : (
        <div className="space-x-3 hidden lg:flex">
          <Link to="signin">
            <Button type="primary" size="large" className="bg-color-1">
              ເຂົ້າສູລະບົບ
            </Button>
          </Link>
          <Link to="/signup">
            <Button type="default" size="large">
              ສະໝັກສະມາຊິກ
            </Button>
          </Link>
          {/* <LanguageDropdown /> */}
        </div>
      )}
    </Header>
  );
};

export default Navbar;
