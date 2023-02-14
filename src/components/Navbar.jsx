import React from "react";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";

const Navbar = () => {
  return (
    <div className="navbar-main">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to={"/"} className="home-link">
            <p>MVP - Maddie Vet Physio</p>
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item m-1">
                <Link to={"/"} className="dropdown-item">
                  <p>Home</p>
                </Link>
              </li>
              <li className="nav-item m-1">
                <Link to={"/services"} className="dropdown-item">
                  <p>My Services</p>
                </Link>
              </li>
              <li className="nav-item m-1">
                <Link to={"/pricing"} className="dropdown-item">
                  <p>Pricing</p>
                </Link>
              </li>
              <li className="nav-item m-1">
                <ContactModal />
              </li>
              <li className="nav-item m-1">
                <Link to={"/blog"} className="dropdown-item">
                  <p>Blog</p>
                </Link>
              </li>
              <li className="nav-item m-1">
                <Link to={"/about/testimonials"} className="dropdown-item">
                  <p>Testimonials</p>
                </Link>
              </li>
              <li className="m-1 nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to={"/about/physio"} className="dropdown-item">
                      <p>About Vet Physiotherapy</p>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/about/me"} className="dropdown-item">
                      <p>About Me</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to={"/about/terms-and-conditions"}
                      className="dropdown-item"
                    >
                      <p>Terms and conditions</p>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
