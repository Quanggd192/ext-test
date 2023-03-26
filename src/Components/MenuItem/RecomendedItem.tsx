import React from "react";

export interface IRecomendedItem {
  name: string;
  type: string;
}
interface Props {
  item: IRecomendedItem;
}
export default function RecomendedItem({ item }: Props) {
  return (
    <div className="h-[170px] bg-[#2E2E2E] py-[20px] px-[15px] text-center cursor-pointer">
      <div className="text-[#FFCC21] text-[22px] md:text-[20px] lg:text-[18px] ml:text-[22px]">
        {item.name}
      </div>
      <div className="h-0 w-[28%] border-b border-solid border-white m-auto my-[15px]"></div>
      <div className="text-white text-[18px]">{item.type}</div>
    </div>
  );
}
