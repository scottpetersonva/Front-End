import React from "react";
import "./CapsCard.css";

const CapsCard = props => (

  <div className="container" onClick={props.onCardClick}>
    <div className="col m3 s6 center-align blue darken-4 img-div card">
      <img className="player-image" alt={props.name} src={props.image} />
    </div>
  </div>

);

export default CapsCard;

