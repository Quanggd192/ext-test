import React from 'react'
import Navbar from 'Components/Navbar/Navbar'
import BannerChart from './Sections/BannerChart'
import HexagonMenu from './Sections/HexagonMenu'
import FoodGrid from './Sections/FoodGrid'
import Footer from 'Components/Footer'
export default function Home() {
  return (
    <div>
      <Navbar />
      <BannerChart />
      <div className='app-container'>
        <HexagonMenu />
        <FoodGrid/>
      </div>
      <Footer />
    </div>
  )
}
