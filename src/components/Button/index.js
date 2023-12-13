import React from "react";

const Button = ({ title, disabled, onClick }) => {
  return (
    <button className="button" disabled={disabled} onClick={onClick}>
      <span className="buttonText">{title}</span>
    </button>
  );
};

export default Button;
