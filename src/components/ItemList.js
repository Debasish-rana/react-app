import { CDN_URL } from "../util/constent";

const ItemList = ({ items }) => {
  return (
    <div className="m-5">
      {items.map((menu) => (
        <div
          className="m-3 p-4 text-left bg-slate-200 rounded-xl shadow-2xl border-b-4"
          key={menu.card.info.id}
        >
          <span className="font-bold">{menu.card.info.name}</span>
          <div className="flex justify-between">
            <div>
              <span className="font-semibold">
                ₹ {menu.card.info.price / 100}
              </span>

              <br></br>
              <span>{menu.card.info.ratings.aggregatedRating.rating} Star</span>
              <p>{menu.card.info.description}</p>
            </div>

            <img
              className="w-36 h-36 rounded-xl shadow-2xl"
              src={CDN_URL + menu.card.info.imageId}
            />
          </div>
          <button className=" bg-black text-white w-20 rounded-lg h-8 absolute ml-[520px] mt-[-25px]">
            ADD +
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
