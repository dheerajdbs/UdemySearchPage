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
    <a>
      <button className="btn btn-danger">Udemy 2.0</button>
    </a>

    <a>
      
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"  
        data-target={'#' + props.id}
      ><span className="glyphicon glyphicon-plus">&nbsp;</span>Add Course</button>
    </a> 
    {/* <a  class="btn btn-info btn-lg">
          <span class="glyphicon glyphicon-plus"></span> Add Course
        </a> */}
    <input type="text" placeholder="Search.." onChange={props.changed} />
  </div>
);

export default toolbar;
