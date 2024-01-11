import React from "react";

const MenuItem = ({ link, image }) => {
  return (
    <li className="text-xl py-4 flex items-center">
      <div className="mr-4 text-white bg-black rounded-full">{image}</div>
      <p className="mt-[-4px]"> {link}</p>
    </li>
  );
};

export default MenuItem;
