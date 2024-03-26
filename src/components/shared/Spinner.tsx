import { Spin } from "antd";

const Spinner = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Spin size="large" />
    </div>
  );
};

export default Spinner;
