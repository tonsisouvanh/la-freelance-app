import { Button, Layout, Menu } from "antd";
import Logo from "./Logo";
import {
  HomeOutlined,
  SoundOutlined,
  SignatureOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
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
  getItem(<Link to="/work-board">ປະກາດຫາວຽກ</Link>, "2", <SoundOutlined />),
  getItem(<Link to="/about">ກ່ຽວກັບ</Link>, "3", <TeamOutlined />),
  getItem(<Link to="#">ສະໝັກເປັນຟີຣແລນສ</Link>, "4", <SignatureOutlined />),
];

const Navbar = () => {
  return (
    <Header className="border z-[1] shadow lh:px-10 px-4 py-10 lg:py-12 sticky top-0 bg-white flex border-b-[0.5px] items-center justify-between flex-1 gap-10">
      <div className="lg:hidden">
        <MobileDrawer />
      </div>
      <Logo />
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
