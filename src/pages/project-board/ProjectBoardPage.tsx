import { Button, Tabs, TabsProps } from "antd";
import ProjectBoardTable from "./ProjectBoardTable";
import ClientProjectBoard from "./ClientProjectBoard";
import { Link } from "react-router-dom";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "ບ໋ອດປະກາດຫາວຽກ",
    children: <ProjectBoardTable />,
  },
  {
    key: "2",
    label: "ງານທີ່ຂ້ອຍປະກາດ",
    children: (
      <>
        <div className="ml-auto max-w-fit">
          <Link to="/client/post-project">
            <Button type="primary" className="text-white bg-primary mb-2">
              ສ້າງປະກາດ 0/3
            </Button>
          </Link>
        </div>
        <ClientProjectBoard />
      </>
    ),
  },
];

const ProjectBoard = () => {
  const onChange = (key: string) => {
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="max-w-6xl px-4 mx-auto flex flex-col gap-28 lg:gap-40 max-sm:py-0 py-20">
        <div className="mt-8 ">
          <h1 className="text-3xl font-bold text-primary">ບ໋ອດປະກາດຫາວຽກ</h1>
          <p className="mt-2">
            ຜູ້ຈ້າງໂພສດງານທີ່ຕ້ອງການເພື່ອຫາຄົນທີ່ເໝາະກັບງານ <br />{" "}
            ຟີຮແລຮນເລືອກງານທີ່ສົນໃຈ
          </p>
        </div>
      </div>
      <div className="border mt-5 rounded-2xl px-2">
        <div className="max-w-6xl mx-auto pb-10">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default ProjectBoard;
