import React from "react";
import "./Toolbar.css";

const toolbar = (props) => (
  <div className="topnav">
    <a>
      <button className="btn btn-danger">Udemy 2.0</button>
    </a>

    <a>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target={"#" + props.id}
      >
        <span className="glyphicon glyphicon-plus">&nbsp;</span>Add Course
      </button>
    </a>
    <input type="text" placeholder="Search.." onChange={props.changed} />
  </div>
);

export default toolbar;
