import React from "react";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";

const Navbar = () => {
  return (
    <>
    <nav className="navbar-main navbar-expand-lg navbar navbar-dark fixed-top">
      <div class="container-fluid">
        <Link to={"/"} className="home-link">
          <h3><strong>M</strong>addie</h3>
          <h3><strong>V</strong>eterinary</h3>
          <h3><strong>P</strong>hysiotherapy</h3>
        </Link>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="text-bg-dark bg-dark offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <div class="navbar-title-text offcanvas-title" id="offcanvasNavbarLabel">
          <h3><strong>M</strong>addie</h3>
          <h3><strong>V</strong>eterinary </h3>
          <h3><strong>P</strong>hysiotherapy</h3>
        </div>
        <button type="button" class="x-button btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <Link to={"/"} className="dropdown-item">
              <p>Home</p>
            </Link>
          </li>
          <li class="nav-item">
            <Link to={"/services"} className="dropdown-item">
              <p>My Services</p>
            </Link>
          </li>
          <li class="nav-item">
            <Link to={"/pricing"} className="dropdown-item">
              <p>Pricing</p>
            </Link>
          </li>
          <li class="nav-item">
            <Link to={"/blog"} className="dropdown-item">
              <p>Blog</p>
            </Link>
          </li>
          <li class="nav-item">
            <ContactModal />
          </li>
          <li class="nav-item dropdown">
            <a class="text-light nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              About
            </a>
            <ul class="dropdown-menu">
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
              <li>
                <hr class="dropdown-divider"/>
              </li>
              <li>
                <Link
                  to={"/about/terms-and-conditions"}
                  className="dropdown-item">
                  <p>Terms and conditions</p>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
      {/*



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
      </nav> */}
      </>
  );
};

export default Navbar;
