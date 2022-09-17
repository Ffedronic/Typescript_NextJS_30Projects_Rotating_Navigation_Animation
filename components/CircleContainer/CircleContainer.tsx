import React from "react";
import Button from "./Button/Button";

function CircleContainer() {
  function toggleShowNav() {
    const open = document.getElementById("open");
    const close = document.getElementById("close");
    const container = document.querySelector(".container");
    
  }

  return (
    <div className="circle-container">
      <div className="circle">
        <Button id="close" icon="fas fa-times" />
        <Button id="open" icon="fas fa-bars" />
      </div>
    </div>
  );
}

export default CircleContainer;
