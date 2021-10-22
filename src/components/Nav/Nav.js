import React from "react";
import "./Nav.css";
import WishList from "../../assets/icons/heart.png";
import Bag from "../../assets/icons/shopping-bag.png";
const Nav = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row mini-nav">
          <div className="col-md-4  microNav ">
            <span>Pakistan | EN (Rs)</span>
            <span>Store</span>
            <span>Contact Us</span>
          </div>
          <div className="col-md-4 text-center  microNav centeredData">
            <a href="/"> Sign up for exclusive updates</a>
          </div>
          <div className="col-md-4 text-end   microNav">
            <span>Sign in/Register</span>
            <span>
              <a href="/">
                <img src={WishList} alt="WishList" id="icon-wishList" />
              </a>
            </span>
            <span>
              <a href="/">
                <img src={Bag} alt="WishList" id="icon-wishList" />
                Bag
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
