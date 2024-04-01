import { PlusOutlined } from "@ant-design/icons";
import { Upload } from "antd";

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

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <>
      <Form.Item
        name="imageFrontSide"
        label="ຖ່າຍດ້ານຫນ້າເອກະສານ"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload
          name="imageFrontSide"
          action="/upload.do"
          maxCount={1}
          listType="picture-card"
        >
          {uploadButton}
        </Upload>
      </Form.Item>
      <Form.Item
        name="imageBackSide"
        label="ຖ່າຍດ້ານຫລັງເອກະສານ"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload
          name="imageBackSide"
          action="/upload.do"
          maxCount={1}
          listType="picture-card"
        >
          {uploadButton}
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
          listType="picture-card"
        >
          {uploadButton}
        </Upload>
      </Form.Item>
    </>
  );
};

export default StepDocumentImage;
