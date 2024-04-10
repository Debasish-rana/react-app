import Shimer from "./shimerui";
import { MENU_URL } from "../util/constent";
import { useParams } from "react-router-dom";
import useRestrurentMenu from "../util/useRestMenuHooks";
import RestrarentCatagory from "./RestrarentCatagory";
import { useState } from "react";
const ResturantMenu = () => {
  //const [restMenu, setRestMenu] = useState(null);

  const { resId } = useParams();

  const restMenu = useRestrurentMenu(resId);
  
  const [showIndex, setShowIndex] = useState(0);

  if (restMenu === null) return <Shimer />;
  
  const { name, cuisines, costForTwo } = restMenu?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  //console.log(itemCards);

  const catagory =
    restMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
  console.log(catagory);
  
  return (
    <div className="menu">
      <h1 className="text-4xl m-2 font-bold flex justify-around">{name}</h1>
      <h2 className="text-2xl m-2 flex justify-around font-bold">
        {cuisines.join(",")} - {costForTwo / 100} For Two
      </h2>

      <div className="offers flex m-8 mx-[400px] p-4 justify-between border-y-4">
        <div>
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/Store_Assets/Icons/OfferIconCart" />
          20% OFF UPTO ₹50
        </div>
        <div>
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/MARKETING_BANNERS/IMAGES/OFFERS/2024/2/29/483c8215-9e33-408d-9820-d404f89a9c45_ICICI.png" />
          FLAT₹50 OFF
        </div>
        <div>
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/MARKETING_BANNERS/IMAGES/OFFERS/2024/2/29/312fbf04-dafc-41e0-a06d-3ef2e3955703_Citi.png" />
          15% OFF UPTO ₹300
        </div>
      </div>
      <div className="text-center">
        {catagory.map((catagory, index) => (
         
          <RestrarentCatagory
            data={catagory.card.card}
            key={catagory.card.card.title}
            showItem={index === showIndex ? true :false}
            setshowIndex  = {()=>setShowIndex(index)}
           
          />
         
        ))}
      </div>
    </div>
  );
};
export default ResturantMenu;
