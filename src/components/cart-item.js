import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context/shop-context";

const CartItem = (props) => {
  const { id, title, price, img } = props.data;

  const { cartItems, removeFromCart, addToCart } = useContext(ShopContext);
  return (
    <div className="w-[250px] border-2 border-slate-600 m-[15px] rounded-xl">
      <img
        className="h-[200px] w-full object-cover rounded-t-xl"
        src={img}
        alt=""
      />
      <div className="p-2">
        <h3 className="text-xl font-bold ">{title}</h3>
        <span className="text-xl mb-2">{price}</span>
        <p>Count: {cartItems[id]}</p>
        <div className="flex mt-4">
          <button
            className="p-0 text-xl font-bold flex justify-center items-center w-20 h-10 rounded-xl border-1 mr-2"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
          <button
            className="p-0 text-xl font-bold flex justify-center items-center w-20 h-10 rounded-xl border-1"
            onClick={() => addToCart(id)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
