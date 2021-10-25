import React from "react";
import "./style.css";

function FooterComponent() {
  return (
    <div className="footer">
      <div className="footer_links">
        <a href="#">
          <i className="fa fa-facebook-square fa-2x"></i>
        </a>
        <a href="#">
          <i className="fa fa-instagram fa-2x"></i>
        </a>
        <a href="#">
          <i className="fa fa-youtube fa-2x"></i>
        </a>
        <a href="#">
          <i className="fa fa-twitter fa-2x"></i>
        </a>
      </div>
      <div className="footer_copy">
        <h6>&copy;Selasi Kudowor</h6>
      </div>
    </div>
  );
}

export default FooterComponent;
