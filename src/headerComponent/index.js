import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink, NavbarText } from "reactstrap";
import "./style.css";

function Header() {
  //const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="header">
      {/* <Navbar expand="md" className="navbar_main"> */}
      <div className="header_title">
        <NavbarText className="logo">Selasi.</NavbarText>
        <NavbarText className="logo_title">DIRECTOR // DP // EDITOR</NavbarText>
      </div>
      <div className="header_below">
        {/* <NavbarToggler className="toggle" onClick={toggle} /> */}
        {/* <Collapse isOpen={isOpen} navbar> */}
        <Nav className="mr-auto header_links">
          <NavItem className="item_nav">
            <Link to="/" className="item_nav">
              Commercial.
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/creative" className="item_nav">
              Creative.
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/contact" className="item_nav">
              Contact.
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
