import React from "react";
import "./Results.css";

const results = (props) => {
  let display = [];
  props.data.map((card) => {
    if (card.name.toLowerCase().includes(props.text)) {
      display.push(
        <div className="Results">
          <h2>{card.name}</h2>
          <img src={require(`./images/${card.img}`)} alt={card.name} />
          <p className="price">Rs. {card.price}</p>
          <p>{card.desc}</p>
        </div>
      );
    }
    return display;
  });

  return display.length === 0 ? (
    <div className="Results">
      <h2>No Record Found</h2>
    </div>
  ) : (
    display
  );
};

export default results;
