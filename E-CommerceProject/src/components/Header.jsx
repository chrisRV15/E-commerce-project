import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            RealValue
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Navbar Collapse Section */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Watches
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/account">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="flex items-center">
              <Link
                to={isLoggedIn ? "/account" : "/login"}
                className="btn btn-outline-dark position-relative"
              >
                <i
                  class="fa-solid fa-circle-user"
                  style={{ color: isLoggedIn ? "green" : "black" }}
                ></i>
              </Link>
              <button className="btn btn-outline-dark position-relative">
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  0 {}
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
