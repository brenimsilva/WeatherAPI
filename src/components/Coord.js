import React, { useEffect } from "react";
import styles from "styled-components";

const CoordButton = styles.input`
color: white;
background-color: #FF865E;
margin-top: 25px;
cursor: pointer;
transition: all 0.5s ease;
border-radius: 8px;
padding: 10px;
border-style: none;
&:hover {
    background-color: #ff865ec7;
    border: 1px solid white;
    transform: translateY(-5%);
}`;

const CoordDiv = styles.div`
display: flex;
justify-content: center`;

//API DATA

export default function Coord(props) {

  const getCoord = function () {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (err) => reject(err)
      );
    });
  };

  function submitCoords() {
    getCoord().then((data) => {
      fetch(
        `https://geocode.xyz/${data.coords.latitude},${data.coords.longitude}?geoit=json`
      )
        .then((res) => res.json())
        .then((data) => props.onGetCoords(data.city));
    });
  }

  return (
    <CoordDiv>
      <CoordButton
        type="button"
        value="Minha localização"
        className="btn_local"
        onClick={submitCoords}
      />
    </CoordDiv>
  );
}
