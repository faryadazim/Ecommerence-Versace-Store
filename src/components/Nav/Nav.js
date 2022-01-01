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


      {/* .........................Mega Menu  */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
            <ul className="navbar-nav align-center">

              <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  WOMEN
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-4">
                        <a className="dropdown-item " href="/">
                          Action
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a className="dropdown-item " href="/">
                          Action
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a className="dropdown-item " href="/">
                          Action
                        </a>
                      </div></div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  MEN
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-4">
                        <a className="dropdown-item " href="/">
                          Action
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a className="dropdown-item " href="/">
                          Action
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a className="dropdown-item " href="/">
                          Action
                        </a>
                      </div></div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CHILDREN
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-4">
                        <a className="dropdown-item " href="/">
                          Action
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a className="dropdown-item " href="/">
                          Action
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a className="dropdown-item " href="/">
                          Action
                        </a>
                      </div></div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  HOME COLLECTION
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-4">
                        <a className="dropdown-item " href="/">
                          Action
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a className="dropdown-item " href="/">
                          Action
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a className="dropdown-item " href="/">
                          Action
                        </a>
                      </div></div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  JEANS COUTURE
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-4">
                        <a className="dropdown-item " href="/">
                          Action
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a className="dropdown-item " href="/">
                          Action
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a className="dropdown-item " href="/">
                          Action
                        </a>
                      </div></div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ATELIER VERSACE
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-4">
                        <a className="dropdown-item " href="/">
                          Action
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a className="dropdown-item " href="/">
                          Action
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a className="dropdown-item " href="/">
                          Action
                        </a>
                      </div></div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link  "
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SALE
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-4">
                        <a className="dropdown-item " href="/">
                          Action
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a className="dropdown-item " href="/">
                          Action
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a className="dropdown-item " href="/">
                          Action
                        </a>
                      </div></div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  WORLD OF VERSACE
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-4">
                        <a className="dropdown-item " href="/">
                          Action
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a className="dropdown-item " href="/">
                          Action
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a className="dropdown-item " href="/">
                          Action
                        </a>
                      </div></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* <form class="d-flex">    <button class="btn btn-outline-success" type="submit">Search</button>
          </form> */}
        </div>
      </nav>
    </>
  );
};

export default Nav;
