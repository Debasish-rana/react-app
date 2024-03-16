import { CDN_URL } from "../util/constent"

const RestrurentCard = (props) => {
          const { resDeta } = props;
        
          const { cloudinaryImageId, name, cuisines, avgRating, locality, costForTwo, sla } =
            resDeta?.info;  //optional chaining
        
          return (
            <div className="res-card" style={{ backgroundColor: "#DDDAD3" }}>
              <img
                className="image"
                src={
                  CDN_URL +
                  resDeta.info.cloudinaryImageId
                }
              />
              <h3>{name}</h3>
              <h4>{cuisines.join(", ")}</h4>
              <h4>{avgRating}</h4>
              <h4>{locality}</h4>
              <h4>{costForTwo}</h4>
              <h4>{sla?.slaString}</h4>
            </div>
          );
        };

        export default RestrurentCard;