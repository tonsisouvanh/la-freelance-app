import { Button, Input } from "antd";
import { FaSearch } from "react-icons/fa";
import ChatRow from "./ChatRow";
import React from "react";

const AllChatPage = () => {
  return (
    <div className="">
      <div className="flex flex-col w-full items-center gap-4">
        <h1 className="text-color-1 font-bold text-2xl">ແຊັດ</h1>
        <div className="max-w-xl w-full flex justify-center items-center gap-2">
          <Input
            size="small"
            className="p-2 max-w-[480px] w-full rounded-lg"
            placeholder="ພິມຊື່ຟີຣແລນສ໌"
          />
          <Button
            type="primary"
            size="large"
            icon={<FaSearch />}
            className="text-white rounded-lg flex items-center justify-center bg-color-1"
          ></Button>
        </div>
      </div>
      <div>
        <div className="flex flex-col md:_container md:gap-0 md:py-0">
          {Array.from({ length: 4 }, (__, index) => (
            <React.Fragment key={index}>
              <ChatRow />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllChatPage;
