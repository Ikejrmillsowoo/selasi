import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "react-bootstrap/Image";
import "./style.css";

function CardComponent() {
  return (
    <div className="image_container">
      <div className="container_row">
        <div className="container_col">
          <Image fluid src="images/flatland.png" thumbnail />
        </div>
        <div className="container_col">
          <Image fluid src="images/american_advertising.jpg" thumbnail />
        </div>
        <div className="container_col">
          <Image fluid src="images/goldaddy.png" thumbnail />
        </div>
      </div>
    </div>
    // <div className="images">
    //   <
    //     className="image_display"
    //     src="images/american_advertising.jpg"
    //   />
    //   <CardImg
    //     className="image_display"
    //     src="images/american_advertising.jpg"
    //   />
    //   <CardImg
    //     className="image_display"
    //     src="images/american_advertising.jpg"
    //   />
    // </div>
  );
}

export default CardComponent;
