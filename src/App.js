import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/form/Form";
import Card from "./components/Card";
import Forecast from "./components/forecast/Forecast";
import Details from "./components/forecast/Details";
import Section from "./components/forecast/Section";
import Image from "./components/forecast/Image";
import Coord from "./components/Coord";

//
function App() {
  const [weather, setWeather] = useState([]);
  const [img, setImg] = useState("");

  function changeWeatherImage(image) {
    setImg(image);
  }

  function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&units=metric&appid=71d08df38f18bf71c6e024da2da17707`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setWeather(data);
        changeWeatherImage(data.weather[0].main);
      });
  }

  function saveFormCity(cityInput) {
    fetchWeatherData(cityInput);
  }

  return (
    <div className="App">
      <Card>
        <Section>
          {!weather.main ? (
            <Forecast cityName="Cidade" temperature="" description="---" />
          ) : (
            <React.Fragment>
              <Image
                onChangeImage={changeWeatherImage}
                description={weather.weather[0].main}
              />
              <Forecast
                cityName={weather.name}
                temperature={Math.round(weather.main.temp) + "°"}
                description={weather.weather[0].main}
                img={img}
              />
            </React.Fragment>
          )}
          <hr />
          {!weather.main ? (
            <Details wind="-" humidity="-" />
          ) : (
            <Details
              wind={`${weather.wind.speed} Km/h`}
              humidity={weather.main.humidity}
            />
          )}
        </Section>
        <Form onSaveForm={saveFormCity} />
      </Card>
      <Coord onGetCoords={saveFormCity} />
    </div>
  );
}

export default App;
