import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
import { tailwindMerge } from "../../utils/tailwindMerge";
type Props = {
  value?: number;
  text?: string;
  color?: string;
  iconStyle?: string;
  className?: string;
};
const Rating = ({ value = 0, text, color, iconStyle, className }: Props) => {
  const baseClass = "flex items-center gap-1";
  const mergedClass = tailwindMerge(baseClass, className);
  return (
    <>
      <div className={mergedClass}>
        <span className={iconStyle} style={{ color }}>
          {value >= 1 ? (
            <FaStar />
          ) : value >= 0.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span className={iconStyle} style={{ color }}>
          {value >= 2 ? (
            <FaStar />
          ) : value >= 1.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span className={iconStyle} style={{ color }}>
          {value >= 3 ? (
            <FaStar />
          ) : value >= 2.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span className={iconStyle} style={{ color }}>
          {value >= 4 ? (
            <FaStar />
          ) : value >= 3.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span className={iconStyle} style={{ color }}>
          {value >= 5 ? (
            <FaStar />
          ) : value >= 4.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span className="ml-2">{text && text}</span>
      </div>
    </>
  );
};

Rating.defaultProps = {
  color: "#222222",
  iconStyle: "",
};

export default Rating;
