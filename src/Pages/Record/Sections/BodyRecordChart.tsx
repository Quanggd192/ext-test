import React, {useState} from 'react'
import LineChart from 'Components/Chart/LineChart'
import ChartFilterItem from 'Components/Chart/ChartFilterItem'
import Loading from 'Components/Loading'
import { useGetChartDataQuery } from 'Services'

const listChartFilterItems = [
  "日", "週", "月", "年"
]
export default function BodyRecordChart() {
  const [active, setActive] = useState(0)
  const chartTypes = ["day", "month", "week", "year"]
  const { data, error, isLoading } = useGetChartDataQuery(chartTypes[active])
  return (
    <div className='w-[100%] bg-[#414141] max-h-[600px] px-[30px] py-[20px]'>
      <div className='flex text-white font-[400] '>
        <div className='text-[15px] pr-[40px]'>BODY<br/> RECORD</div>
        <div className='text-[22px]'>2021.05.21</div>
      </div>
      <div className='max-h-[400px] py-[20px]'>
        {data && <LineChart data={data} />}
        {isLoading && <div className='min-h-[300px] flex items-center justify-center'><Loading /></div>}
      </div>
      <div className='flex pb-[10px]'>
        {listChartFilterItems.map((item: string, index: number) => <div className='sm:mr-[20px] mr-[10px]' onClick={() => setActive(index)} key={`chart-filter-${index}`}><ChartFilterItem isActive={index===active} text={item} /></div>)}
      </div>
    </div>
  )
}
