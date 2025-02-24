import React from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";

const Why = () => {
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
               <Link className="navbar-brand" to="">
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
                   <li className="nav-item">
                     <Link className="nav-link" to="/service">
                       Services
                     </Link>
                   </li>
                   <li className="nav-item active">
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

    

      {/* About Section */}
      <section className="about_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Why Choose Us?</h2>
            <p>Your description here...</p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                {/* Image Here */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <p>Some details about why you should choose us...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="info_section layout_padding2">
        <div className="container">
          <div className="row">
            {/* Address */}
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_contact">
                <h4>Address</h4>
                <div className="contact_link_box">
                  <Link to="#">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>Location</span>
                  </Link>
                  <Link to="#">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>Call +01 1234567890</span>
                  </Link>
                  <Link to="#">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>demo@gmail.com</span>
                  </Link>
                </div>
              </div>
              <div className="info_social">
                <Link to="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </Link>
              </div>
            </div>

            {/* Info */}
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_detail">
                <h4>Info</h4>
                <p>
                  Necessary, making this the first true generator on the Internet...
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="col-md-6 col-lg-2 mx-auto info_col">
              <div className="info_link_box">
                <h4>Links</h4>
                <div className="info_links">
                  <Link className="active" to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/services">Services</Link>
                  <Link to="/why">Why Us</Link>
                  <Link to="/team">Team</Link>
                </div>
              </div>
            </div>

            {/* Subscribe */}
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
            &copy; {new Date().getFullYear()} All Rights Reserved By{" "}
            <a href="https://html.design/">Free Html Templates</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Why;
