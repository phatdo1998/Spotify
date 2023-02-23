import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <i className="fa-brands fa-spotify navbar__icon"></i>
        <div className="navbar__heading">Spotify</div>
      </div>
    </div>
  );
};

export default Navbar;
