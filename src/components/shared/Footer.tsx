import { Layout } from "antd";
import Logo from "./Logo";

const { Footer: Footers } = Layout;

type Props = {};

const Footer = (props: Props) => {
  return (
    <Footers className="flex flex-col justify-center items-center">
      LA-FREELANCE ©{new Date().getFullYear()} Created by LAF
      <Logo />
    </Footers>
  );
};

export default Footer;
