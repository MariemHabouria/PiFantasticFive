import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Team = () => {
  const teamMembers = [
    { name: "Yassin Nouri", role: "Marketing Head", img: "images/yassin.jpg" },
    { name: "Nancy White", role: "Marketing Head", img: "images/team-2.jpg" },
    { name: "Earl Martinez", role: "Marketing Head", img: "images/team-3.jpg" },
    { name: "Josephine Allard", role: "Marketing Head", img: "images/team-4.jpg" },
  ];

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
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                   <span className=""></span>
                 </button>
                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul className="navbar-nav">
                     <li className="nav-item">
                       <Link className="nav-link" to="/home">Home</Link>
                     </li>
                     <li className="nav-item ">
                       <Link className="nav-link" to="/about">About</Link>
                     </li>
                     <li className="nav-item">
                       <Link className="nav-link" to="/service">Services</Link>
                     </li>
                     <li className="nav-item">
                       <Link className="nav-link" to="/why">Why Us</Link>
                     </li>
                     <li className="nav-item active">
                       <Link className="nav-link" to="/team">Team</Link>
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
        
      {/* Section Team */}
      <section className="team_section layout_padding">
        <div className="container-fluid">
          <div className="heading_container heading_center">
            <h2>Our <span> Team</span></h2>
          </div>

          <div className="team_container">
            <div className="row">
              {teamMembers.map((member, index) => (
                <div key={index} className="col-lg-3 col-sm-6">
                  <div className="box">
                    <div className="img-box">
                      <img src={member.img} className="img1" alt={member.name} />
                    </div>
                    <div className="detail-box">
                      <h5>{member.name}</h5>
                      <p>{member.role}</p>
                    </div>
                    <div className="social_box">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>

            {/* Links Column */}
            <div className="col-md-6 col-lg-2 mx-auto info_col">
              <div className="info_link_box">
                <h4>Links</h4>
                <div className="info_links">
                  <Link className="active" to="/">
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
  );
};

export default Team;
