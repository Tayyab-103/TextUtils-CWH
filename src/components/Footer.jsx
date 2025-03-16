import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = ({ mode }) => {
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
    <footer
      className={`pt-5 pb-3 text-${
        mode === "light" ? "dark" : "white"
      } bg-${mode}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <h2 className="h5 font-weight-bold">TextUtils APP</h2>
            <p>Submit the text for analysis in the field above.</p>
          </div>
          <div className="col-md-3 mb-4">
            <h3 className="h6 font-weight-bold">Quick Links</h3>
            <ul className="list-unstyled">
              <li><a href="#" className={`text-${mode === "light" ? "dark" : "white"} text-decoration-none`}>About Us</a></li>
              <li><a href="#" className={`text-${mode === "light" ? "dark" : "white"} text-decoration-none`}>Contact Us</a></li>
              <li><a href="#" className={`text-${mode === "light" ? "dark" : "white"} text-decoration-none`}>Terms of Service</a></li>
              <li><a href="#" className={`text-${mode === "light" ? "dark" : "white"} text-decoration-none`}>Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h3 className="h6 font-weight-bold">Follow Us</h3>
            <div>
              <a href="#" className={`me-3 text-${mode === "light" ? "dark" : "white"}`}><FaFacebook size={24} /></a>
              <a href="#" className={`me-3 text-${mode === "light" ? "dark" : "white"}`}><FaTwitter size={24} /></a>
              <a href="#" className={`me-3 text-${mode === "light" ? "dark" : "white"}`}><FaInstagram size={24} /></a>
              <a href="#" className={`text-${mode === "light" ? "dark" : "white"}`}><FaLinkedin size={24} /></a>
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
                className={`form-control ${!isValidEmail ? "is-invalid" : ""}`}
              />
              <button type="submit" className="btn btn-primary ms-2">
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
        <div className={`border-top mt-2 pt-2 text-center border-${mode === "light" ? "dark" : "light"}`}>
          <p>&copy; {new Date().getFullYear()} TextUtils. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
