import React from "react";
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

export default function Coord() {
  return (
    <CoordDiv>
      <CoordButton
        type="button"
        value="Minha localização"
        className="btn_local"
      />
    </CoordDiv>
  );
}
