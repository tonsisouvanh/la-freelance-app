import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const CtaSection = (props: Props) => {
  return (
    <section className="rounded-t-[20px] bg-color-1/10 py-[56px]">
      <div className="mx-auto max-w-fit space-y-[16px]">
        <h4 className="text-[40px] font-bold text-color-1">
          Freelance services at your
          <span className="text-[#FFC700]"> fingertips!</span>
        </h4>
        <div className="mx-auto max-w-fit">
          <Link to="signin">
            <Button
              type="primary"
              className="flex items-center justify-center rounded-full bg-color-1 px-[40px] py-[20px] text-[16px] font-medium shadow-md shadow-black/30"
            >
              ສະໝັກເລີຍ
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
