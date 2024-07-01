import { logo } from "../../assets";

type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  return (
    <>
      <img className={className && className} src={logo} alt="" />
    </>
  );
};

export default Logo;
