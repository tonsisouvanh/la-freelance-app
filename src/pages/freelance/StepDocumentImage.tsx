import {
  UploadOutlined,
  LoadingOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Upload } from "antd";
import { useState } from "react";
import type { GetProp, UploadProps } from "antd";

type Props = {
  Form: any;
};

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const StepDocumentImage = ({ Form }: Props) => {
  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  // const handleChange: UploadProps["onChange"] = (info) => {
  //   if (info.file.status === "uploading") {
  //     setLoading(true);
  //     return;
  //   }
  //   if (info.file.status === "done") {
  //     // Get this url from response in real world.
  //     getBase64(info.file.originFileObj as FileType, (url) => {
  //       setLoading(false);
  //       setImageUrl(url);
  //     });
  //   }
  // };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
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
          {/* <Button icon={<UploadOutlined />}>Click to upload front side</Button> */}
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
