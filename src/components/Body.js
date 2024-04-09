import RestrurentCard, { restrurentOffersInCard } from "./RestrurentCard";
//import resList from "../util/resList";
import { useState, useEffect } from "react";
import Shimer from "./shimerui";
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlinesStatus";

const Body = () => {
  //Local state variable - super powerful variable
  const [listofrestrurents, setresList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Whenever state variable updates, react triggers a reconcilation cycle(re-renders the component)

  console.log("body render");
  //normal js variable
  //let listofrestrurents;
  // 2 nd const [listofrestrurents, setlistofrestrurents] = useState(resList);

  useEffect(() => {
    fetchDeta();
  }, []);

  const fetchDeta = async () => {
    const deta = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await deta.json();

    console.log(json);

    //optional chaining

    setresList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );

    setFilteredList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  //conditional rendaring

  //if(listofrestrurents.length === 0){
  //  return <Shimer />
  //}

  const onlineStatus = useOnlineStatus();

  const CardOffers = restrurentOffersInCard(RestrurentCard);

  if (onlineStatus === false) {
    return (
      <div className="online-status">
        <h1>Looks like offline!! pleace check your internet connection.</h1>
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>
    );
  }

  return listofrestrurents.length === 0 ? (
    <Shimer />
  ) : (
    <div className="body">
      <div className="filter flex justify-between">
        <div className="search m-2 p-2">
          <input
            type="text"
            className="search-box border border-black rounded-lg mx-2 p-1 "
            value={searchText}
            onChange={(e) => {
              //for geathering deta into search box
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-300  w-[120px] p-2 rounded-2xl "
            onClick={() => {
              const filteredRestro = listofrestrurents.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filteredRestro);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn p-2 h-11 m-2 w-[150] bg-green-300 rounded-2xl"
          onClick={() => {
            const filteredList = listofrestrurents.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredList(filteredList);
          }}
        >
          Top Restrurent
        </button>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredList.map((resturant) => (
          <Link
            className="text-style"
            key={resturant.info.id}
            to={"/restrurents/" + resturant.info.id}
          >
            {resturant.info.aggregatedDiscountInfoV3 ? (
              <CardOffers resDeta={resturant} />
            ) : (
              <RestrurentCard resDeta={resturant} />
            )}
            
          </Link>

          //<RestrurentCard key ={resturant.info.id} resDeta={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
