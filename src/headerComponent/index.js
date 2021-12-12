import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "reactstrap";
import "./style.css";

function Header() {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="header">
      <Navbar className="navbar_main">
        <div className="header_title">
          <img className="logo" src="images/1200.jpg" alt="Selasi" />
        </div>
        <div className="header_below">
          <a className="toggle" href="#" onClick={toggle}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </a>

          <div className="header_links">
            <div className="links" id={isOpen ? "hidden" : ""}>
              <div className="item_nav">
                <Link
                  to="/"
                  className="item_link"
                  onClick={!isOpen ? toggle : ""}
                >
                  Commercial.
                </Link>
              </div>
              <div className="item_nav">
                <Link
                  to="/creative"
                  className="item_link"
                  onClick={!isOpen ? toggle : ""}
                >
                  Creative.
                </Link>
              </div>
              <div className="item_nav">
                <Link
                  to="/contact"
                  className="item_link"
                  onClick={!isOpen ? toggle : ""}
                >
                  Contact.
                </Link>
              </div>
              <div className="item_nav">
                <Link
                  to="/about"
                  className="item_link"
                  onClick={!isOpen ? toggle : ""}
                >
                  About.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
