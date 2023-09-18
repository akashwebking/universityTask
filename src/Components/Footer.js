import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-success mb-0 ">
      <div className="container">
        <div className="row text-light mt-3  ">
          <div className="col text-md-start ">
            <h3 className=" fw-bold mb-4 ">Senchola</h3>
            <p style={{ width: "320px" }}>
              We help ambitious companies scale through our exclusive global
              network of freelance talent, outsourcing services, and market
              insights. Join Senchola to accelerate and scale your business
              growth
            </p>
          </div>
          <div className="col ">
            <h4>Use Cases</h4>
            <li>UI Desion</li>
            <li>UX Desion</li>
            <li>UX Desion</li>
            <li>UI Desion</li>
            <li>UX Desion</li>
            <li>Prototyping</li>
          </div>
          <div className="col">
            <h4>Explore</h4>
            <li>Figma</li>
            <li>Customers</li>
            <li>Why I Love Figma</li>
            <li>Figma</li>
            <li>Customers </li>
            <li>Why I Love Figma</li>
          </div>
          <div className="col">
            <h4>Resources</h4>
            <li>Resources Hub</li>
            <li>Support</li>
            <li>Education</li>
            <li>Resources Hub</li>
            <li>Support</li>
            <li>Education</li>
          </div>
          <div className="col-3">
            <h6 className="email_head">Connect With Senchola Technologies</h6>
            <div className="form-group">
              <input
                style={{ width: "325px" }}
                type="email"
                className="form-control einput"
                placeholder="Email"
              />
              <a href="#">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="eicon text-success"
                />
              </a>
            </div>
            <div className="brands">
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faSquareFacebook} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>
        <hr className="footer_line text-light" />
        <p className="copy text-light p-3 ">
          All Copyrights Reserved &copy; Senchola Technologies Solution{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
