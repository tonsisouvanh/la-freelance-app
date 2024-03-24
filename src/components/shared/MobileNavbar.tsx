import React from "react";
import { Affix, Button, Menu } from "antd";
import type { MenuProps } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  SoundOutlined,
  SignatureOutlined,
  TeamOutlined,
  ProjectOutlined,
  FireOutlined,
} from "@ant-design/icons";

type MenuItem = {
  link: string;
  text: string;
  key: string;
  icon: JSX.Element;
};

// Generate data object
const items: MenuItem[] = [
  {
    link: "/",
    text: "ໜ້າຫຼັກ",
    key: "1",
    icon: <HomeOutlined />,
  },
  {
    link: "/work-board",
    text: "ປະກາດຫາວຽກ",
    key: "2",
    icon: <SoundOutlined />,
  },
  {
    link: "/works",
    text: "ວຽກທັງໝົດ",
    key: "5",
    icon: <ProjectOutlined />,
  },
  //   {
  //     link: "/works/:popular",
  //     text: "ວຽກມາແຮງ",
  //     key: "6",
  //     icon: <FireOutlined className="!text-red-500" />,
  //   },
  {
    link: "/about",
    text: "ກ່ຽວກັບ",
    key: "3",
    icon: <TeamOutlined />,
  },
  {
    link: "#",
    text: "ເປັນຟີຣແລນສ",
    key: "4",
    icon: <SignatureOutlined />,
  },
];

const MobileNavbar = () => {
  const [bottom, setBottom] = React.useState<number>(0);
  return (
    <Affix offsetBottom={bottom} className="lg:hidden">
      <div
        id="tabs"
        className="flex bg-primary text-white justify-between rounded-tl-lg rounded-tr-lg px-1"
      >
        {items.map((item, index) => (
          <Link
            to={item.link}
            className="w-full focus:text-slate-800 hover:text-slate-800 justify-center inline-block text-center pt-2 pb-1"
          >
            <div className="inline-block mb-1 w-25 h-25 text-2xl">
              {item.icon}
            </div>
            <span className="tab tab-home block text-xs">{item.text}</span>
          </Link>
        ))}
      </div>
    </Affix>
  );
};

export default MobileNavbar;
