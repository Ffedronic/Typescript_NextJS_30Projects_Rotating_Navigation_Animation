import React from "react";

interface ButtonProps {
  id: string;
  icon: string;
}
function Button(props: ButtonProps) {
  const { id, icon } = props;

  return (
    <button id={id}>
      <i className={icon}></i>
    </button>
  );
}

export default Button;
