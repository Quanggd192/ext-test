import React from 'react'

interface Props {
  image: string;
  text: string
}
export default function FoodSquareItem({ image, text }: Props) {
  return (
    <div className='w-full h-auto'>
      <img className='w-full' src={image} />
      <span className='relative block w-[52%] min-w-[120px] text-[15px] h-[32px] leading-[32px] px-[10px] text-white bg-[#FFCC21] top-[-32px]'>{text}</span>
    </div>
  )
}
