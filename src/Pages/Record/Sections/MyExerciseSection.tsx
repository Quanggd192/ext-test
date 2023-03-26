import React from 'react'
import MyExerciseItem, {ExItemProps} from 'Components/TableItems/MyExerciseItem'

const listExItems:Array<ExItemProps> = [
  {
    exName: "家事全般（立位・軽い）",
    cal: "26kcal",
    time: "10 min"
  },
  {
    exName: "家事全般（立位・軽い）",
    cal: "26kcal",
    time: "10 min"
  },
  {
    exName: "家事全般（立位・軽い）",
    cal: "26kcal",
    time: "10 min"
  },
  {
    exName: "家事全般（立位・軽い）",
    cal: "26kcal",
    time: "10 min"
  },
  {
    exName: "家事全般（立位・軽い）",
    cal: "26kcal",
    time: "10 min"
  },
  {
    exName: "家事全般（立位・軽い）",
    cal: "26kcal",
    time: "10 min"
  },
  {
    exName: "家事全般（立位・軽い）",
    cal: "26kcal",
    time: "10 min"
  },
  {
    exName: "家事全般（立位・軽い）",
    cal: "26kcal",
    time: "10 min"
  },
  {
    exName: "家事全般（立位・軽い）",
    cal: "26kcal",
    time: "10 min"
  },
  {
    exName: "家事全般（立位・軽い）",
    cal: "26kcal",
    time: "10 min"
  },
]
export default function MyExerciseSection() {
  return (
    <div className='px-[30px] py-[20px] bg-darken'>
      <div className='flex text-white font-[400] w-full pb-[10px]'>
        <div className='text-normal pr-[40px]'>MY<br/> EXCERSIE</div>
        <div className='text-[22px]'>2021.05.21</div>
        </div>
        <div className='flex flex-wrap justify-between max-h-[350px] overflow-y-scroll custom-scroll'>
          <div className='sm:w-1/2 w-full pr-[40px]'>
            {listExItems.map((item: ExItemProps, index: number) => <MyExerciseItem exName={item.exName} cal={item.cal} time={item.time}/>)}
          </div>
          <div className='sm:w-1/2 w-full pr-[30px]'>
          {listExItems.map((item: ExItemProps, index: number) => <MyExerciseItem exName={item.exName} cal={item.cal} time={item.time}/>)}
          </div>
        </div>
    </div>
  )
}
