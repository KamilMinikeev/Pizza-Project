import React, { useContext } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { topPicks } from "../data/data";
import { ShopContext } from "../context/shop-context/shop-context";

const TopPicks = () => {
  const { addToCart } = useContext(ShopContext);

  return (
    <section>
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
        Top Picks
      </h1>
      <div className="hidden lg:flex max-w-[1520px] w-full m-auto py-2 px-2">
        <Splide
          options={{
            perPage: 4,
            gap: "0.5rem",
            grag: "free",
            arrows: false,
          }}
          aria-label="My Favorite Images"
        >
          {topPicks.map((item) => (
            <SplideSlide key={item.id}>
              <div className="rounded-3xl relative">
                <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white flex flex-col justify-between py-4 px-2">
                  <div>
                    <p className="font-bold text-2xl ">{item.title}</p>
                    <p>{item.price}</p>
                  </div>
                  <button
                    className="border-dotted border-white text-white max-w-[160px]"
                    onClick={() => addToCart(item.id)}
                  >
                    Add To Cart
                  </button>
                </div>
                <img
                  className="h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105  ease-out duration-300"
                  src={item.img}
                  alt={item.title}
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default TopPicks;
