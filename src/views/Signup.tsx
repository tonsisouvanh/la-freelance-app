import {
  Button,
  Checkbox,
  Form,
  type FormProps,
  Input,
  Flex,
  message,
  Steps,
} from "antd";
import { Typography } from "antd";
import { useState } from "react";
import Logo from "../components/shared/Logo";

const steps = [
  {
    title: "ປ້ອນເບີໂທລະສັບ",
    content: "ກາລຸນາປ້ອນເບີໂທລະສັບເພື່ອທຳການລົງທະບຽນ",
  },
  {
    title: "OTP",
    content: "ກາລຸນາປ້ອນ OTP ເພື່ອຢືນຢັ້ນ",
  },
  {
    title: "ຊື່  ແລະ ນາມສະກຸນ",
    content: "ກາລຸນາປ້ອນ  ຊື່  ແລະ ນາມສະກຸນ",
  },
  {
    title: "ວັນເດືອນປີເກີດ",
    content: "ແນະນຳເປັນ ວັນເດືືອນປີເກີດແທ້ເພື່ທຳການ ຢືນຢັ້ນຕົວຕົນ",
  },
  {
    title: "ສ້າງລະຫັດຜ່ານ",
    content: "ລະຫັດຜ່ານນີ້ແມ່ນຈະໃຊ້ເພື່ອເຂົ້າສູລະບົບ",
  },
];

const { Title } = Typography;

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const Signup = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <>
      <Flex className="h-screen gap-10 w-full flex flex-col items-center justify-center">
        <Logo className="w-24" />
        <Steps className="w-1/2" current={current} items={items} />
        <div>
          <Title level={3}>{steps[current].content}</Title>
          {current === 0 && (
            <Form
              className=""
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item<FieldType>
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item<FieldType>
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <div style={{ marginTop: 24 }}>
                  {current < steps.length - 1 && (
                    <Button
                      htmlType="submit"
                      type="primary"
                      onClick={() => next()}
                    >
                      Next
                    </Button>
                  )}
                  {current === steps.length - 1 && (
                    <Button
                      type="primary"
                      onClick={() => message.success("Processing complete!")}
                    >
                      Done
                    </Button>
                  )}
                  {current > 0 && (
                    <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                      Previous
                    </Button>
                  )}
                </div>
              </Form.Item>
            </Form>
          )}
          {current === 1 && (
            <div className="text-xl font-bold">
              Form 2
              <div style={{ marginTop: 24 }}>
                {current < steps.length - 1 && (
                  <Button
                    htmlType="submit"
                    type="primary"
                    onClick={() => next()}
                  >
                    Next
                  </Button>
                )}
                {current === steps.length - 1 && (
                  <Button
                    type="primary"
                    onClick={() => message.success("Processing complete!")}
                  >
                    Done
                  </Button>
                )}
                {current > 0 && (
                  <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                    Previous
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </Flex>
    </>
  );
};

export default Signup;
