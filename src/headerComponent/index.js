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
} from "reactstrap";
import "./style.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="header">
      {/* <Navbar expand="md" className="navbar_main"> */}
      <div className="header_title">
        <NavbarText className="logo">
          Se<span>las</span>i K.
        </NavbarText>
        <NavbarText className="logo_title">DIRECTOR // DP // EDITOR</NavbarText>
      </div>
      <div className="header_below">
        {/* <NavbarToggler className="toggle" onClick={toggle} /> */}
        {/* <Input
            type="button"
            onClick={toggle}
            value="menu"
            className="toggle"
          /> */}

        {/* <Collapse isOpen={isOpen} navbar> */}
        <Nav className="mr-auto header_links">
          <NavItem className="item_nav">
            <Link to="/" className="item_link">
              Commercial.
            </Link>
          </NavItem>
          <NavItem className="item_nav">
            <Link to="/creative" className="item_link">
              Creative.
            </Link>
          </NavItem>
          <NavItem className="item_nav">
            <Link to="/contact" className="item_link">
              Contact.
            </Link>
          </NavItem>
          <NavItem className="item_nav">
            <Link to="/about" className="item_link">
              About.
            </Link>
          </NavItem>
        </Nav>
        {/* </Collapse> */}
      </div>
      {/* </Navbar> */}
    </div>
  );
}

export default Header;
