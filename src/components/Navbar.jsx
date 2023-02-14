import React from "react";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";

const Navbar = () => {
  return (
    <>
    <nav class="navbar bg-light fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Offcanvas navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
      <nav className="navbar-main">
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
                <h3>About</h3>
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
      </>
  );
};

export default Navbar;
