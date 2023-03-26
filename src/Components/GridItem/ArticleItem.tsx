import React from "react";

export interface IArticle {
  date: string;
  time: string;
  desc: string;
  hashtags: Array<string>;
  image: string;
}
interface Props {
  item: IArticle;
}
export default function ArticleItem({ item }: Props) {
  return (
    <div className="w-full">
      <img src={item.image} className="w-full" alt="" />
      <div className="flex justify-between items-center relative top-[-24px] text-white text-normal h-[24px] w-[55%] min-w-[130px] px-[10px] bg-[#FFCC21]">
        <div>{item.date}</div>
        <div>{item.time}</div>
      </div>
      <div className="mt-[-14px]">
        <div className="text-normal">{item.desc}</div>
        <div className="flex text-[#FF963C] text-sm pt-[5px]">
          {item.hashtags.map((text: string, index: number) => (
            <div key={`hashtag-${index}`} className="cursor-pointer mr-[10px]">
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
