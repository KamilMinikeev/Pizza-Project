import React, { createContext, useState } from "react";
import { topPicks as PRODUCTS } from "../../data/data";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }

  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [favoritesItems, setFavoritesItems] = useState(getDefaultCart());
  // const [favorited, setfavorited] = useState(false);

  const getTotalCart = () => {
    let totalCart = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalCart += cartItems[item];
      }
    }

    return totalCart;
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;

        //totalAmount += cartItems[item] * PRODUCTS[item - 1].price;
      }
    }
    // for (let i = 1; i < PRODUCTS.length + 1; i++) {
    //     if (cartItems[i] > 0) {
    //         totalAmount += cartItems[i] * PRODUCTS[i - 1].price;
    //     }
    // }
    return totalAmount;
  };

  const getTotalfavorites = () => {
    let totalfavorites = 0;

    for (const item in favoritesItems) {
      if (favoritesItems[item] == 0) {
        totalfavorites++;
      }
    }

    return totalfavorites;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    //console.log(cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const favorites = (itemId) => {
    setFavoritesItems((prev) => {
      if (prev[itemId] == 0) {
        return { ...prev, [itemId]: prev[itemId] + 1 };
      } else {
        return { ...prev, [itemId]: prev[itemId] - 1 };
      }
    });
  };

  const contextValue = {
    PRODUCTS,
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCart,
    getTotalCartAmount,
    checkout,
    favorites,
    favoritesItems,
    getTotalfavorites,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
