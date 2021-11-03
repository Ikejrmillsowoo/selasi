import React from "react";
import { CardImg } from "reactstrap";
import MainComponent from "../mainComponent";
import "./style.css";

function AboutComponent() {
  return (
    <div>
      <MainComponent />
      <CardImg
        className="image_display"
        src="images/american_advertising.jpg"
      />
    </div>
  );
}

export default AboutComponent;
