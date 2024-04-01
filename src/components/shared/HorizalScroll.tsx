import React from "react";

interface HorizalScrollProps {
  children: React.ReactNode;
  className?: string;
}

const HorizalScroll: React.FC<HorizalScrollProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`flex overflow-x-scroll hide-scroll-bar ${
        className && className
      }`}
    >
      <div className="flex flex-nowrap gap-4">{children}</div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n",
        }}
      />
    </div>
  );
};

export default HorizalScroll;
