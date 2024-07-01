import type { MenuProps } from "antd";
import { Avatar, Dropdown } from "antd";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { TiUserOutline } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";

type Props = {
  showModal: () => void;
};

const ProfileDropdown = ({ showModal }: Props) => {
  const navigate = useNavigate();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link to="/client/profile" className="flex items-center gap-3">
          <FaUser />
          <span>ຂໍ້ມູນສ່ວນໂຕ</span>
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link to="/chat-list" className="flex items-center gap-3">
          <FaMessage />
          <span>ແຊັດ</span>
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <button onClick={showModal} className="flex items-center gap-3">
          <FaSignOutAlt />
          <span>ອອກຈາກລະບົບ</span>
        </button>
      ),
    },
  ];
  return (
    <Dropdown menu={{ items }}>
      <Avatar
        onClick={() => navigate("client/profile")}
        size={"large"}
        className="bg-color-1 cursor-pointer hover:opacity-70"
        icon={<TiUserOutline />}
      />
    </Dropdown>
  );
};

export default ProfileDropdown;
