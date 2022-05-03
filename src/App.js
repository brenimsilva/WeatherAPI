import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/form/Form";
import Card from "./components/Card";
import Forecast from "./components/forecast/Forecast";
import Details from "./components/forecast/Details";
import Section from "./components/forecast/Section";
import img1 from "./imgs/d02.png";
import img2 from "./imgs/d01.png";
import img3 from "./imgs/r01.png";
import img4 from "./imgs/r02.png";
import img5 from "./imgs/n02.png";
import img6 from "./imgs/n01.png";

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
          setImg(img1);
          break;
        case "Clear":
          setImg(img2);
          break;
        case "Rain":
          setImg(img3);
          break;
        case "Extreme":
          setImg(img4);
          break;
      }
    } else {
      switch (description) {
        case "Clouds":
          setImg(img5);
          break;
        case "Clear":
          setImg(img6);
          break;
        case "Rain":
          setImg(img3);
          break;
        case "Extreme":
          setImg(img4);
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
