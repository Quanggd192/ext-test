import React from 'react'
import HexagonMenuItem from 'Components/MenuItem/HexagonMenuItem'
import { ReactComponent as IconKnife  } from 'assets/icons/icon_knife.svg'
import { ReactComponent as IconCup  } from 'assets/icons/icon_cup.svg'
import { useDispatch } from 'react-redux'
import { setType } from 'Redux/features/food/foodSlice'

export default function HexagonMenu() {
  const listHexagonItems = [
    {
      text: "Morning",
      icon: <IconKnife />
    },
    {
      text: "Lunch",
      icon: <IconKnife />
    },
    {
      text: "Dinner",
      icon: <IconKnife />
    },
    {
      text: "Snack",
      icon: <IconCup />
    }
  ]
  const dispatch = useDispatch()
  return (
    <div className='flex md:flex-no-wrap flex-wrap items-center justify-center my-[30px]'>
      {listHexagonItems.map((item:any, index:number) => <div onClick={() => dispatch(setType(item.text.toLowerCase()))}><HexagonMenuItem className='mx-[20px] my-[5px]' text={item.text} icon={item.icon} /></div>)}
    </div>
  )
}
