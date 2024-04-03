import { Layout } from "antd";
import Logo from "../shared/Logo";

const { Footer: Footers } = Layout;

type Props = {
  className?: string;
};

const Footer = ({ className }: Props) => {
  return (
    <Footers
      className={`flex pb-[4rem] flex-col justify-center items-center ${
        className && className
      }`}
    >
      LA-FREELANCE ©{new Date().getFullYear()} Created by LAF
      <Logo className="w-28" />
    </Footers>
  );
};

export default Footer;
