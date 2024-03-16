import { useEffect, useState } from "react";
import Shimer from "./shimerui";
import { MENU_URL } from "../util/constent";
import { MENU_API } from "../util/constent";
import { useParams } from "react-router-dom";

const ResturantMenu = () => {
  const [restMenu, setRestMenu] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const deta = await fetch(MENU_API + resId);
    const json = await deta.json();
    console.log(json);
    setRestMenu(json.data);
  };

  if (restMenu === null) return <Shimer />;

  const { name, cuisines, costForTwo } = restMenu?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(",")}</h2>
      <h3>{costForTwo / 100} For Two</h3>

      <div className="offers">
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
      <div className="menu-card">
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {<img src={MENU_URL + item.card.info.imageId} />}

              <li>{item.card.info.name} </li>
              <li>Price - {item.card.info.price / 100}</li>
              <button>ADD</button>
            </li>
          ))}
        </ul>
      </div>

      {/*
     <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}> {item.card.info.name} - {"Rs."}{item.card.info.price/100}</li>
        ))}
      </ul>
       */}
    </div>
  );
};
export default ResturantMenu;
