import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5>Follow Us</h5>
            <div className="col-md-5 mb-4">
              <a href="#" className="text-white me-2">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="#" className="text-white me-2">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="#" className="text-white me-2">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="#" className="text-white me-2">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <h5>Contac Us</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-home me-2"></i> New York, NY 10012, US
              </li>
              <li>
                <i className="fas fa-envelope me-2"></i>
                <a
                  href="mailto:info@example.com"
                  className="text-white text-decoration-none"
                >
                  info@example.com
                </a>
              </li>
              <li>
                <i className="fas fa-phone me-2"></i>
                <a
                  href="tel:+1234567890"
                  className="text-white text-decoration-none"
                >
                  + 123 456 7890
                </a>
              </li>
              <li>
                <i className="fas fa-map-marker me-2"></i>
                2102 New York, NY 10012, US
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-4 pt-4 border-top">
          <p className="mb-0">&copy; 2021 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
