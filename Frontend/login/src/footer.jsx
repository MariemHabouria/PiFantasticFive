const Footer = () => {
    return (
      <footer>
        {/* Info Section */}
        <section className="info_section layout_padding2">
          <div className="container">
            <div className="row">
              {/* Contact Info */}
              <div className="col-md-6 col-lg-3 info_col">
                <div className="info_contact">
                  <h4>Address</h4>
                  <div className="contact_link_box">
                    <a href="#">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      <span>Location</span>
                    </a>
                    <a href="tel:+011234567890">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      <span>Call +01 1234567890</span>
                    </a>
                    <a href="mailto:demo@gmail.com">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      <span>demo@gmail.com</span>
                    </a>
                  </div>
                </div>
                {/* Social Media */}
                <div className="info_social">
                  <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                  <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
              </div>
  
              {/* Info Details */}
              <div className="col-md-6 col-lg-3 info_col">
                <div className="info_detail">
                  <h4>Info</h4>
                  <p>Necessary, making this the first true generator on the Internet.</p>
                </div>
              </div>
  
              {/* Quick Links */}
              <div className="col-md-6 col-lg-2 mx-auto info_col">
                <div className="info_link_box">
                  <h4>Links</h4>
                  <div className="info_links">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/service">Services</a>
                    <a href="/why">Why Us</a>
                    <a href="/team">Team</a>
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
              &copy; <span id="displayYear">{new Date().getFullYear()}</span> All Rights Reserved By
              <a href="https://html.design/"> Free Html Templates</a>
            </p>
          </div>
        </section>
      </footer>
    );
  };
  
  export default Footer;
  