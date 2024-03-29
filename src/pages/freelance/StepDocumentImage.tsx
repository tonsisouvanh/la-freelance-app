import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";

type Props = {
  Form: any;
};

const StepDocumentImage = ({ Form }: Props) => {
  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  return (
    <>
      <Form.Item
        name="imageFrontSide"
        label="ຖ່າຍດ້ານຫນ້າເອກະສານ  " // Front Side of Document
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload
          name="imageFrontSide"
          action="/upload.do"
          maxCount={1}
          listType="picture"
        >
          <Button icon={<UploadOutlined />}>Click to upload front side</Button>
        </Upload>
      </Form.Item>
      <Form.Item
        name="imageBackSide"
        label="ຖ່າຍດ້ານຫລັງເອກະສານ  " // Back Side of Document
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload
          name="imageBackSide"
          action="/upload.do"
          maxCount={1}
          listType="picture"
        >
          <Button icon={<UploadOutlined />}>Click to upload back side</Button>
        </Upload>
      </Form.Item>
      <Form.Item
        name="imageProof"
        label="ຖ່າຍຄູ່ກັບເອກະສານ"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload
          name="imageProof"
          action="/upload.do"
          maxCount={1}
          listType="picture"
        >
          <Button icon={<UploadOutlined />}>Click to upload proof</Button>
        </Upload>
      </Form.Item>
    </>
  );
};

export default StepDocumentImage;
