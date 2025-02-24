import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMapMarker, FaPhone, FaEnvelope } from "react-icons/fa";

const Service = () => {
  return (
    <div className="hero_area">
      <div className="hero_bg_box">
        <div className="bg_img_box">
          <img src="images/hero-bg.png" alt="Hero Background" />
        </div>
      </div>

      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <Link className="navbar-brand" to="/home">
              <span>NEXTHIRE</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
            >
              <span></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item active">
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
                <form className="form-inline">
                  <button className="btn nav_search-btn" type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      {/* Section Services */}
      <section className="about_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Services</h2>
            <p>Discover what we offer</p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                {/* Add image if necessary */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <p>We provide high-quality services to help your business grow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Info */}
      <section className="info_section layout_padding2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_contact">
                <h4>Address</h4>
                <div className="contact_link_box">
                  <a href="#">
                    <FaMapMarker /> <span>Location</span>
                  </a>
                  <a href="#">
                    <FaPhone /> <span>Call +01 1234567890</span>
                  </a>
                  <a href="#">
                    <FaEnvelope /> <span>demo@gmail.com</span>
                  </a>
                </div>
              </div>
              <div className="info_social">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaInstagram /></a>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_detail">
                <h4>Info</h4>
                <p>We provide the best services in the industry.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-2 mx-auto info_col">
              <div className="info_link_box">
                <h4>Links</h4>
                <div className="info_links">
                  <Link to="/home">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/service">Services</Link>
                  <Link to="/why">Why Us</Link>
                  <Link to="/team">Team</Link>
                </div>
              </div>
            </div>

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

      {/* Footer */}
      <section className="footer_section">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} All Rights Reserved By{" "}
            <a href="https://html.design/">Free Html Templates</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Service;
