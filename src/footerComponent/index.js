import React from "react";
import "./style.css";

function FooterComponent() {
  return (
    <div className="footer">
      <div className="footer_links">
        <a
          href="https://www.facebook.com/selasi.kudowor.9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-facebook-square fa-2x"></i>
        </a>
        <a
          href="https://www.instagram.com/bookofselasi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-instagram fa-2x"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UCczo4NW3LM9sgS9803lkGng/featured"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-youtube fa-2x"></i>
        </a>
        <a
          href="https://twitter.com/bookofselasi"
          target="_blank"
          rel="noopener noreferrer"
        >
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
