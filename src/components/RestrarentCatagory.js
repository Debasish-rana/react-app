import { useState } from "react";
import ItemList from "./ItemList";

const RestrarentCatagory = ({ data, showItem, setshowIndex }) => {
  console.log(setshowIndex);
  const handleClick = () => {
    setshowIndex();
  };

  return (
    <div>
      <div className="bg-lime-100 w-6/12 mx-auto my-4 shadow-xl  p-4 font-medium  ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data.title}({data.itemCards.length})
          </span>
          <span>{showItem === false ? "🔼" : "🔽"}</span>
        </div>
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestrarentCatagory;
