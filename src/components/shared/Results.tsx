import { Button, Result } from "antd";
import { ResultStatusType } from "antd/es/result";
import { useNavigate } from "react-router-dom";

type Props = {
  status: string;
  title: string;
  subtTitle: string;
};

const Results = ({
  status = "success",
  title = "Successfully Purchased Cloud Server ECS!",
  subtTitle = "Cloud Server",
}: Props) => {
  const navigate = useNavigate();
  return (
    <Result
      status={status as ResultStatusType}
      title={title}
      subTitle={subtTitle}
      extra={[
        <Button
          onClick={() => navigate("/")}
          type="primary"
          className="bg-primary text-white"
          key="buy"
        >
          ກັບໄປທີ່ຫນ້າຫຼັກ
        </Button>,
      ]}
    />
  );
};

export default Results;
