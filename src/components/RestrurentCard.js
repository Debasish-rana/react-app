import { CDN_URL } from "../util/constent";
import { useContext } from "react";
import { UserContext } from "../util/UserContext";

const RestrurentCard = (props) => {
  const {logedInUser} = useContext(UserContext)
  

  const { resDeta } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    locality,
    costForTwo,
    sla,
  } = resDeta?.info; //optional chaining


  return (
    <div className="res-card m-4 p-4  w-[220px] h-[405px]  rounded-lg shadow-xl bg-slate-200 hover:bg-slate-300 ">
      <img className="image w-[250px] h-[120px] rounded-lg shadow-xl" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-2">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{locality}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
      <h4>User: {logedInUser}</h4>
    </div>
  );
};


//only use anhance any c 

export  const restrurentOffersInCard =(RestrurentCard)=>{
return(props)=>{
  return(
    <div className="offers">
      <label className="bg-black text-white mx-5 my-1 p-1 rounded-xl text-xs absolute">Offers available</label>     
    <RestrurentCard {...props}/>
    </div>
  )
}
}

export default RestrurentCard;
