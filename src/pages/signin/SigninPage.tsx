import {
  Form,
  Input,
  type FormProps,
  Button,
  message,
  Checkbox,
  Divider,
} from "antd";
import Logo from "../../components/shared/Logo";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  PhoneFilled,
} from "@ant-design/icons";
import type { CheckboxProps } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { SigninType } from "../../store/slices/auth/authType";
import { useAppDispatch, useAppSelector } from "../../hook/hooks";
import { resetStatus, signIn } from "../../store/slices/auth/AuthSlice";
import { useEffect } from "react";

const Signin = () => {
  const dispatch = useAppDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const { user, status, error } = useAppSelector((state) => state.auth);

  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onFinish: FormProps<SigninType>["onFinish"] = (values) => {
    if (!values.phone || !values.password) {
      return;
    }
    dispatch(signIn(values));
  };

  const onFinishFailed: FormProps<SigninType>["onFinishFailed"] = (
    errorInfo
  ) => {};

  useEffect(() => {
    if (status === "success") {
      navigate("/");
    } else if (status === "failed") {
      messageApi.error(error);
    }

    return () => {
      dispatch(resetStatus());
    };
  }, [dispatch, status, navigate, user, messageApi, error]);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <>
      {contextHolder}
      <div className="w-full h-screen flex items-center justify-center px-10 pb-24">
        <div className="absolute top-0 -z-10 h-full w-full bg-white">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#1A96CB]/20 opacity-50 blur-[80px]"></div>
        </div>
        <div className="gap-5 flex flex-col items-center justify-center">
          <Logo className="w-24" />
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
            <Form.Item<SigninType>
              label="ເບີໂທລະສັບ"
              name="phone"
              rules={[{ required: true, message: "Please input your phone!" }]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item<SigninType>
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
