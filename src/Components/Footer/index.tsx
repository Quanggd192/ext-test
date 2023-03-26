import React from 'react'
import { Link } from 'react-router-dom'
const listFooterItems = [
  {
    text: "会員登録",
    link: "/#"
  },
  {
    text: "運営会社",
    link: "/#"
  },
  {
    text: "利用規約",
    link: "/#"
  },
  {
    text: "個人情報の取扱について",
    link: "/#"
  },
  {
    text: "特定商取引法に基づく表記",
    link: "/#"
  },
  {
    text: "お問い合わせ",
    link: "/#"
  }
]
export default function Footer() {
  return (
    <div className='bg-[#414141] h-auto sm:h-[128px] w-screen px-[20px] md:px-[100px] py-[20px] flex sm:flex-nowrap flex-wrap items-center text-white'>
      {listFooterItems.map((item, index) => <Link to={item.link} className='pr-[30px]'>{item.text}</Link>)}
    </div>
  )
}
