import { Button } from "antd";
import { lahiring } from "../../assets";
import { tailwindMerge } from "../../utils/tailwindMerge";
import { GoArrowRight } from "react-icons/go";
import { hiringSteps } from "../../const";

type Props = {
  className?: string;
};

const HowToStartHiring = ({ className }: Props) => {
  const baseClass = "space-y-10";
  const mergedClass = tailwindMerge(baseClass, className);
  return (
    <section className={mergedClass}>
      <div className="mx-auto max-w-fit space-y-[8px] text-center">
        <h4 className="mx-auto max-w-fit text-[24px] font-bold text-color-7 max-sm:mb-2 max-sm:text-2xl">
          ເລີ່ມຈ້າງວຽກງ່າຍໆກັບ
          <span className="text-color-1"> LA-FREELANCE</span>
        </h4>
        <p className="text-[20px] text-color-2">
          ເພາະຟີຣແລນສ໌ສາມາດນຳເອົາໄອເດຍຂອງທ່ານອອກມາສ້າງໃຫ້ເປັນຈິງດ້ວຍຟີຣແລນສ໌ມືອາຊີບ
        </p>
      </div>
      <div className="grid grid-cols-2 justify-items-center max-md:grid-cols-1">
        <article className="flex flex-col">
          <div className="flex flex-1 flex-col justify-center">
            {hiringSteps.map((item, index) => (
              <div key={item.id} className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-color-8">
                      <span className="text-[24px] font-bold text-color-1">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  {index !== hiringSteps.length - 1 && (
                    <div className="h-full w-px bg-gray-300"></div>
                  )}
                </div>
                <div className="pb-[53px] pt-1">
                  <p className="text-color-9 text-[24px]">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-[10px]">
            <p className="text-[20px]">
              ສ້າງໄອເດຍຂອງທ່ານໃຫ້ເປັນຈິງດ້ວຍຟີຣແລນສ໌
            </p>
            <Button
              className="border-none px-0 text-[24px] font-semibold text-color-1 shadow-none"
              icon={<GoArrowRight size={25} className="font-bold" />}
              type="default"
              iconPosition={"end"}
            >
              ສະໝັກເລີຍ
            </Button>
          </div>
        </article>
        <div className="relative h-full max-h-[670px] w-full max-w-[520px]">
          <div className="absolute right-[-50px] top-[40px] z-[-1] h-full max-h-[670px] w-full max-w-[520px] rounded-[10px] bg-color-1/10"></div>
          <img
            src={lahiring}
            className="h-full w-full rounded-[10px] object-cover"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default HowToStartHiring;
