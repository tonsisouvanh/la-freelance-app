import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button
          onClick={() => navigate("/")}
          type="primary"
          className="bg-primary text-white"
        >
          ກັບສູ່ໜ້າຫຼັກ
        </Button>
      }
    />
  );
};

export default NotFoundPage;
