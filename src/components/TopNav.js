import React, { useState, useEffect, useContext } from "react";
import Menu from "./Menu";
import { MdOutlineMenu, MdOutlineSearch } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shop-context/shop-context";

const TopNav = () => {
  const [sideNav, setSideNav] = useState(false);
  const [fixedMenu, setFixedMenu] = useState(false);

  const { getTotalCart } = useContext(ShopContext);

  useEffect(() => {
    //FixedMenu
    const onScroll = () => {
      if (window.scrollY > 100) {
        setFixedMenu(true);
      } else {
        setFixedMenu(false);
      }
    };

    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className={
          fixedMenu
            ? "fixed left-0 top-0 w-full bg-slate-200 z-10"
            : "w-full bg-white z-10"
        }
      >
        <div className="max-w-[1520px] mx-auto flex justify-between items-center p-4">
          <div className="flex items-center">
            <button
              onClick={() => setSideNav(!sideNav)}
              className="p-0 rounded-none border-0"
            >
              <MdOutlineMenu size={40} />
            </button>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 mt-[-4px]">
              Yum
              <span className="font-bold">Eats</span>
            </h1>

            <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] font-bold">
              <p className="bg-orange-700 text-white rounded-full p-2">Free</p>
              <p className="p-2">Delivery</p>
            </div>
          </div>
          <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
            <MdOutlineSearch size={30} />
            <input
              className="bim bg-transparent p-2 w-full focus:outline-none"
              type="text"
              placeholder="search meals"
            />
          </div>
          <Link
            to={"cart"}
            className="bg-orange-700 text-white hidden md:flex items-center py-2 px-5 rounded-full"
          >
            <AiOutlineShoppingCart size={20} />
            Cart
            {getTotalCart() > 0 ? ` (${getTotalCart()})` : ""}
          </Link>
        </div>
      </div>

      <Menu sideNav={sideNav} setSideNav={setSideNav} />
    </>
  );
};

export default TopNav;
