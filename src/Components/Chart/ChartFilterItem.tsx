import React from "react";

interface Props {
  isActive: boolean;
  text: string;
}
export default function ChartFilterItem({ isActive, text }: Props) {
  return (
    <div
      className={`rounded-[11px] cursor-pointer text-[15px] w-[56px] h-[24px] leading-[24px] text-center ${
        !isActive ? "bg-[#FFF] text-[#FFCC21]" : "text-[#FFF] bg-[#FFCC21]"
      }`}
    >
      {text}
    </div>
  );
}
