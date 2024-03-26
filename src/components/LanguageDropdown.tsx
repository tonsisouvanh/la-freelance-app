import React from "react";
import { Dropdown, message, Space } from "antd";
import type { MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
const items: MenuProps["items"] = [
  {
    label: "LA",
    key: "1",
  },
  {
    label: "ENG",
    key: "2",
  },
  {
    label: "CH",
    key: "3",
  },
];


const LanguageDropdown = () => {
  const onClick: MenuProps["onClick"] = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  return (
    <>
      <Dropdown
        // className="border rounded-md px-2 py-1"
        menu={{ items, onClick }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            LA
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </>
  );
};

export default LanguageDropdown;
