import React, { Component } from "react";
// import style from "./style.css";

const SocialButton = (props) => {
  return (
    <div className="text-center social-btn">
      <a href={`/api/auth/${props.provider}`} className="btn">
        {props.children}
      </a>
    </div>
  );
};

export default SocialButton;
