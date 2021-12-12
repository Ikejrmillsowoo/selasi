import React from "react";

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
  );
}

export default CardComponent;
