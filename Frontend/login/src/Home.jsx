import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="hero_area">
        <div className="hero_bg_box">
          <div className="bg_img_box">
            <img src="images/hero-bg.png" alt="Background" />
          </div>
        </div>

        {/* Header Section */}
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <Link className="navbar-brand" to="/">
                <span>NEXTHIRE</span>
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
                <span></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/home">
                      Home <span className="sr-only"></span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/service">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/why">
                      Why Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/team">
                      Team
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">
                      Dashboard
                    </Link>
                  </li>

                  {/* Profile Dropdown */}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="profileDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fa fa-user-circle" aria-hidden="true" style={{ fontSize: '20px' }}></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="profileDropdown">
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                      <a className="dropdown-item" href="#">
                        Settings
                      </a>
                      <a className="dropdown-item" href="/login">
                        Login
                      </a>

                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="/login">
                        Logout
                      </a>
                    </div>
                  </li>

                  {/* Search Form */}
                  <form className="form-inline">
                    <button className="btn my-2 my-sm-0 nav_search-btn" type="submit">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form>
                </ul>
              </div>
            </nav>
          </div>
        </header>

        {/* Info Section */}
        <section className="info_section layout_padding2">
          <div className="container">
            <div className="row">
              {/* Address Column */}
              <div className="col-md-6 col-lg-3 info_col">
                <div className="info_contact">
                  <h4>Address</h4>
                  <div className="contact_link_box">
                    <a href="#">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      <span>Location</span>
                    </a>
                    <a href="#">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      <span>Call +01 1234567890</span>
                    </a>
                    <a href="#">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      <span>demo@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="col-md-6 col-lg-3 info_col">
                <div className="info_social">
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>

              {/* Links Column */}
              <div className="col-md-6 col-lg-2 mx-auto info_col">
                <div className="info_link_box">
                  <h4>Links</h4>
                  <div className="info_links">
                    <Link className="active" to="/home">
                      Home
                    </Link>
                    <Link to="/about">About</Link>
                    <Link to="/service">Services</Link>
                    <Link to="/why">Why Us</Link>
                    <Link to="/team">Team</Link>
                  </div>
                </div>
              </div>

              {/* Subscribe Column */}
              <div className="col-md-6 col-lg-3 info_col">
                <h4>Subscribe</h4>
                <form action="#">
                  <input type="text" placeholder="Enter email" />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <section className="footer_section">
          <div className="container">
            <p>
              &copy; <span id="displayYear"></span> All Rights Reserved By
              <a href="https://html.design/">Free Html Templates</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
