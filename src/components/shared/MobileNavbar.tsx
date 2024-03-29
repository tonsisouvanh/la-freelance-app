import { Link, useLocation } from "react-router-dom";
import {
  HomeOutlined,
  SoundOutlined,
  SignatureOutlined,
  TeamOutlined,
  ProjectOutlined,
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
    link: "/project-board",
    text: "ປະກາດຫາວຽກ",
    key: "2",
    icon: <SoundOutlined />,
  },
  {
    link: "/projects",
    text: "ວຽກທັງໝົດ",
    key: "5",
    icon: <ProjectOutlined />,
  },
  //   {
  //     link: "/projects/:popular",
  //     text: "ວຽກມາແຮງ",
  //     key: "6",
  //     icon: <FireOutlined className="!text-red-500" />,
  //   },
  // {
  //   link: "/about",
  //   text: "ກ່ຽວກັບ",
  //   key: "3",
  //   icon: <TeamOutlined />,
  // },
  {
    link: "/freelancer/signup",
    text: "ເປັນຟີຣແລນສ",
    key: "4",
    icon: <SignatureOutlined />,
  },
];

const MobileNavbar = () => {
  const { pathname } = useLocation();
  console.log("🚀 ~ MobileNavbar ~ pathname:", pathname);
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0">
      <div
        id="tabs"
        className="flex bg-primary text-white justify-between rounded-tl-lg rounded-tr-lg px-1"
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
              className={` ${
                pathname === item.link &&
                "bg-primary absolute top-[-8px] left-[18px] z-[-1] w-[60px] h-[60px] rounded-full"
              }`}
            ></div>
            <div
              className={`${
                pathname === item.link &&
                "text-black scale-110 transition duration-300"
              }`}
            >
              <div className="inline-block mb-1 w-25 h-25 text-2xl">
                {item.icon}
              </div>
              <span className="tab tab-home block text-xs">{item.text}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbar;
