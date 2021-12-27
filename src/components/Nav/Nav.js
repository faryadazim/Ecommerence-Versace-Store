import React from "react";
import "./Nav.css";
import WishList from "../../assets/icons/heart.png";
import Bag from "../../assets/icons/shopping-bag.png";
import Logo from "../../assets/logo.png";

const Nav = () => {
  return (
    <>
      <div className="conyainer-fluid">
        <div className="row mini-nav  ">
          <div className="col-md-4  microNavLeft ">
            <span>
              {" "}
              <a href="/"> Pakistan | EN (Rs)</a>
            </span>
            <span>
              {" "}
              <a href="/"> Store</a>
            </span>
            <span>
              {" "}
              <a href="/"> Contact Us</a>
            </span>
          </div>
          <div className="col-md-4 text-center  microNavLeft centeredData">
            <a href="/"> Sign up for exclusive updates</a>
          </div>
          <div className="col-md-4 text-end   microNavRight">
            <span>Sign in/Register</span>
            <span>
              <a href="/">
                <img src={WishList} alt="WishList" id="icon-wishList" />
              </a>
            </span>
            <span>
              <a href="/" className="bagTag ">
                <img src={Bag} alt="WishList" id="icon-wishList" />
                <span className="bagText ps-1">Bag</span>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 logo-container">
            <img src={Logo} alt="logo" /></div>
        </div>
      </div>
      <div className="container-fluid">

      </div>
    </>
  );
};

export default Nav;
