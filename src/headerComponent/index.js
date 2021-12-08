import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Navbar,
  NavbarToggler,
  Collapse,
  Button,
  Input,
  CardImg,
} from "reactstrap";
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
          {/* <NavbarText className="logo"> */}
          <img className="logo" src="images/1200.jpg" />
          {/* Se<span>las</span>i K. */}
          {/* </NavbarText> */}
          {/* <NavbarText className="logo_title">
            DIRECTOR // DP // EDITOR
          </NavbarText> */}
        </div>
        <div className="header_below">
          <a className="toggle" href="#" onClick={toggle}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </a>

          {/* <NavbarToggler className="toggle" onClick={toggle} /> */}
          {/* <Input
            type="button"
            onClick={toggle}
            value="menu"
            className="toggle"
          /> */}

          {/* <Collapse isOpen={isOpen}> */}
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
          {/* </Collapse> */}
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
