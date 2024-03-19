import {
  Form,
  Input,
  type FormProps,
  Button,
  message,
  Checkbox,
  Divider,
} from "antd";
import Logo from "../components/shared/Logo";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  PhoneFilled,
} from "@ant-design/icons";
import type { CheckboxProps } from "antd";
import { Link } from "react-router-dom";

type FieldType = {
  phoneno?: string;
  password?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("🚀 ~ values:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("🚀 ~ errorInfo:", errorInfo);
};

const Signin = () => {
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center px-10">
        <div className="absolute top-0 -z-10 h-full w-full bg-white">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#1A96CB]/20 opacity-50 blur-[80px]"></div>
        </div>
        <div className="gap-10 flex flex-col items-center justify-center">
          <Logo className="w-36" />
          <div className="">
            <h2 className="text-center text-xl font-bold">ຍິນດີຕ້ອນຣັບກັບມາ</h2>
            <h2 className="text-center text-xl font-bold">
              ກາລຸນາເຂົ້າສູລະບົບເພື່ອເຂົ້າໃຊ້ງານ
            </h2>
          </div>
          <Form
            layout="vertical"
            className="w-80"
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="ເບີໂທລະສັບ"
              name="phoneno"
              rules={[{ required: true, message: "Please input your phone!" }]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item<FieldType>
              label="ລະຫັດຜ່ານໃຫມ່"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <Input.Password
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                size="large"
              />
            </Form.Item>

            <div className="flex items-center justify-between">
              <div>
                <Checkbox onChange={onChange}>ຈົດຈຳຂ້ອຍ</Checkbox>
              </div>
              <Link to="#" className="text-primary">
                ລືມລະຫັດຜ່ານ?
              </Link>
            </div>
            {/* Buttons */}
            <Form.Item>
              <div className="mt-2 gap-2 flex items-center">
                <Button
                  className="bg-primary text-white"
                  block
                  type="primary"
                  htmlType="submit"
                  size="large"
                  onClick={() => message.success("logged in")}
                >
                  ຢືນຢັນ
                </Button>
              </div>
            </Form.Item>
            <Divider plain>ຫລືເຂົ້າສູລະບົບຜ່ານ</Divider>
            <div className="mt-2 gap-2 flex items-center">
              <Button
                type="default"
                block
                icon={<PhoneFilled />}
                htmlType="submit"
                size="large"
                onClick={() => message.success("logged in")}
              >
                ເຂົ້າສູລະບົບຜ່ານເບີໂທລະສັບ
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Signin;
