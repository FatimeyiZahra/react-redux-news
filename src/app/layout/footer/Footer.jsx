import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <section id="footer-dark">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="image">
                  <img src="assets/img/logo.png" alt="" srcSet="" />
                </div>
                <div className="footer-text">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and type
                    setting industry. Lorem Ipsum has been the industry's
                    standard dummy text...
                  </p>
                </div>
              </div>

              <div className="col-lg-4 d-flex justify-content-center">
                <div className="links">
                  <h4>Categories</h4>
                  <ul>
                    <li>
                      <a href="!#">World</a>
                    </li>
                    <li>
                      <a href="!#">Politics</a>
                    </li>
                    <li>
                      <a href="!#">Economy</a>
                    </li>
                    <li>
                      <a href="!#">Business</a>
                    </li>
                    <li>
                      <a href="!#">Technology</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <h4>Contact Info</h4>
                <p>
                  Possible offering at contempt mr distance stronger an.
                  Attachment excellence announcing
                </p>
                <div className="contact-info">
                  <ul>
                    <li>
                      <strong>Email: </strong> sahra@kataraban.com
                    </li>
                    <li>
                      <strong>Contact: </strong> +994-77-7372-5577
                    </li>
                  </ul>
                </div>
                <ul className="social-icons">
                  <li className="facebook">
                    <a href="!#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="twitter">
                    <a href="!#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="youtube">
                    <a href="!#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li className="instagram">
                    <a href="!#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="validThemes">
                  <p>
                    &copy; Copyright 2021. All Rights Reserved by{" "}
                    <a href="!#">Kataraban</a>
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="footerEnd-text ">
                  <ul>
                    <li>
                      <a href="!#">Terms</a>
                    </li>
                    <li>
                      <a href="!#">Privacy</a>
                    </li>
                    <li>
                      <a href="!#">Support</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-shape"></div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
