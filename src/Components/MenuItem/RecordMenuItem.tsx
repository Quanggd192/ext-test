import React from "react";

export interface RMenuItem {
  image: string;
  name: string;
  desc: string;
}
interface Props {
  item: RMenuItem;
}
export default function RecordMenuItem({ item }: Props) {
  return (
    <div className="record-menu-item">
      <img src={item.image} className="w-full mix-darken" />
      <div className="relative w-full h-0 top-[-160px] sm:top-[-140px] lg:top-[-140px] ml:top-[-160px]">
        <div className="text-[#FFCC21] text-[25px] md:text-[22px] ml:text-[25px] text-center">
          {item.name}
        </div>
        <div className="w-[65%] bg-[#FF963C] text-white h-[24px] leading-[24px] text-center mt-[10px] m-auto text-md">
          {item.desc}
        </div>
      </div>
    </div>
  );
}
