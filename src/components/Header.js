import React from "react";
import { Link } from "react-router-dom";
import imageOne from "./images/photography-logo.png";

const Header = () => {
  return (
    <div className="flex items-center">
      <div className="mt-10 ml-24 mr-56">
        <Link to="/">
          <img src={imageOne} alt="logo-here" />
        </Link>
      </div>
      <div className="text-white text-base" dir="ltr">
        <Link className="ms-20" to="/about">
          About
        </Link>
        <Link className="ms-20" to="/exhibition">
          Exhibition
        </Link>
        <Link className="ms-20" to="/gallery">
          Gallery
        </Link>
        <Link className="ms-20" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
