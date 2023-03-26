import React from 'react'
import Navbar from 'Components/Navbar/Navbar'
import Footer from 'Components/Footer'
import RecomendedList from './Sections/RecomendedList'
import ArticleGrid from './Sections/ArticleGrid'
export default function ChalengePage() {
  return (
    <div>
      <Navbar />
      <div className='app-container py-[50px]'>
        <div>
          <RecomendedList />
        </div>
        <div>
          <ArticleGrid />
        </div>
      </div>
      <Footer />
    </div>
  )
}
