import { Avatar } from "antd";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ChatRow = () => {
  return (
    <Link to={`/chat/${1}`} className="relative hover:bg-primary/10 focus:bg-primary/10 flex items-center gap-3 border-b px-2 py-4">
      <p className="text-[10px] text-gray-500 absolute top-3 right-3">20:30</p>
      <Avatar className="min-w-12 h-12" icon={<FaUser />} />
      <div className="overflow-hidden">
        <h4 className="font-bold text-sm">John Doe</h4>
        <p className="line-clamp-1 text-sm text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cum
          autem aperiam ullam. Libero autem ea placeat ex modi adipisci
          recusandae. Fugit facilis magni cumque nisi earum maiores nobis
          similique?
        </p>
      </div>
    </Link>
  );
};

export default ChatRow;
