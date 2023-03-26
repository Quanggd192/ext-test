import React from "react";
import RecordMenuItem, { RMenuItem } from "Components/MenuItem/RecordMenuItem";
import bodyRecordImage from "assets/images/record_menu/body_record.png";
import excerciseImage from "assets/images/record_menu/excercise.png";
import myDiaryImage from "assets/images/record_menu/my_diary.png";

const listItems: Array<RMenuItem> = [
  {
    image: bodyRecordImage,
    name: "BODY RECORD",
    desc: "自分のカラダの記録",
  },
  {
    image: excerciseImage,
    name: "MY EXCERCISE",
    desc: "自分の運動の記録",
  },
  {
    image: myDiaryImage,
    name: "MY DIARY",
    desc: "自分の日記",
  },
];
export default function ListMainTopic() {
  return (
    <div className="flex flex-wrap items-center justify-center sm:justify-between">
      {listItems.map((item: RMenuItem, index: number) => (
        <RecordMenuItem item={item} />
      ))}
    </div>
  );
}
