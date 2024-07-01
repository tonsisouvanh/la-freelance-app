import SectionHeading from "../../components/SectionHeading";
import { hiringGuide } from "../../const";
import { tailwindMerge } from "../../utils/tailwindMerge";

type Props = {
  className?: string;
};

const HowToStartHiring = ({ className }: Props) => {
  const baseClass = "space-y-10";
  const mergedClass = tailwindMerge(baseClass, className);
  return (
    <section className={mergedClass}>
      <div className="max-w-fit mx-auto text-center">
        <SectionHeading className="" title="ເລີ່ມຕົ້ນງ່າຍໆ" />
      </div>
      <div className="grid max-md:grid-cols-2 grid-cols-4 gap-10">
        {hiringGuide.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-start items-center gap-3"
          >
            <div className="w-24 h-24">
              <img
                className="w-full h-full object-contain"
                src={item.imageUrl}
                alt=""
              />
            </div>
            <h1 className="text-xl max-sm:text-base text-center">
              {item.title}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowToStartHiring;
