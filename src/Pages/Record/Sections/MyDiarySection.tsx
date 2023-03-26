import React from 'react'
import MyDiaryItem, { IMyDiaryItem } from 'Components/GridItem/MyDiaryItem'
import Button from 'Components/Button'
const listDiaryItems: Array<IMyDiaryItem> = [
  {
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一部表示されます。",
    desc: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"
  },
  {
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一部表示されます。",
    desc: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"
  },
  {
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一部表示されます。",
    desc: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"
  },
  {
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一部表示されます。",
    desc: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"
  },
  {
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一部表示されます。",
    desc: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"
  },
  {
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一部表示されます。",
    desc: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"
  },
  {
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一部表示されます。",
    desc: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"
  },
  {
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一部表示されます。",
    desc: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"
  }
]
export default function MyDiarySection() {
  return (
    <div>
      <div className="text-[22px]">MY DIARY</div>
      <div className='flex flex-wrap lg:justify-between md:justify-start'>
        {listDiaryItems.map((item: IMyDiaryItem, index: number) => <div key={`my-diary-item-${index}`} className="mb-[20px] md:mr-[5px] mr-[5px] w-[48%] md:w-[32%] lg:w-[24%]">
          <MyDiaryItem item={item} />
        </div>)}
      </div>
      <div className='pt-[10px] pb-[80px] text-center'>
        <Button>自分の日記をもっと見る</Button>
      </div>
    </div>
  )
}
