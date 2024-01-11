import {
  MdOutlineClose,
  MdAccountCircle,
  MdFavorite,
  MdHelp,
} from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { FaGoogleWallet } from "react-icons/fa";

import MenuItem from "./MenuItem.js";

const menuLinks = [
  {
    link: "My Account",
    img: <MdAccountCircle size={25} />,
  },
  {
    link: "Delivery",
    img: <TbTruckDelivery size={25} />,
  },
  {
    link: "My Favourite",
    img: <MdFavorite size={25} />,
  },
  {
    link: "My Wallet",
    img: <FaGoogleWallet size={25} />,
  },
  {
    link: "Help",
    img: <MdHelp size={25} />,
  },
];

const Menu = ({ sideNav, setSideNav }) => {
  return (
    <>
      {sideNav ? (
        <div
          className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"
          onClick={() => setSideNav(!sideNav)}
        ></div>
      ) : (
        ""
      )}
      <div
        className={
          sideNav
            ? "fixed top-0 left-0 translate-x-0 w-[300px] h-screen bg-white z-20 duration-300 ease-linear"
            : "fixed top-0 left-0 translate-x-[-100%] w-[300px] h-screen bg-white z-20 duration-300 ease-linear"
        }
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-2xl">
            Yum <span className="text-orange-700 font-bold">Eats</span>
          </h2>
          <button
            onClick={() => setSideNav(!sideNav)}
            className="p-0 rounded-none border-0"
          >
            <MdOutlineClose size={40} />
          </button>
        </div>

        <nav>
          <ul className="flex flex-col p-4 text-gray-900">
            {menuLinks.map((item) => (
              <MenuItem key={item.link} link={item.link} image={item.img} />
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Menu;
