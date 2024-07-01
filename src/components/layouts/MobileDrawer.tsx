import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import {
  HomeOutlined,
  SoundOutlined,
  SignatureOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import type { MenuProps } from "antd";

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
  getItem(<Link to="/">Home</Link>, "1", <HomeOutlined />),
  getItem(<Link to="/project-board">ປະກາດຫາວຽກ</Link>, "2", <SoundOutlined />),
  getItem(<Link to="/about">ກ່ຽວກັບ</Link>, "3", <TeamOutlined />),
  getItem(<Link to="#">ສະໝັກເປັນຟີຣແລນສ໌</Link>, "4", <SignatureOutlined />),
];

const MobileDrawer = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        type="primary"
        className="bg-color-1"
        icon={<MenuOutlined />}
        onClick={showDrawer}
      ></Button>
      <Drawer title="Close" placement={"left"} onClose={onClose} open={open}>
        <Menu
          mode="vertical"
          style={{ flex: 1, minWidth: 0 }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          items={items}
          className="bg-transparent border-none"
        />
      </Drawer>
    </>
  );
};

export default MobileDrawer;
