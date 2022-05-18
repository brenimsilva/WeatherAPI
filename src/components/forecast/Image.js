import React from "react";
import img1 from "../../imgs/d02.png";
import img2 from "../../imgs/d01.png";
import img3 from "../../imgs/r01.png";
import img4 from "../../imgs/r02.png";
import img5 from "../../imgs/n02.png";
import img6 from "../../imgs/n01.png";
export default function Image({ onChangeImage, description }) {
  const date = new Date();
  const time = date.getHours();

  if (time >= 6 && time <= 18) {
    switch (description) {
      case "Clouds":
        onChangeImage(img1);
        break;
      case "Clear":
        onChangeImage(img2);
        break;
      case "Rain":
        onChangeImage(img3);
        break;
      case "Extreme":
        onChangeImage(img4);
        break;
    }
  } else {
    switch (description) {
      case "Clouds":
        onChangeImage(img5);
        break;
      case "Clear":
        onChangeImage(img6);
        break;
      case "Rain":
        onChangeImage(img3);
        break;
      case "Extreme":
        onChangeImage(img4);
        break;
    }
  }
}
