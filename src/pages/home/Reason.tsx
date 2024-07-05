import { tailwindMerge } from "../../utils/tailwindMerge";
import { platformServices } from "../../const";
type Props = {
  className?: string;
};
const Reason = ({ className }: Props) => {
  const baseClass = "space-y-10";
  const mergedClass = tailwindMerge(baseClass, className);
  return (
    <>
      <section className={mergedClass}>
        <div className="mx-auto max-w-fit space-y-[8px] text-center">
          <h4 className="mx-auto max-w-fit text-[24px] font-bold text-color-7 max-sm:mb-2 max-sm:text-2xl">
            ເປັນຫຍັງຕ້ອງເລືອກໃຊ້
            <span className="text-color-1"> LA-FREELANCE ?</span>
          </h4>
          <p className="text-[20px] text-color-2">
            ເພາະຟີຣແລນສ໌ສາມາດນຳເອົາໄອເດຍຂອງທ່ານອອກມາສ້າງໃຫ້ເປັນຈິງດ້ວຍຟີຣແລນສ໌ມືອາຊີບ
          </p>
        </div>
        <div className="grid grid-cols-3 justify-items-center">
          {platformServices.map((item) => (
            <div
              key={item.id}
              className="w-full max-w-xs space-y-[16px] rounded-[16px] bg-color-8 p-8 shadow-2xl shadow-color-2/20"
            >
              {/* <div
              key={item.id}
              className="w-full max-w-xs space-y-[16px] rounded-[16px] bg-color-8 p-8 shadow-color-8 shadow-2xl drop-shadow-2xl"
            > */}
              <img
                src={item.imageUrl}
                className="h-auto max-w-[80px] object-cover"
                alt=""
              />
              <article className="space-y-[8px]">
                <h1 className="whitespace-nowrap text-[20px] font-bold text-color-7">
                  {item.title}
                </h1>
                <p className="text-[16px] text-color-7">{item.description}</p>
              </article>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Reason;
