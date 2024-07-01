import { TypeAnimation } from "react-type-animation";

const TyperText: React.FC = () => {
  const texts = [
    "ຕາກ້ອງ & ຖ່າຍງານ",
    1000,
    "ແປພາສາ & ເອກະສານ",
    1000,
    "ພາກສຽງ & ພາກໜັງ",
    1000,
    "Graphic & Design",
  ];
  return (
    <div className="text-center gap-3">
      <h1 className="text-2xl lg:text-4xl text-white font-bold text-center justify-center items-center">
        ເຮົາມີຟີຣແລນສ໌ ມືອາຊີບດ້ານ...
      </h1>
      <div>
        <div>
          <TypeAnimation
            sequence={texts}
            wrapper="span"
            speed={45}
            style={{
              display: "inline-block",
              fontWeight: "bold",
            }}
            className="text-white my-4 text-4xl lg:text-6xl"
            repeat={Infinity}
          />
        </div>
        <h1 className="mt-5 text-xl lg:text-2xl text-white">
          ທີ່ພ້ອມປ່ຽນໄອເດຍເຈົ້າເປັນຈິງ
        </h1>
      </div>
    </div>
  );
};

export default TyperText;
