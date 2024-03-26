import { Tabs } from "antd";
import WorkBoardTable from "../components/workboard/WorkBoardTable";
import MyBoard from "../components/workboard/PostedWorkTable";
const TabPane = Tabs.TabPane;

function callback(key: any) {
  console.log(key);
}

const WorkBoard = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="max-w-6xl px-4 md:px-0 mx-auto flex flex-col gap-28 lg:gap-40 py-16">
        <div className="mt-8 ">
          <h1 className="text-3xl font-bold text-primary">ບ໋ອດປະກາດຫາວຽກ</h1>
          <p className="mt-2">
            ຜູ້ຈ້າງໂພສດງານທີ່ຕ້ອງການເພື່ອຫາຄົນທີ່ເໝາະກັບງານ <br />{" "}
            ຟີຮແລຮນເລືອກງານທີ່ສົນໃຈ
          </p>
        </div>
      </div>
      <div className="border mt-5 rounded-2xl px-2">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="ບ໋ອດປະກາດຫາວຽກ" key="1">
              <WorkBoardTable />
            </TabPane>
            <TabPane tab="ງານທີ່ຂ້ອຍປະກາດ" key="2">
              <MyBoard />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default WorkBoard;
