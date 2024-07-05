import { Select } from "antd";
import { FreelanceSignupFieldType } from "../../type";
type Props = {
  Form: any;
  Input: any;
};

const StepBankAccount = ({ Form, Input }: Props) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <Form.Item<FreelanceSignupFieldType>
        label="ເລືອກທະນາຄານ"
        name="bank"
        rules={[{ required: true, message: "Please input" }]}
      >
        <Select
          options={[
            {
              value: "bcelbank",
              label: "ທະນາຄານ ການຄ້າຕ່າງປະເທດລາວ ມະຫາຊົນ",
            },
            {
              value: "jdbbank",
              label: "ທະນາຄານຮ່ວມພັດທະນາ",
            },
            {
              value: "ldbbank",
              label: "ທະນາຄານພັດທະນາລາວ",
            },
          ]}
          size="large"
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item<FreelanceSignupFieldType>
        label="ປ້ອນຊື່ບັນຊີ"
        name="accountName"
        rules={[
          {
            required: true,
            message: "Please input",
          },
        ]}
      >
        <Input className="" size="large" />
      </Form.Item>
      <Form.Item<FreelanceSignupFieldType>
        label="ປ້ອນເລກບັນຊີ"
        name="accountNumber"
        rules={[
          {
            required: true,
            message: "Please input",
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>
    </>
  );
};

export default StepBankAccount;
