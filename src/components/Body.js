import RestrurentCard from "./RestrurentCard";
//import resList from "../util/resList";
import { useState, useEffect } from "react";
import Shimer from "./shimerui";
import { Link } from "react-router-dom";

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

  return listofrestrurents.length === 0 ? (
    <Shimer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              //for geathering deta into search box
              setSearchText(e.target.value);
            }}
          />
          <button
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
          className="filter-btn"
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
      <div className="res-container">
        {filteredList.map((resturant) => (
          <Link
            className="text-style"
            key={resturant.info.id}
            to={"/restrurents/" + resturant.info.id}
          >
            <RestrurentCard resDeta={resturant} />
          </Link>

          //<RestrurentCard key ={resturant.info.id} resDeta={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
