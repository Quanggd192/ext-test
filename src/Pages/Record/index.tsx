import React from 'react'
import Footer from 'Components/Footer'
import Navbar from 'Components/Navbar/Navbar'
import ListMainTopic from './Sections/ListMainTopic'
import BodyRecordChart from './Sections/BodyRecordChart'
import MyExerciseSection from './Sections/MyExerciseSection'
import MyDiarySection from './Sections/MyDiarySection'
export default function RecordPage() {
  return (
    <div>
    <Navbar />
    <div className='app-container min-h-[75vh]'>
      <div className='py-[40px] pt-[60px]' id="my_record">
        <ListMainTopic />
      </div>
      <div id="body_record_chart">
        <BodyRecordChart />
      </div>
      <div className='py-[40px]' id="column_list">
        <MyExerciseSection />
      </div>
      <div id="my_diary">
        <MyDiarySection />
      </div>
    </div>
    <Footer />
  </div>
  )
}
