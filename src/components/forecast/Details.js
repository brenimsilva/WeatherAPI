import React from "react";
import "./Details.css";
export default function Details(props) {
  return (
    <div className="details">
      <div className="windDiv">
        <i className="fa-solid fa-wind"></i>
        <p className="stat">{props.wind}</p>
        <p className="statName">Vento</p>
      </div>
      <div className="humidityDiv">
        <i className="fa-solid fa-droplet"></i>
        <p>{`${props.humidity} %`}</p>
        <p className="statName">Umidade</p>
      </div>
    </div>
  );
}
