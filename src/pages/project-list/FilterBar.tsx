import React from "react";
import { Input, Button, Select } from "antd";
import { BsChevronDown } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

const { Option } = Select;

const FilterBar: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-[20px] rounded-[16px] bg-color-8 px-40 py-[40px] shadow-lg">
      {/* Search Bar */}
      <div className="flex w-full flex-1 items-center">
        <Input
          placeholder="Search freelancer or project name / category"
          prefix={<FiSearch size={25} className="text-color-1" />}
          suffix={
            <Button
              type="primary"
              className="rounded-full bg-color-1 px-7 py-4 text-white"
            >
              ຄົ້ນຫາ
            </Button>
          }
          size="large"
          className="w-full rounded-full border-color-1 text-[14px]"
        />
      </div>
      {/* Filters */}
      <div className="flex w-full items-center justify-between gap-2">
        <Button
          type="default"
          className="rounded-full border-none shadow-none"
          icon={
            <svg
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 14.8571C8 14.554 8.10536 14.2633 8.29289 14.049C8.48043 13.8347 8.73478 13.7143 9 13.7143H15C15.2652 13.7143 15.5196 13.8347 15.7071 14.049C15.8946 14.2633 16 14.554 16 14.8571C16 15.1602 15.8946 15.4509 15.7071 15.6653C15.5196 15.8796 15.2652 16 15 16H9C8.73478 16 8.48043 15.8796 8.29289 15.6653C8.10536 15.4509 8 15.1602 8 14.8571ZM4 8C4 7.6969 4.10536 7.40621 4.29289 7.19188C4.48043 6.97755 4.73478 6.85714 5 6.85714H19C19.2652 6.85714 19.5196 6.97755 19.7071 7.19188C19.8946 7.40621 20 7.6969 20 8C20 8.3031 19.8946 8.59379 19.7071 8.80812C19.5196 9.02245 19.2652 9.14286 19 9.14286H5C4.73478 9.14286 4.48043 9.02245 4.29289 8.80812C4.10536 8.59379 4 8.3031 4 8ZM0 1.14286C0 0.839753 0.105357 0.549063 0.292893 0.334735C0.48043 0.120408 0.734783 0 1 0H23C23.2652 0 23.5196 0.120408 23.7071 0.334735C23.8946 0.549063 24 0.839753 24 1.14286C24 1.44596 23.8946 1.73665 23.7071 1.95098C23.5196 2.16531 23.2652 2.28571 23 2.28571H1C0.734783 2.28571 0.48043 2.16531 0.292893 1.95098C0.105357 1.73665 0 1.44596 0 1.14286Z"
                fill="#7C8493"
              />
            </svg>
          }
        >
          ຕົວກອງ
        </Button>
        <Select
          defaultValue="ທັງຫມົດ"
          suffixIcon={
            <BsChevronDown className="text-md font-bold text-color-1" />
          }
          className="w-[8rem]"
        >
          <Option value="all">ທັງຫມົດ</Option>
          <Option value="option1">Option 1</Option>
          <Option value="option2">Option 2</Option>
          <Option value="option3">Option 3</Option>
          <Option value="option4">Option 4</Option>
          <Option value="option5">Option 5</Option>
          {/* Add more options */}
        </Select>
        <Select
          suffixIcon={
            <BsChevronDown className="text-md font-bold text-color-1" />
          }
          defaultValue="ເວລາທີ່ຕອງການ"
          className="w-[8rem]"
        >
          <Option value="time">ເວລາທີ່ຕອງການ</Option>
          <Option value="option1">Option 1</Option>
          <Option value="option2">Option 2</Option>
          <Option value="option3">Option 3</Option>
          <Option value="option4">Option 4</Option>
          <Option value="option5">Option 5</Option>
          {/* Add more options */}
        </Select>
        <Select
          suffixIcon={
            <BsChevronDown className="text-md font-bold text-color-1" />
          }
          defaultValue="ລາຄາ"
          className="w-full md:w-auto"
        >
          <Option value="price">ລາຄາ</Option>
          <Option value="option1">Option 1</Option>
          <Option value="option2">Option 2</Option>
          <Option value="option3">Option 3</Option>
          <Option value="option4">Option 4</Option>
          <Option value="option5">Option 5</Option>
          {/* Add more options */}
        </Select>
        <Select
          suffixIcon={
            <BsChevronDown className="text-md font-bold text-color-1" />
          }
          defaultValue="ຈໍານວນວຽກ"
          className="w-full md:w-auto"
        >
          <Option value="projects">ຈໍານວນວຽກ</Option>
          <Option value="option1">Option 1</Option>
          <Option value="option2">Option 2</Option>
          <Option value="option3">Option 3</Option>
          <Option value="option4">Option 4</Option>
          <Option value="option5">Option 5</Option>
          {/* Add more options */}
        </Select>
        <Select
          suffixIcon={
            <BsChevronDown className="text-md font-bold text-color-1" />
          }
          defaultValue="ລະດັບ"
          className="w-full md:w-auto"
        >
          <Option value="level">ລະດັບ</Option>
          <Option value="option1">Option 1</Option>
          <Option value="option2">Option 2</Option>
          <Option value="option3">Option 3</Option>
          <Option value="option4">Option 4</Option>
          <Option value="option5">Option 5</Option>
          {/* Add more options */}
        </Select>
      </div>
    </div>
  );
};

export default FilterBar;
