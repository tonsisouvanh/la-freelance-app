import { tailwindMerge } from "../utils/tailwindMerge";

type Props = {
  className?: string;
  title: string;
};

const SectionHeading = ({ className, title }: Props) => {
  const baseClass =
    "text-color-1 font-bold max-sm:text-2xl text-[24px] mx-auto max-w-fit max-sm:mb-2 mb-4";
  const mergedClass = tailwindMerge(baseClass, className);
  return (
    <>
      <h1 className={mergedClass}>{title}</h1>
    </>
  );
};

export default SectionHeading;
