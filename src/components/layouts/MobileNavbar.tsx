import { Link, useLocation, useMatch } from "react-router-dom";
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
import { useAppSelector } from "../../hook/hooks";

type MenuItem = {
  link: string;
  guestLink?: string;
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
    link: "/chat-list",
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
    link: "/client/profile",
    guestLink: "profile/view-as-guest",
    text: "ໂປຣຟາຍ",
    key: "4",
    icon: <UserOutlined className="" />,
    activeIcon: <SmileFilled className="" />,
  },

  {
    link: "/signin",
    text: "ເປັນຟີຣແລນສ",
    key: "4",
    icon: <SoundFilled />,
    activeIcon: <SoundFilled />,
  },
];

const MobileNavbar = () => {
  const { pathname } = useLocation();
  const { user } = useAppSelector((state) => state.auth);
  const isMatch = useMatch("/chat/:chatId");

  return (
    <div
      className={`lg:hidden ${
        isMatch && "hidden"
      } z-[9999] fixed bottom-0 left-0 right-0 `}
    >
      <div
        id="tabs"
        className="flex pb-3 bg-color-1 text-white justify-between rounded-tl-lg rounded-tr-lg px-0"
      >
        {items.map((item, index) => (
          <Link
            key={index}
            to={
              pathname.includes("/client/profile") && user
                ? item.guestLink!
                : item.link
            }
            className={`w-full relative justify-center inline-block text-center pt-2 ${
              user && item.link?.includes("signin") && "hidden"
            }`}
          >
            <div
              className={`${
                pathname === item.link &&
                "text-black transition font-bold duration-300"
              }`}
            >
              <div className="inline-block text-lg">
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
