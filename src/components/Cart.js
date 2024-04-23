import ItemList from "./ItemList";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="p-5 m-4 text-center">
      <h1 className="font-bold text-3xl ">Cart Page</h1>
      <div className="w-6/12 items-center m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
