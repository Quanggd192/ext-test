import React from "react";

export interface IMyDiaryItem {
  date: string;
  time: string;
  title: string;
  desc: string;
}
interface Props {
  item: IMyDiaryItem;
}
export default function MyDiaryItem({ item }: Props) {
  return (
    <div className="relative w-full pb-[100%]">
      <div className="absolute top-0 bottom-0 left-0 right-0 border-[2px] border-solid border-[#707070] px-[10px] py-[15px] text-ellipsis overflow-hidden">
        <div className="text-[18px] pb-[10px]">
          <div>{item.date}</div>
          <div>{item.time}</div>
        </div>
        <div className="text-[12px]">
          <div>{item.title}</div>
          <div>{item.desc}</div>
        </div>
      </div>
    </div>
  );
}
