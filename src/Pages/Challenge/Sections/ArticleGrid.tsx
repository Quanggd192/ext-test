import React from 'react'
import ArticleItem, { IArticle } from 'Components/GridItem/ArticleItem'
import Button from 'Components/Button'
import data from './data.json'

const {listArticleItems} = data
export default function ArticleGrid() {
  return (
    <div className='flex flex-wrap md:justify-between sm:justify-start justify-between py-[50px]'>
      {listArticleItems.map((item: IArticle, index: number) => <div className='w-[48%] sm:w-[32%] mr-0 sm:mr-[5px] md:mr-0 md:w-[24%] mb-[20px]' key={`article-item-${index}`}>
        <ArticleItem item={item} />
      </div>)}
      <div className='w-full text-center pt-[30px]'>
        <Button className='px-[50px]'>コラムをもっと見る</Button>
      </div>
    </div>
  )
}
