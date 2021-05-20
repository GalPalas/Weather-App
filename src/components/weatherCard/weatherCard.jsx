import React from "react";
import { useSelector } from "react-redux";
import { getMainWeatherCardData } from "../../store/currentWeather/weather";
import Card from "./card";
import "./weatherCard.css";

function WeatherCard() {
  const { city, country, date, temp, desc, icon, ParentCity, ParentCountry } =
    useSelector(getMainWeatherCardData());

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-8">
            <Card
              city={city}
              country={country}
              date={date}
              temp={temp}
              desc={desc}
              icon={icon}
              ParentCity={ParentCity}
              ParentCountry={ParentCountry}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
