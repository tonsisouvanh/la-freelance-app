import logo from "../../assets/logo.svg";

type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  return (
    <>
      <img className={className} src={logo} alt="" />
    </>
  );
};

export default Logo;
