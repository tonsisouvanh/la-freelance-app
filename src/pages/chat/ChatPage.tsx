import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import Message from "./Message";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const ChatPage: React.FC = () => {
  const navigate = useNavigate();
  // const [messages, setMessages] = useState<string[]>([]);
  // const [message, setMessage] = useState<string>("");

  return (
    <>
      <div className="bg-primary md:max-w-6xl md:mx-auto w-full px-3 h-14 flex items-center justify-between">
        <FaChevronLeft
          onClick={() => navigate("/chat-list")}
          className="text-white hover:opacity-50 cursor-pointer"
        />
        <h1 className="text-xl text-white font-semibold"> To: Alice</h1>
      </div>
      <div className="relative flex items-center justify-center w-full h-screen md:max-w-6xl md:mx-auto">
        <div className="h-screen md:w-full overflow-y-auto p-4 pb-36">
          {Array.from({ length: 11 }, (__, index) => (
            <React.Fragment key={index}>
              {index % 2 === 0 ? (
                <Message messageType="incoming" />
              ) : (
                <Message messageType="outgoing" />
              )}
            </React.Fragment>
          ))}
        </div>
        <footer className="bg-white border-t border-gray-300 absolute bottom-0 left-0 w-full">
          <div className="flex items-center px-4">
            <input
              type="default"
              placeholder="Type a message..."
              className="w-full p-5 rounded-md focus:outline-none text-md"
            ></input>
            <Button size="large" className="bg-primary text-white ml-2">
              Send
            </Button>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ChatPage;
