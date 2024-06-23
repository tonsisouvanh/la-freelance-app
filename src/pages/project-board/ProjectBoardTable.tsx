import { Button, Select, Table } from "antd";
import type { TableProps } from "antd";
import { Link } from "react-router-dom";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "ເລກລຳດັບ",
    dataIndex: "id",
    key: "no",
    responsive: ["md"],
  },
  {
    title: "ຫົວຂໍ້",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "ໝວດໝູ່",
    dataIndex: "group",
    key: "category",
  },
  {
    title: "ຈຳນວນເງິນ",
    dataIndex: "money",
    key: "price",
  },
  {
    title: "ມື້ສ້າງ",
    dataIndex: "start",
    key: "start",
    responsive: ["md"],
  },
  {
    title: "ມື້ສົ່ງງານ",
    dataIndex: "endline",
    key: "endline",
    responsive: ["md"],
  },
];

const data: DataType[] = [];

const ProjectBoardTable = () => {
  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };
  return (
    <>
      {/* TODO: Make it mobile responsive */}
      <div>
        <div className="flex flex-wrap w-full items-center  justify-between my-4 gap-2">
          <div>
            <Select
              showSearch
              placeholder="ໝວດໝູ່ທີ່ຕ້ອງການ"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "tom",
                  label: "Tom",
                },
              ]}
            />
          </div>
          <div className="flex flex-wrap max-sm:gap-4 gap-12">
            <Button type="default">
              ຂ້ອຍຢາກຣັບວຽກໃນປະກາດວຽກຕ້ອງເຣັດແນວໃດ?
            </Button>
            <Link to="/post-word">
              <Button type="primary" className="bg-color-1 text-white">
                ປະກາດຫາຟີຮແລຮນ 0/3
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {Array.from({ length: 4 }, (__, index) => (
            <div key={index} className="bg-color-1/10 rounded-md p-4">
              <div className="space-y-2">
                <h4 className="text-color-1 text-lg">
                  ຂ້ອຍຢາກໄດ້ Dev ມາເຣັດໂປຣເຈັກ ຣ້ານອາຫານ
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p>ຈຳນວນເງິນ</p>
                    <p>24.000.000ກີບ</p>
                  </div>
                  <div>
                    <p>ໜວດໜູ່</p>
                    <p>ຂຽນໂປຣແກຣມ</p>
                  </div>
                  <div>
                    <p>ວັນທີ່ສ້າງ</p>
                    <p>14/03/2024</p>
                  </div>
                  <div>
                    <p>ວັນທີ່ສົ່ງມອບ</p>
                    <p>2430/08/2024</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        <Table className="hidden" columns={columns} dataSource={data} />
      </div>
    </>
  );
};

export default ProjectBoardTable;
