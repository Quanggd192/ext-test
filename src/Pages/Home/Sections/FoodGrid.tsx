import React, { useEffect, useState } from "react";
import FoodSquareItem from "Components/GridItem/FoodSquareItem";
import Button from "Components/Button";
import { useLazyGetListFoodQuery } from "Services";
import Loading from "Components/Loading";
import { useSelector } from "react-redux";
interface Item {
  image: string;
  date: string;
  type?: string;
}

export default function FoodGrid() {
  const foodType = useSelector((state: any) => state.food.type);
  const [listFoods, setListFoods] = useState<Array<any>>([]);
  const [page, setPage] = useState(1);
  const [trigger, { data, error, isLoading }] = useLazyGetListFoodQuery();
  useEffect(() => {
    data && setListFoods(data);
    trigger(foodType);
  }, [foodType, data]);
  useEffect(() => {
    if (data?.length) setListFoods([...listFoods].concat(data));
  }, [isLoading, page]);
  const loadMore = () => {
    setPage(page + 1);
    trigger(foodType);
  };
  return (
    <div className="flex flex-wrap">
      {isLoading && (
        <div className="w-full flex justify-center items-center h-[400px]">
          <Loading />
        </div>
      )}
      {data &&
        listFoods.map((item: Item, index: number) => (
          <div
            className="w-[48%] mx-[2.5px] sm:w-[32%] md:w-[24%] my-[-5px]"
            key={`item-${index}`}
          >
            <FoodSquareItem
              text={`${item.date}.${item.type}`}
              image={item.image}
            />
          </div>
        ))}
      <div className="w-full pt-[30px] pb-[60px] text-center">
        <Button onClick={loadMore} className="px-[50px]">
          {!isLoading ? "記録をもっと見る" : <Loading />}
        </Button>
      </div>
    </div>
  );
}
