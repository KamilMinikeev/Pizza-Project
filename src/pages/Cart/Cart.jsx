import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context/shop-context";
import CartItem from "../../components/cart-item";
import { Link } from "react-router-dom";

const Cart = () => {
  const { PRODUCTS, cartItems, getTotalCart } = useContext(ShopContext);

  return (
    <section className="max-w-[1520px] mx-auto w-full pt-10">
      <div className="flex justify-between items-center">
        <Link
          className="text-2xl mb-8 font-bold border-2 rounded-lg py-1 px-2 border-slate-600"
          to={"/"}
        >
          Back
        </Link>
        <h2 className="text-3xl mb-8 font-bold">My Shopping Cart</h2>
      </div>

      {getTotalCart() > 0 ? (
        <div className="flex m-[-15px] flex-wrap">
          {PRODUCTS.map((item) => {
            if (cartItems[item.id] !== 0) {
              return <CartItem data={item} />;
            }
          })}
        </div>
      ) : (
        <h3 className="text-2xl"> Your Shopping Cart is Empty</h3>
      )}
    </section>
  );
};

export default Cart;
