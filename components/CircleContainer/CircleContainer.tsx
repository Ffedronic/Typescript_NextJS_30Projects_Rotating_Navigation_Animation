import React from "react";
import Button from "./Button/Button";

function CircleContainer() {
  return (
    <div className="circle-container">
      <div className="circle">
        <Button id="close" icon="fas fa-times"/>
        <Button id="open" icon="fas fa-bars"/>
      </div>
    </div>
  );
}

export default CircleContainer;
