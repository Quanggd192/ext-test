import React from 'react'

export interface ExItemProps {
  exName: string;
  cal: string;
  time: string;
}
export default function MyExerciseItem({exName, cal, time}: ExItemProps) {
  return (
    <div className='flex justify-between w-full font-[400] border-b border-solid border-[#777] py-[5px]'>
      <div className='text-normal'>
        <span className='block w-[5px] h-[5px] rounded-[3px] bg-white relative top-[10px]'></span>
        <div className='inline-block ml-[10px]'>
          <div className='text-white'>{exName}</div>
          <div className='text-[#FFCC21]'>{cal}</div>
        </div>
      </div>
      <div className='text-[18px] text-[#FFCC21] pt-[5px]'>{time}</div>
    </div>
  )
}
