import { Input } from "antd";
import { FaSearch } from "react-icons/fa";
import ChatRow from "./ChatRow";
import React from "react";

const AllChatPage = () => {
  return (
    <div className="">
      <div className="bg-color-1 rounded-b-lg flex items-center justify-center h-20">
        <h1 className="text-white">CHAT</h1>
      </div>
      <div className="bg-color-1/20 -mt-1 px-2 py-6">
        <div className="md:_container md:gap-0 md:py-0">
          <p className="text-md font-semibold text-slate-800 mb-1 lg:text-lg z-[1]">
            ຄົ້ນຫາຟີຣແລນສ
          </p>
          <Input
            size="small"
            className="p-2 w-full md:w-[40rem]"
            placeholder="ພິມຊື່ຟີຣແລນສ"
            prefix={
              <FaSearch className="text-color-1 text-2xl border-r-2 border-r-color-1 px-1 mr-2" />
            }
          />
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
