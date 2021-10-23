import React from "react";
import "./Nav.css";
import WishList from "../../assets/icons/heart.png";
import Bag from "../../assets/icons/shopping-bag.png";
const Nav = () => {
  return (
    <>
      <div className="">
        <div className="row mini-nav px-2">
          <div className="col-md-4  microNavLeft ">
            <span>Pakistan | EN (Rs)</span>
            <span>Store</span>
            <span>Contact Us</span>
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
              <a href="/" className="bagTag">
                <img src={Bag} alt="WishList" id="icon-wishList" />
                <span className="bagText">Bag</span>
              </a>
            </span>
          </div>
        </div>

        <nav className=" px-2 py-0 navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid ">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="/navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="/">
                    Women
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="/">
                    men
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="/">
                    children
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="/">
                    Home collection
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="/">
                    jeans couture
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="/">
                    atelier versace
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="/">
                    world of versace
                  </a>
                </li>
              </ul>
              <span className="navbar-text">
                <a href="/">
                  <img src={WishList} alt="WishList" id="icon-wishList" />
                </a>
              </span>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
