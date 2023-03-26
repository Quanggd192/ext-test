import React from "react";
import { ReactComponent as IconClose } from "assets/icons/icon_close.svg";
interface Props {
  hidden: boolean;
  onClose: any;
}
const listItems = [
  { text: "自分の記録", link: "/my_record/#my_record" },
  { text: "体重グラフ", link: "/my_record/#body_record_chart" },
  { text: "目標", link: "/my_record/#my_diary" },
  { text: "選択中のコース", link: "#" },
  { text: "コラム一覧", link: "/my_record/#column_list" },
  { text: "設定", link: "#" },
];
export default function ExtendMenu({ hidden, onClose }: Props) {
  return (
    <div className="relative w-[32px]">
      <div
        className={
          hidden ? "hidden" : "" + "absolute w-[280px] right-0 top-[-15px]"
        }
      >
        <div className="flex h-[25px]">
          <div className="w-[90%]"></div>
          <IconClose
            onClick={onClose}
            className="w-[25px] h-[25px] cursor-pointer"
          />
        </div>
        <div className="text-[18px] bg-[#777]">
          {listItems.map((item: any, index: number) => (
            <a
              key={`extend-item-${index}`}
              className="block w-full h-[72px] leading-[72px] px-[20px] border-b border-solid border-[#888]"
              onClick={onClose}
              href={item.link}
            >
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
