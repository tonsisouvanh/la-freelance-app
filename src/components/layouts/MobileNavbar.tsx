import { Link, useLocation } from "react-router-dom";
import {
  HomeOutlined,
  HomeFilled,
  SoundOutlined,
  SoundFilled,
  ProjectOutlined,
  ProjectFilled,
  MessageFilled,
  MessageOutlined,
  UserOutlined,
  SmileFilled,
} from "@ant-design/icons";

type MenuItem = {
  link: string;
  text: string;
  key: string;
  icon: JSX.Element;
  activeIcon: JSX.Element;
};

// Generate data object
const items: MenuItem[] = [
  {
    link: "/projects",
    text: "ວຽກທັງໝົດ",
    key: "5",
    icon: <ProjectOutlined />,
    activeIcon: <ProjectFilled />,
  },
  {
    link: "/",
    text: "ໜ້າຫຼັກ",
    key: "1",
    icon: <HomeOutlined />,
    activeIcon: <HomeFilled />,
  },
  {
    link: "/chat",
    text: "ແຊັດ",
    key: "6",
    icon: <MessageOutlined />,
    activeIcon: <MessageFilled />,
  },
  {
    link: "/project-board",
    text: "ປະກາດຫາວຽກ",
    key: "2",
    icon: <SoundOutlined />,
    activeIcon: <SoundFilled />,
  },

  // {
  //   link: "/projects/:popular",
  //   text: "ວຽກມາແຮງ",
  //   key: "6",
  //   icon: <ProjectOutlined className="!text-red-500" />,
  // },

  {
    link: "/signin",
    text: "ໂປຣຟາຍ",
    key: "4",
    icon: <UserOutlined className="" />,
    activeIcon: <SmileFilled className="" />,
  },

  // {
  //   link: "/freelancer/signup",
  //   text: "ເປັນຟີຣແລນສ",
  //   key: "4",
  //   icon: <SignatureOutlined />,
  //   activeIcon: <SignatureFilled />,
  // },
];

const MobileNavbar = () => {
  const { pathname } = useLocation();
  return (
    <div className="lg:hidden z-[9999] fixed bottom-0 left-0 right-0">
      <div
        id="tabs"
        className="flex pb-3 bg-primary text-white justify-between rounded-tl-lg rounded-tr-lg px-0"
      >
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className={`w-full relative justify-center inline-block text-center pt-2 pb-3 ${
              pathname === item.link && ""
            }`}
          >
            <div
              className={`${
                pathname === item.link &&
                "text-black scale-110 transition font-bold duration-300"
              }`}
            >
              <div className="inline-block mb-1 text-lg">
                {pathname === item.link ? item.activeIcon : item.icon}
              </div>
              <span className="tab tab-home block text-[0.7rem]">
                {item.text}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbar;
