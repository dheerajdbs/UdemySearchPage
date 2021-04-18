import React from "react";
import Logo from "./images/React.webp";
import "./Toolbar.css";

const toolbar = (props) => (
  <div className="topnav">
    {/* <a className="active" href="/">
      Home
    </a>
    <a href="/">About</a>
    <a href="/">Contact</a> */}
    <a className="Logo">
      <img src={Logo} alt="Temp" />
    </a>
    <a><button className = "btn btn-danger">Sasta Udemy</button></a>
    <input type="text" placeholder="Search.." />
  </div>
);

export default toolbar;
