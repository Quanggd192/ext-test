import React from 'react'
import mainPhoto from 'assets/images/dashboard/main_photo.png'
import LineChart from 'Components/Chart/LineChart'
import { useGetChartDataQuery } from 'Services'

export default function BannerChart() {
  const { data, error, isLoading } = useGetChartDataQuery('month')
  return (
    <div className='flex w-full'>
      <img src={mainPhoto} className='w-[40%]'/>
      <div className='w-[60%] max-h-[450px] bg-[#2E2E2E] flex justify-center py-[20px]'>
        {data && <LineChart data={data} />}
      </div>
    </div>
  )
}
