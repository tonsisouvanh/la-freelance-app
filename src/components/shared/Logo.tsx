import { logo } from "../../assets";
import { tailwindMerge } from "../../utils/tailwindMerge";

type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  const baseClass = "w-full h-full";
  const mergedClass = tailwindMerge(baseClass, className);
  return (
    <div className={mergedClass}>
      <img className="w-full h-full object-cover" src={logo} alt="" />
    </div>
  );
};

export default Logo;
