import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      console.log("Subscribed:", email);
      setEmail("");
    } else {
      setIsValidEmail(false);
    }
  };

  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <h2 className="h5 font-weight-bold">TextUtils APP</h2>
            <p>Submit the text for analysis in the field above.</p>
          </div>
          <div className="col-md-3 mb-4">
            <h3 className="h6 font-weight-bold">Quick Links</h3>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white-50 text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/" className="text-white-50 text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/" className="text-white-50 text-decoration-none">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/" className="text-white-50 text-decoration-none">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h3 className="h6 font-weight-bold">Follow Us</h3>
            <div>
              <a
                href="/"
                aria-label="Facebook"
                className="text-white-50 me-3"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="/"
                aria-label="Twitter"
                className="text-white-50 me-3"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="/"
                aria-label="Instagram"
                className="text-white-50 me-3"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="/"
                aria-label="LinkedIn"
                className="text-white-50"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <h3 className="h6 font-weight-bold">Subscribe</h3>
            <form onSubmit={handleSubmit} className="d-flex">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                className={`form-control ${
                  !isValidEmail ? "is-invalid" : ""
                }`}
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="btn btn-primary ms-2"
                aria-label="Subscribe"
              >
                <MdEmail size={24} />
              </button>
            </form>
            {!isValidEmail && (
              <div className="invalid-feedback d-block">
                Please enter a valid email address.
              </div>
            )}
          </div>
        </div>
        <div className="border-top border-secondary mt-4 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} TextUtils. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
