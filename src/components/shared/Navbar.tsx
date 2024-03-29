import { Button, Layout, Menu } from "antd";
import Logo from "./Logo";
import {
  HomeOutlined,
  SoundOutlined,
  SignatureOutlined,
  TeamOutlined,
  ProjectOutlined,
  FireOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
const { Header } = Layout;
import type { MenuProps } from "antd";
import LanguageDropdown from "../LanguageDropdown";
import MobileDrawer from "../MobileDrawer";

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
  getItem(
    <Link to="/projects/:popular">ວຽກມາແຮງ</Link>,
    "6",
    <FireOutlined className="!text-red-500" />
  ),
  getItem(<Link to="/about">ກ່ຽວກັບ</Link>, "3", <TeamOutlined />),
  getItem(
    <Link to="/freelancer/signup">ສະໝັກເປັນຟີຣແລນສ</Link>,
    "4",
    <SignatureOutlined />
  ),
];

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Header className="fixed top-0 w-full z-[999] shadow px-4 py-4 max-sm:py-0 max-sm:bg-primaryd lg:py-12d bg-white flex border-b-[0.5px] items-center justify-between flex-1 gap-10">
      {/* <Button
        htmlType="button"
        type="primary"
        size="small"
        className="md:hidden max-sm:text-whited bg-primary text-white"
        onClick={() => navigate(-1)}
        icon={<ArrowLeftOutlined />}
      ></Button> */}
      <div className="hidden">
        <MobileDrawer />
      </div>
      <Link to="/">
        <Logo className="w-16" />
      </Link>
      <Menu
        mode="horizontal"
        style={{ flex: 1, minWidth: 0 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        items={items}
        className="bg-transparent border-none hidden lg:flex text-lg"
      />

      <div className="space-x-3 hidden lg:flex">
        <Link to="signin">
          <Button type="primary" size="large" className="bg-primary">
            ເຂົ້າສູລະບົບ
          </Button>
        </Link>
        <Link to="/signup">
          <Button type="default" size="large">
            ສະໝັກສະມາຊິກ
          </Button>
        </Link>
        <LanguageDropdown />
      </div>
    </Header>
  );
};

export default Navbar;
