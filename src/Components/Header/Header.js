import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../Images/Alpaca.svg";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-secondary-400">
      <div>
        <img src={logo} className="w-52 p-3 " alt="logo" />
      </div>
      <nav className="mr-20">
        <Link
          className="text-base text-primary-400 hover:bg-primary-400 hover:text-white decoration-0 px-5 py-3"
          to="/home"
        >
          Home
        </Link>
        <Link
          className="text-base text-primary-400 hover:bg-primary-400 hover:text-white decoration-0 px-5 py-3"
          to="/gellary"
        >
          Gallery
        </Link>
        <Link
          className="text-base text-primary-400 hover:bg-primary-400 hover:text-white decoration-0 px-5 py-3"
          to="/about-us"
        >
          About Us
        </Link>
      </nav>
    </div>
  );
};

export default Header;
