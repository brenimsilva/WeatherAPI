import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/form/Form";
import Card from "./components/Card";
import Forecast from "./components/forecast/Forecast";
import Details from "./components/forecast/Details";
import Section from "./components/forecast/Section";

//
function App() {
  const date = new Date();
  const time = date.getHours();
  const [weather, setWeather] = useState([]);
  const [img, setImg] = useState("");

  function changeWeatherImage(description) {
    if (time >= 6 && time <= 18) {
      switch (description) {
        case "Clouds":
          setImg("../imgs/d02.png");
          break;
        case "Clear":
          setImg("../imgs/d01.png");
          break;
        case "Rain":
          setImg("../imgs/r01.png");
          break;
        case "Extreme":
          setImg("../imgs/r02.png");
          break;
      }
    } else {
      switch (description) {
        case "Clouds":
          setImg("../imgs/n02.png");
          break;
        case "Clear":
          setImg("../imgs/n01.png");
          break;
        case "Rain":
          setImg("../imgs/r01.png");
          break;
        case "Extreme":
          setImg("../imgs/r02.png");
          break;
      }
    }
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
            <Forecast
              cityName={weather.name}
              temperature={Math.round(weather.main.temp) + "°"}
              description={weather.weather[0].main}
              img={img}
            />
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
    </div>
  );
}

export default App;
