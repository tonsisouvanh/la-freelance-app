import { DatePicker, Select } from "antd";
import { FreelanceSignupFieldType } from "../../type";

type Props = { Form: any };

const StepDocument = ({ Form }: Props) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <Form.Item<FreelanceSignupFieldType>
        label="ປະເພດເອກະສານ"
        name="documentType"
        rules={[{ required: true, message: "Please input" }]}
      >
        <Select
          options={[
            { value: "personIdCard", label: "ບັດປະຈຳໂຕ" },
            { value: "passport", label: "ພາສປອດ" },
          ]}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item<FreelanceSignupFieldType>
        label="ວັນເດືອນປີເກີດ"
        name="dob"
        rules={[{ required: true, message: "Please input" }]}
      >
        <DatePicker className="w-full" size="large" placeholder="YYYY-MM-DD" />
      </Form.Item>
    </>
  );
};

export default StepDocument;
