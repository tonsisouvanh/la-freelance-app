import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

type Props = {};

const Searchbar = (props: Props) => {
  return (
    <div className="py-10 lg:py-28 px-2 lg:px-10 bg-gradient-to-b from-primary via-primary to-cyan-500">
      <div className="flex flex-col items-center justify-center">
        <p className="text-white text-lg lg:text-3xl mb-3">ຄົ້ນຫາຟີຣແລນສ</p>
        <Input
          size="large"
          className="shadow-lg p-2 md:w-[40rem] lg:py-4 lg:w-[50rem]"
          placeholder="By Freelance name or work"
          prefix={
            <SearchOutlined className="text-primary border-r-2 border-r-primary px-1 mr-2   " />
          }
        />
      </div>
    </div>
  );
};

export default Searchbar;
