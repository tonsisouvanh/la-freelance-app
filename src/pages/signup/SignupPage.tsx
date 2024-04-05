import {
  Button,
  Form,
  type FormProps,
  Input,
  Steps,
  DatePicker,
  Upload,
  InputNumber,
  message,
} from "antd";
import { InputOTP } from "antd-input-otp"; // Don't forget to import this too!
import { useEffect, useState } from "react";
import type { DatePickerProps } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  PlusOutlined,
} from "@ant-design/icons";

import Logo from "../../components/shared/Logo";
import { useAppDispatch, useAppSelector } from "../../hook/hooks";
import { resetStatus, signUp } from "../../store/slices/auth/AuthSlice";
import { RootState } from "../../store/store";

const steps = [
  {
    title: "ເບີໂທລະສັບ",
    content: "",
    description: "ກາລຸນາປ້ອນເບີໂທລະສັບເພື່ອທຳການລົງທະບຽນ",
  },
  {
    title: "OTP",
    content: "ກາລຸນາປ້ອນ OTP ເພື່ອຢືນຢັ້ນ",
    description: "ກາລຸນາປ້ອນ OTP ເພື່ອທຳການລົງທະບຽນ",
  },
  {
    title: "ຊື່  ແລະ ນາມສະກຸນ",
    content: "ກາລຸນາປ້ອນ  ຊື່  ແລະ ນາມສະກຸນ",
    description: "ແນະນຳເປັນ ຊື່ ແລະ ນາມສະກຸນແທ້ເພື່ອທຳການ ຢືນຢັ້ນຕົວຕົນ",
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

type FieldType = {
  phone?: string;
  otp?: string;
  fname?: string;
  lname?: string;
  email?: string;
  dob?: Date | null;
  password?: string;
  confirmPassword?: string;
  profile?: File | null;
};

const Signup = () => {
  const [current, setCurrent] = useState(0);
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector((state: RootState) => state.auth);
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
    description: item.description,
  }));

  const primaryButtonText = () => {
    if (current === 0) {
      return "ສົ່ງ OTP";
    }
    if (current === 1) {
      return "ຢືນຢັນ OTP";
    } else {
      return "ຕໍ່ໄປ";
    }
  };
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    console.log(values);
    if (values.password !== values.confirmPassword) {
      message.warning("Password is not match");
      return;
    }
    dispatch(signUp(values));
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    if (errorInfo.errorFields && errorInfo.errorFields.length >= 0)
      message.error("Thers is empty fields or invalid values");
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  useEffect(() => {
    if (status === "success") {
      console.log("first");
      message.success("Signup successful!");
      dispatch(resetStatus()); // Clear state after success
    } else if (status === "failed") {
      console.log("sec");
      message.error(error);
      dispatch(resetStatus()); // Clear state after error
    }
  }, [dispatch, error, status]);
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center px-10">
        <div className="absolute top-0 -z-10 h-full w-full bg-white">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#1A96CB]/20 opacity-50 blur-[80px]"></div>
        </div>
        <div className="gap-10 flex flex-col items-center justify-center">
          <Logo className="w-36" />
          <Steps
            responsive
            current={current}
            labelPlacement="vertical"
            items={items}
          />
          <div className="w-full">
            <Form
              layout="vertical"
              className=""
              name="basic"
              labelCol={{ span: 8 }}
              // initialValues={{ remember: true }}
              initialValues={{
                phone: "56373311",
                fname: "f name",
                lname: "l name",
                email: "tons1@gmail.com",
                password: "password123",
                confirmPassword: "password123",
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              {/* Step 1 phone number */}
              <Form.Item<FieldType>
                className={`${current === 0 ? "block" : "hidden"}`}
                label="ເບີໂທລະສັບ"
                name="phone"
                rules={[
                  { required: true, message: "Please input your phone!" },
                ]}
              >
                <InputNumber className="w-full" size="large" />
              </Form.Item>

              {/* Step 2 OTP*/}
              <div className={`${current === 1 ? "block" : "hidden"}`}>
                <Form.Item<FieldType> label="OTP" name="otp">
                  <InputOTP length={4} inputType="numeric" />
                </Form.Item>
                <div className="ml-auto max-w-fit">
                  <Button
                    htmlType="button"
                    className="text-primary ml-auto"
                    type="link"
                  >
                    ສົ່ງລະຫັດ OTP ອີກຄັ້ງ
                  </Button>
                </div>
              </div>

              {/* Step 3 First name and last name*/}
              <Form.Item<FieldType>
                className={`${current === 2 ? "block" : "hidden"}`}
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
              <Form.Item<FieldType>
                className={`${current === 2 ? "block" : "hidden"}`}
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

              {/* Step 4 Date of birth*/}
              <Form.Item<FieldType>
                name="profile"
                label="Upload"
                valuePropName="fileList"
                className={`${current === 3 ? "block" : "hidden"}`}
                getValueFromEvent={normFile}
              >
                <Upload maxCount={1} listType="picture-card">
                  <button
                    style={{ border: 0, background: "none" }}
                    type="button"
                  >
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </button>
                </Upload>
              </Form.Item>
              {/* TODO: show age after user input date of birth */}
              <Form.Item<FieldType>
                className={`${current === 3 ? "block" : "hidden"}`}
                label="ວັນເດືອນເກີດ"
                name="dob"
                rules={[
                  {
                    required: true,
                    message: "Please input your date of birth!",
                  },
                ]}
              >
                <DatePicker
                  style={{ display: "block" }}
                  size="large"
                  onChange={onChange}
                />
              </Form.Item>

              {/* Step 5 password*/}
              <Form.Item<FieldType>
                className={`${current === 4 ? "block" : "hidden"}`}
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input!",
                  },
                ]}
              >
                <Input type="email" />
              </Form.Item>
              <Form.Item<FieldType>
                className={`${current === 4 ? "block" : "hidden"}`}
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
                />
              </Form.Item>
              <Form.Item<FieldType>
                className={`${current === 4 ? "block" : "hidden"}`}
                label="ຢືນຢັ້ນລະຫັດຜ່ານ"
                name="confirmPassword"
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
                />
              </Form.Item>

              {/* Buttons */}
              <Form.Item>
                <div className="mt-2 gap-2 flex items-center">
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
                      loading={status === "loading" ? true : false}
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
      </div>
    </>
  );
};

export default Signup;
