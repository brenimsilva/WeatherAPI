import React from "react";
import "./Forecast.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function Forecast(props) {
  const days = {
    0: "Domingo",
    1: "Segunda",
    2: "Terca",
    3: "Quarta",
    4: "Quinta",
    5: "Sexta",
    6: "Sabado",
  };

  const months = {
    0: "Jan",
    1: "Fev",
    2: "Mar",
    3: "Abr",
    4: "Mai",
    5: "Jun",
    6: "Jul",
    7: "Ago",
    8: "Set",
    9: "Out",
    10: "Nov",
    11: "Dez",
  };

  const descriptionDictionary = {
    Clouds: "Nublado",
    Clear: "Céu limpo",
    Rain: "Tempo Chuvoso",
    Extreme: "Raios e Trovoadas",
  };
  const date = new Date();
  const day = date.getDay();
  const numDay = date.getDate();
  const month = date.getMonth();
  const styles = "forecast fade";

  return (
    <TransitionGroup>
      <CSSTransition key={props.cityName} timeout={300} classNames="fade">
        <div className={styles}>
          <div className="location_div">
            <i className="fa-solid fa-location-dot location_icon"></i>
            <h1 className="city_name">{props.cityName}</h1>
          </div>
          <div className="weather_div">
            <img src={props.img} className="weather_img" />
          </div>
          <h1 className="temp_h1">{props.temperature}</h1>
          <h4 className="description">
            {descriptionDictionary[props.description]}
          </h4>
          <p className="date">{`${days[day]}, ${numDay} ${months[month]}`}</p>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}
