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
  },
  {
    title: "ມື້ສົ່ງງານ",
    dataIndex: "endline",
    key: "endline",
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
        <div className="flex w-full items-center justify-between my-4">
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
          <div className="flex gap-12">
            <Button type="default">ຢາກຮັບງານຈາກບ໋ອດປະກາດວຽກ</Button>
            <Link to="/post-word">
              <Button type="primary" className="bg-primary text-white">
                ປະກາດຫາຟີຮແລຮນ 0/3
              </Button>
            </Link>
          </div>
        </div>

        {/* Table */}
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
};

export default ProjectBoardTable;
