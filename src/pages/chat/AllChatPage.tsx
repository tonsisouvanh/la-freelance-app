import { Button, Input } from "antd";
import { useState } from "react";
import { PaperClipOutlined, SendOutlined } from "@ant-design/icons";
import ModalContractForm from "./form/ModalContractForm";
import { IoSearchOutline } from "react-icons/io5";

const { TextArea } = Input;

const AllChatPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleLogout = () => {
    console.log("modal action");
  };
  return (
    <>
      <ModalContractForm
        open={open}
        setOpen={setOpen}
        handleLogout={handleLogout}
      />
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="flex w-1/4 flex-col border-r border-gray-300 p-4">
          <div className="relative border">
            <Input
              type=""
              className="border-none px-[16px] py-[12px]"
              placeholder="Search messages"
              prefix={
                <IoSearchOutline className="mr-2 text-[#A8ADB7]" size={30} />
              }
            />
          </div>
          <ul className="mt-4 flex-grow divide-y-[1px] overflow-y-auto">
            {/* Chat list items */}
            <li className="flex cursor-pointer items-center p-2 py-[16px] hover:bg-[#EFF5FF]">
              <img
                src="https://www.tadpole.co.nz/wp-content/uploads/2021/02/team-1.jpg"
                alt="User"
                className="mr-3 h-10 w-10 rounded-full"
              />
              <div className="w-full space-y-2">
                <div className="flex w-full items-center justify-between">
                  <h4 className="flex items-center gap-2 text-sm font-semibold">
                    Jan Mayer{" "}
                    <div className="h-[6px] w-[6px] rounded-full bg-color-1"></div>
                  </h4>
                  <span className="ml-auto text-xs text-gray-500">
                    12 mins ago
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  We want to invite you for a qui...
                </p>
              </div>
            </li>
            {Array.from({ length: 4 }, (__, index) => (
              <li
                key={index}
                className="flex cursor-pointer items-center p-2 py-[16px] hover:bg-[#EFF5FF]"
              >
                <img
                  src="https://www.tadpole.co.nz/wp-content/uploads/2021/02/team-1.jpg"
                  alt="User"
                  className="mr-3 h-10 w-10 rounded-full"
                />
                <div className="w-full space-y-2">
                  <div className="flex w-full items-center justify-between">
                    <h4 className="flex items-center gap-2 text-[16px] font-semibold">
                      Jan Mayer
                    </h4>
                    <span className="ml-auto text-xs text-gray-500">
                      12 mins ago
                    </span>
                  </div>
                  <p className="text-[16px] text-gray-500">
                    We want to invite you for a qui...
                  </p>
                </div>
              </li>
            ))}
            {/* Repeat the above <li> for other users */}
          </ul>
        </div>
        {/* Chat Area */}
        <div className="flex flex-grow flex-col">
          {/* Header */}
          <div className="">
            <div className="flex items-center justify-between border-b border-gray-300 p-[24px]">
              <div className="flex items-center">
                <img
                  src="https://www.tadpole.co.nz/wp-content/uploads/2021/02/team-1.jpg"
                  alt="User"
                  className="mr-3 h-12 w-12 rounded-full"
                />
                <div>
                  <h4 className="text-lg font-semibold">Jan Mayer</h4>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <Button
                  type="primary"
                  size="large"
                  className="rounded-full bg-color-1 px-[35px] py-[22px] text-[16px] font-semibold text-white"
                  onClick={showModal}
                >
                  ສ້າງສັນຍາ
                </Button>

                <Button ghost shape="circle" className="border-none">
                  <svg
                    width="22"
                    height="21"
                    viewBox="0 0 22 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.9938 0.00195312C11.3745 0.00195312 11.7221 0.218054 11.8906 0.559392L14.7438 6.34073L21.1233 7.26529C21.5002 7.31992 21.8133 7.58388 21.9309 7.94609C22.0486 8.30831 21.9502 8.70589 21.6774 8.97153L17.0544 13.4715L18.1444 19.8259C18.2088 20.2012 18.0544 20.5805 17.7463 20.8042C17.4381 21.0279 17.0296 21.0572 16.6927 20.8796L11.0003 17.88L5.2942 20.8801C4.95728 21.0572 4.54901 21.0277 4.24106 20.804C3.9331 20.5802 3.77888 20.2011 3.84324 19.8259L4.93327 13.4715L0.31033 8.97153C0.0374334 8.70589 -0.0608907 8.30831 0.0567351 7.94609C0.174361 7.58388 0.487515 7.31992 0.864413 7.26529L7.24388 6.34073L10.0971 0.559392C10.2656 0.218054 10.6132 0.00195312 10.9938 0.00195312ZM10.9938 3.26153L8.80458 7.69751C8.65886 7.99278 8.37713 8.19739 8.05127 8.24461L3.15925 8.9536L6.70535 12.4054C6.94138 12.6351 7.04914 12.9664 6.99345 13.291L6.15704 18.1668L10.5355 15.8648C10.8271 15.7115 11.1755 15.7117 11.467 15.8653L15.8302 18.1645L14.9942 13.291C14.9385 12.9664 15.0463 12.6351 15.2823 12.4054L18.8284 8.9536L13.9364 8.24461C13.6106 8.19739 13.3288 7.99278 13.1831 7.69751L10.9938 3.26153Z"
                      fill="#25324B"
                    />
                  </svg>
                </Button>
                <Button ghost shape="circle" className="border-none">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.5" clip-path="url(#clip0_1039_3731)">
                      <path
                        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                        stroke="#25324B"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                        stroke="#25324B"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                        stroke="#25324B"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1039_3731">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
          {/* Messages */}
          <div className="overscroll-y-scroll flex-grow space-y-[60px] overflow-y-auto px-10">
            <div className="flex flex-col items-center justify-center gap-[8px] py-[32px]">
              <img
                src="https://www.tadpole.co.nz/wp-content/uploads/2021/02/team-1.jpg"
                alt="User"
                className="h-[88px] w-[88px] rounded-full"
              />
              <h4 className="text-[24px] text-color-10">Jan Mayer</h4>
              <p className="text-[16px] text-color-2">
                This is the very beginning of your direct message with{" "}
                <span className="font-bold text-color-10">Jan Mayer</span>
              </p>
            </div>
            <div>
              <div className="mb-4 flex items-start">
                <img
                  src="https://www.tadpole.co.nz/wp-content/uploads/2021/02/team-1.jpg"
                  alt="User"
                  className="mr-3 h-10 w-10 rounded-full"
                />
                <div className="w-full max-w-2xl space-y-[8px] text-[16px]">
                  <h4 className="font-semibold text-color-10">Jan Mayer</h4>
                  <p className="border p-2 px-[16px] py-[12px] text-[#515B6F]">
                    Hey Jake, I wanted to reach out because we saw your work
                    contributions and were impressed by your work.
                  </p>
                  <p className="mt-1 border p-2 px-[16px] py-[12px] text-[#515B6F]">
                    We want to invite you for a quick interview
                  </p>
                  <p className="text-color-2">12 mins ago</p>
                </div>
              </div>
              {/* Success message */}
              <div className="mx-auto w-full max-w-fit space-y-[8px] py-5 text-[16px]">
                <p className="text-center text-color-2">9:49 PM</p>
                <div className="flex max-w-fit items-center gap-2 rounded-[8px] bg-color-11/10 px-[16px] py-[12px]">
                  <svg
                    width="29"
                    height="28"
                    viewBox="0 0 29 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.1673 12.9267V14C26.1659 16.5158 25.3512 18.9638 23.8449 20.9788C22.3385 22.9938 20.2212 24.4679 17.8086 25.1812C15.396 25.8945 12.8175 25.8089 10.4575 24.937C8.09761 24.0652 6.08275 22.4538 4.71344 20.3433C3.34413 18.2327 2.69374 15.7361 2.85927 13.2257C3.02481 10.7153 3.99739 8.32572 5.63198 6.41326C7.26656 4.50079 9.47557 3.16795 11.9295 2.61351C14.3835 2.05907 16.951 2.31273 19.249 3.33667"
                      stroke="#0B8800"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M26.1667 4.66675L14.5 16.3451L11 12.8451"
                      stroke="#0B8800"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-[#515B6F]">
                    ຂໍສະແດງຄວາມຍິນດີ! ຜູ້ຈ້າງໄດ້ຊໍາລະເງິນຮຽບຮ້ອຍແລ້ວ
                  </p>
                </div>
              </div>

              <div className="mb-4 flex items-start justify-end">
                <div className="space-y-[8px] text-[16px]">
                  <h4 className="ml-auto max-w-fit">You</h4>
                  <p className="w-full max-w-md rounded-md bg-color-1/20 p-2 px-[16px] py-[12px] text-[#515B6F]">
                    Hi Jan, sure I would love to. Thanks for taking the time to
                    see my work!
                  </p>
                  <p className="ml-auto w-fit text-color-2">12 mins ago</p>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://www.tadpole.co.nz/wp-content/uploads/2021/02/team-1.jpg"
                    alt="You"
                    className="ml-3 h-10 w-10 rounded-full"
                  />
                </div>
              </div>
            </div>
            {/* Repeat the above message blocks for more messages */}
          </div>
          {/* Message Input */}
          <div className="sticky bottom-0 m-10 mx-auto flex w-full max-w-2xl items-center border p-2">
            <PaperClipOutlined className="text-xl" />
            <TextArea
              placeholder="Reply message"
              autoSize={{ minRows: 1, maxRows: 5 }}
              className="flex-grow border-none focus:ring-0"
            />
            <div className="flex items-center gap-5">
              <Button shape="circle" className="border-none">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5" clip-path="url(#clip0_1039_3747)">
                    <path
                      d="M12.5 21.072C17.4706 21.072 21.5 17.0426 21.5 12.072C21.5 7.10146 17.4706 3.07202 12.5 3.07202C7.52944 3.07202 3.5 7.10146 3.5 12.072C3.5 17.0426 7.52944 21.072 12.5 21.072Z"
                      stroke="#25324B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.5 10.072H9.51"
                      stroke="#25324B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.5 10.072H15.51"
                      stroke="#25324B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 15.072C10.3259 15.4046 10.7148 15.6688 11.1441 15.8492C11.5734 16.0296 12.0344 16.1225 12.5 16.1225C12.9656 16.1225 13.4266 16.0296 13.8559 15.8492C14.2852 15.6688 14.6741 15.4046 15 15.072"
                      stroke="#25324B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1039_3747">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.5 0.0720215)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Button>
              <Button
                type="primary"
                className="min-w-[4rem] rounded-none bg-color-1 py-5"
                icon={<SendOutlined className="" />}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllChatPage;
