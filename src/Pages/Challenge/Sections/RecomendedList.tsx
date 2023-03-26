import React from 'react'
import RecomendedItem, { IRecomendedItem } from 'Components/MenuItem/RecomendedItem'

const listRecomendedItems: Array<IRecomendedItem> = [
  {
    name: 'RECOMMENDED COLUMN',
    type: 'オススメ'
  },
  {
    name: 'RECOMMENDED DIET',
    type: 'ダイエット'
  },
  {
    name: 'RECOMMENDED BEAUTY',
    type: '美容'
  },
  {
    name: 'RECOMMENDED HEALTH',
    type: '健康'
  },
  
]
export default function RecomendedList() {
  return (
    <div className='flex flex-wrap justify-between'>
      {listRecomendedItems.map((item: IRecomendedItem, index: number) =><div className='lg:w-[23%] w-full md:w-[31%] sm:w-[47%] mb-[15px]' key={`recomended-menu-${index}`}>
        <RecomendedItem item={item} />
      </div>)}
    </div>
  )
}
