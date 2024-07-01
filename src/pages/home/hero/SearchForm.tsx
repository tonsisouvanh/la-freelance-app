import { SearchOutlined } from "@ant-design/icons";
import { Button, Form, FormProps, Input, Select, Space } from "antd";
import "./styles.css";
import { IoIosSearch } from "react-icons/io";

type Props = {};

const options = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "name",
    label: "Project Name",
  },
  {
    value: "freelancer",
    label: "Freelance Name",
  },
];

type FieldType = {
  type: string;
  keyword: string;
};
const SearchForm = (props: Props) => {
  return (
    <form className="flex items-center max-lg:items-start max-lg:flex-col gap-2">
      <div>
        <select className="border text-sm focus:outline-none rounded-full  max-lg:p-1 max-lg:text-xs p-2 border-color-1">
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="relative flex items-center border-0 border-b-[1px] border-color-1 w-full">
        <IoIosSearch className="text-xl absoluted top-0d left-0d" />
        <input
          placeholder="ພິມຊື່ໂປຣເຈັກທີ່ຕ້ອງການຄົ້ນຫາ"
          type="text"
          className="border-0 max-lg:text-xs text-sm p-2 focus:outline-none bg-transparent w-full"
        />
        <Button type="primary" className="rounded-full bg-color-1 mb-1">
          ຄົ້ນຫາ
        </Button>
      </div>
    </form>
  );
};

export default SearchForm;
