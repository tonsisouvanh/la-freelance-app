import {
  Button,
  Form,
  type FormProps,
  Input,
  DatePicker,
  Select,
  InputNumber,
  Space,
  Radio,
  DatePickerProps,
} from "antd";
import { CategoryType } from "../../type";
import { FaBuilding, FaTimes, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type FieldType = {
  title: string;
  description: string;
  example: string;
  category: string;
  budget: number;
  deadline: Date;
  useFor: string;
};

const { TextArea } = Input;

const categories: CategoryType[] = [
  { id: 1, name: "ຕາກ້ອງ" },
  { id: 2, name: "ອອກແບບ" },
  { id: 3, name: "ອອກແບບບ້ານ ແລະ ໂຄງການ" },
  { id: 4, name: "ຂຽນໂປຮແກຮມ" },
  { id: 5, name: "ຕັດຕໍ່ວິດີໂອ ແລະ ຮູບພາບ" },
  { id: 6, name: "ແປພາສາ ແລະ ເອກະສານ" },
  { id: 7, name: "ການຕະຫຼາດ" },
];

const PostProjectForm = () => {
  const navigate = useNavigate();
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("🚀 ~ values:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("🚀 ~ errorInfo:", errorInfo);
  };

  return (
    <>
      <Form
        layout="vertical"
        className=""
        name="basic"
        labelCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {/* Title */}
        <Form.Item<FieldType>
          label="ຫົວຂໍ້"
          name="title"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input className="" size="large" />
        </Form.Item>
        {/* Project description */}
        <Form.Item<FieldType>
          label="ລາຍລະອຽດວຽກ"
          name="description"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <TextArea
            showCount
            maxLength={100}
            placeholder={`ລາຍລະອຽດວຽກທີ່ຕ້ອງການເຊັ່ນ:
1. ຂໍ້ມູນວຽກ: ຈຸດປະສົ່ງ . ກຸ່ມລູກຄ້າ . ແຜ່ນການດຳເນີດວຽກຕ່າງໆ ແລະ ອື່ນໆ.
2. ລາຍລະອຽດວຽກ: ຈຳນວນວຽກ . ເງືອນໄຂທີ່ຈຳເປັນ . ຂອບເຂດວຽກ ແລະ ອື່ນໆ
( ຫ້າມລົງຂໍ້ມູນຕິດຕໍ່ເຊັນ : ເບີໂທລະສັບ , ອີເມວ ,  ແລະ ອື່ນໆ )`}
            style={{ height: 200, resize: "none" }}
          />
        </Form.Item>
        {/* Example */}
        <Form.Item<FieldType> label="ຕົວຢ່າງວຽກ" name="example">
          <Input className="" placeholder="https://example.com" size="large" />
        </Form.Item>
        {/* Category */}
        <Form.Item<FieldType>
          label="ໜວດໜູ່ວຽກ"
          name="category"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Select
            size="large"
            options={categories.map((cate) => ({
              value: cate.name,
              label: cate.name,
            }))}
          />
        </Form.Item>

        {/* Budget and deadline */}
        <Space className="grid grid-cols-2" align="start">
          <Form.Item<FieldType>
            label={<span className="whitespace-nowrap">ງົບປະມານ</span>}
            name="budget"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <InputNumber
              size="large"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              className="w-full"
              parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
            />
          </Form.Item>
          <Form.Item<FieldType>
            label={<span className="whitespace-nowrap ">ໄລຍະເວລາສົ່ງ</span>}
            name="deadline"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <DatePicker className="!w-full" size="large" onChange={onChange} />
          </Form.Item>
        </Space>

        <Form.Item<FieldType>
          name="useFor"
          label="ຈະນຳໄປໃຊ້"
          rules={[{ required: true, message: "Please pick an item!" }]}
        >
          <Radio.Group buttonStyle="solid" className="grid grid-cols-3">
            {[
              { value: "person", label: "ບຸກຄົນ", icon: <FaUser /> },
              { value: "company", label: "ບໍລິສັດ", icon: <FaBuilding /> },
              { value: "unknown", label: "ບໍຣູ້", icon: <FaTimes /> },
            ].map((item, index) => (
              <Radio.Button
                key={index}
                className={`flex group h-fit p-4 justify-center  w-full`}
                value={item.value}
              >
                <div className="flex flex-col items-center justify-center">
                  <span className="text-5xl text-slate-300 group-hover:text-primary">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
              </Radio.Button>
            ))}
          </Radio.Group>
        </Form.Item>

        {/* Submit */}
        <Form.Item>
          <div className="flex items-center justify-end gap-2">
            <Button
              type="primary"
              htmlType="submit"
              className="text-white bg-primary w-24 rounded-full"
            >
              ສົ່ງ
            </Button>
            <Button onClick={() => navigate(-1)} className="w-24 rounded-full">ຍ້ອນກັບ</Button>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};

export default PostProjectForm;
