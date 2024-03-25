import {
  Button,
  Form,
  type FormProps,
  Input,
  Steps,
  DatePicker,
  Select,
  Radio,
  Upload,
} from "antd";
import { useState } from "react";
import type { DatePickerProps } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  PlusOutlined,
} from "@ant-design/icons";
import { FreelanceRegisterFieldType } from "../type";
import { provinceList } from "../data";
import Results from "../components/shared/Results";

const steps = [
  {
    title: "ສະໝັກເປັນຟີຮແລຮນ",
  },
  {
    title: "ປ້ອນຂໍ້ມູນສ່ວນຕົວ",
  },
  {
    title: "ການຢືນຢັນຕົວຕົນ",
  },
  {
    title: "ການສົ່ງເອກະສານສຳເລັດ",
  },
];

const FreelanceSignupPage = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const primaryButtonText = () => {
    if (current >= 0) {
      return "ຕໍ່ໄປ";
    }
    if (current === steps.length - 1) {
      return "ຢືນຢັນ OTP";
    }
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const onFinish: FormProps<FreelanceRegisterFieldType>["onFinish"] = (
    values
  ) => {
    console.log("🚀 ~ values:", values);
  };

  const onFinishFailed: FormProps<FreelanceRegisterFieldType>["onFinishFailed"] =
    (errorInfo) => {
      console.log("🚀 ~ errorInfo:", errorInfo);
    };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <>
      <div className="_container gap-10">
        <div>
          <h1 className="text-3xl font-bold text-primary">Freelance Sign Up</h1>
          <p className="mt-2 max-w-sm">
            ສະໝັກເປັນຟລີແລຣນເພື່ອການຊອອກຫາຄລູກຄ້າທີ່ເໝາະສົມ ແລະ ປອກໄພ
          </p>
        </div>
        <div className="w-full flex flex-col gap-10 items-center justify-center px-10">
          <div className="absolute top-0 -z-10 h-full w-full bg-white">
            <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#1A96CB]/20 opacity-50 blur-[80px]"></div>
          </div>
          <Steps
            responsive
            current={current}
            labelPlacement="vertical"
            items={items}
          />
          <Form
            layout="vertical"
            className="w-full max-w-xl"
            name="basic"
            labelCol={{ span: 8 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            {/* Step 1 */}
            <div className={`${current === 0 ? "block" : "hidden"}`}>
              <Form.Item<FreelanceRegisterFieldType>
                label="ຊື່ແທ້"
                name="fname"
                rules={[
                  { required: true, message: "Please input your phone!" },
                ]}
              >
                <Input className="w-full" size="large" />
              </Form.Item>
              <Form.Item<FreelanceRegisterFieldType>
                label="ນາມສະກູນ"
                name="lname"
                rules={[
                  { required: true, message: "Please input your phone!" },
                ]}
              >
                <Input className="w-full" size="large" />
              </Form.Item>
              <Form.Item<FreelanceRegisterFieldType>
                label="ເລືອກບ້ານ"
                name="village"
                rules={[
                  { required: true, message: "Please input your phone!" },
                ]}
              >
                <Select
                  onChange={handleChange}
                  options={provinceList.map((province) => ({
                    value: province.englishName,
                    label: province.laoName,
                  }))}
                />
              </Form.Item>
              <Form.Item<FreelanceRegisterFieldType>
                label="ເມືອງ"
                name="district"
                rules={[{ required: true, message: "Please input" }]}
              >
                <Select
                  onChange={handleChange}
                  options={provinceList.map((province) => ({
                    value: province.englishName,
                    label: province.laoName,
                  }))}
                />
              </Form.Item>
              <Form.Item<FreelanceRegisterFieldType>
                label="ແຂວງ"
                name="province"
                rules={[{ required: true, message: "Please input" }]}
              >
                <Select
                  onChange={handleChange}
                  options={provinceList.map((province) => ({
                    value: province.englishName,
                    label: province.laoName,
                  }))}
                />
              </Form.Item>
            </div>

            {/* Step 2 personal info*/}
            <div className={`${current === 1 ? "block" : "hidden"}`}>
              <Form.Item<FreelanceRegisterFieldType>
                label="ວັນເດືອນປີເກີດ"
                name="dob"
                rules={[{ required: true, message: "Please input" }]}
              >
                <DatePicker
                  className="w-full"
                  size="large"
                  placeholder="ເລືອກວັນເດືອນເກິດ"
                />
              </Form.Item>

              <div className="mb-5">
                <h4 className="mb-2">ເລືອກເອກະສານຢືນຢັ້ນຕົວຕົນ</h4>
                <Radio.Group
                  onChange={(e) => console.log(e.target.value)}
                  defaultValue="a"
                  buttonStyle="solid"
                >
                  <Radio.Button value="a">Hangzhou</Radio.Button>
                  <Radio.Button value="b">Shanghai</Radio.Button>
                  <Radio.Button value="c">Beijing</Radio.Button>
                  <Radio.Button value="d">Chengdu</Radio.Button>
                </Radio.Group>
              </div>
            </div>

            {/* Step 3 verification */}
            <div className={`${current === 2 ? "block" : "hidden"}`}>
              <Form.Item<FreelanceRegisterFieldType>
                label="ຊື່ແທ້"
                name="fname"
                rules={[
                  {
                    required: true,
                    message: "Please input your first name!",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item<FreelanceRegisterFieldType>
                label="ນາມສະກຸນ"
                name="lname"
                rules={[
                  {
                    required: true,
                    message: "Please input your last name!",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item<FreelanceRegisterFieldType>
                label="ເລືອກປະເພດເອກະສານ"
                name="documentType"
                rules={[
                  { required: true, message: "Please input your phone!" },
                ]}
              >
                <Select onChange={handleChange} options={[]} />
              </Form.Item>
              <Form.Item
                label="Upload"
                valuePropName="fileList"
                getValueFromEvent={normFile}
              >
                <Upload action="/upload.do" listType="picture-card">
                  <button
                    style={{ border: 0, background: "none" }}
                    type="button"
                  >
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </button>
                </Upload>
              </Form.Item>
            </div>

            {/* Step 4 Result */}
            <div className={` ${current === 3 ? "block" : "hidden"}`}>
              <Results
                status="success"
                title="ການສົ່ງເອກະສານສຳເລັດ"
                subtTitle="ພວກເຮົາຈະກວດສອບພາຍໃນ 3 ວັນ ແລ້ວທາງເຮົາຈະຕິດຕໍ່ກັບ ຂອບໃຈທີ່ໃຊ້ບໍລິການເຮົາເດີ້"
              />
            </div>

            {/* Buttons */}
            <Form.Item>
              <div
                className={`mt-2 gap-2 flex items-center ${
                  current === 3 && "hidden"
                }`}
              >
                {current < steps.length - 1 && (
                  <Button
                    type="primary"
                    className="bg-primary"
                    block
                    size="large"
                    onClick={() => next()}
                  >
                    {primaryButtonText()}
                  </Button>
                )}
                {current === steps.length - 1 && (
                  <Button
                    type="primary"
                    block
                    className="bg-primary"
                    htmlType="submit"
                    size="large"
                  >
                    ຢືນຢັນ
                  </Button>
                )}
                {current > 0 && (
                  <Button block size="large" onClick={() => prev()}>
                    ກັບຄືນ
                  </Button>
                )}
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default FreelanceSignupPage;
