import { Button, Table } from "antd";
import type { TableProps } from "antd";

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
    dataIndex: "price",
    key: "price",
  },
  {
    title: "ສະຖານນະ",
    dataIndex: "status",
    key: "status",
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

const PostedProject = () => {
  // const filterOption = (
  //   input: string,
  //   option?: { label: string; value: string }
  // ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  // const onChange = (value: string) => {
  //   console.log(`selected ${value}`);
  // };

  // const onSearch = (value: string) => {
  //   console.log("search:", value);
  // };
  return (
    <>
      <div>
        <div className="flex w-full items-center justify-start my-4">
          <Button type="primary" className="bg-primary text-white">
            ປະກາດຫາຟີຮແລຮນ 0/3
          </Button>
        </div>

        {/* Table */}
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
};

export default PostedProject;
