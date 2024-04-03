import { Button, Form, type FormProps, Input, Steps, Checkbox } from "antd";
import { useState } from "react";
import { FreelanceSignupFieldType } from "../../type";
import Results from "../../components/shared/Results";
import StepCondition from "./StepCondition";
import StepDocument from "./StepDocument";
import StepDocumentImage from "./StepDocumentImage";
import StepBankAccount from "./StepBankAccount";
import { FaHouse } from "react-icons/fa6";
import { Link } from "react-router-dom";

const steps = [
  {
    title: "ເງື່ອນໄຂ",
  },
  {
    title: "ເອກະສານສ່ວນໂຕ",
  },
  {
    title: "ປ້ອນຂໍມູນສ່ວນໂຕ",
  },
  {
    title: "ປ້ອນຂໍ້ມູນບັນຊີທະນາຄານ",
  },
  {
    title: "ການສົ່ງເອກກະສານສຳເລັດ",
  },
];

const FreelanceSignupPage = () => {
  const [current, setCurrent] = useState<number>(0);
  const [isAcceptTerms, setIsAcceptTerms] = useState<boolean>(false);

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

  const onFinish: FormProps<FreelanceSignupFieldType>["onFinish"] = (
    values
  ) => {
    console.log("🚀 ~ values:", values);
    //TODO: Do value validation and call API
    if (values) next();
  };

  const onFinishFailed: FormProps<FreelanceSignupFieldType>["onFinishFailed"] =
    (errorInfo) => {
      // TODO: show warning message if client have not input all field
      console.log("🚀 ~ errorInfo:", errorInfo);
    };

  return (
    <>
      <div className="_container gap-10">
        <Link className="max-sm:hidden w-fit" to="/">
          <Button
            type="primary"
            icon={<FaHouse />}
            className="text-white bg-primary"
          ></Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-primary">Freelance Sign Up</h1>
          <p className="mt-2 max-w-sm">
            ສະໝັກເປັນຟລີແລຣນເພື່ອການຊອອກຫາຄລູກຄ້າທີ່ເໝາະສົມ ແລະ ປອກໄພ
          </p>
        </div>
        <div className="w-full flex flex-col gap-10 items-center justify-center">
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
            {/* Step condition */}
            <div className={`${current + 1 === 1 ? "block" : "hidden"}`}>
              <StepCondition
                title={"ເງື່ອນໄຂ"}
                Form={Form}
                Checkbox={Checkbox}
                setIsAacceptTerms={setIsAcceptTerms}
              />
            </div>

            {/* Step personal info*/}
            <div className={`${current + 1 === 2 ? "block" : "hidden"}`}>
              <StepDocument Form={Form} />
            </div>

            {/* Step document upload */}
            <div className={`${current + 1 === 3 ? "block" : "hidden"}`}>
              <StepDocumentImage Form={Form} />
            </div>

            {/* Step Bank account */}
            <div className={`${current + 1 === 4 ? "block" : "hidden"}`}>
              <StepBankAccount Form={Form} Input={Input} />
            </div>

            {/* Step Result */}
            <div
              className={` ${
                current + 1 === steps.length ? "block" : "hidden"
              }`}
            >
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
                  current + 1 === steps.length && "hidden"
                }`}
              >
                {current < steps.length - 1 &&
                  current + 1 != steps.length - 1 && (
                    <Button
                      type="primary"
                      className="bg-primary"
                      block
                      size="large"
                      disabled={current === 0 && !isAcceptTerms ? true : false}
                      onClick={() => next()}
                    >
                      {primaryButtonText()}
                    </Button>
                  )}
                {current + 1 === steps.length - 1 && (
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
            {/* <Button
              type="primary"
              block
              className="bg-primary"
              htmlType="submit"
              size="large"
            >
              TEST ຢືນຢັນ
            </Button> */}
          </Form>
        </div>
      </div>
    </>
  );
};

export default FreelanceSignupPage;
