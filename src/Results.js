import React from "react";
// import images from './images/React.webp';
import "./Results.css";

const results = (props) =>
  props.data.map((card) => (
    <div className="Results">
      <h2>{card.name}</h2>
      <img src={require(`./images/${card.img}`)} alt={card.name} />
      <p className="price">{card.price}</p>
      <p>{card.desc}</p>
    </div>
  ));

export default results;
