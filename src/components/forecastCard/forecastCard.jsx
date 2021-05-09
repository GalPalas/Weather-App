import React from "react";
import Card from "./card";
import { useSelector } from "react-redux";
import {
  getCoordinates,
  getConditions,
} from "../../store/currentWeather/weather.js";
import { dateBuilder, getWeatherIcon } from "../utils.js";
import _ from "lodash";
import "./forecastCard.css";

function ForecastCard() {
  const coordinates = useSelector(getCoordinates());
  const conditions = useSelector(getConditions());

  const city = _.get(coordinates, "EnglishName");
  const country = _.get(coordinates, "Country.ID");
  const date = dateBuilder(new Date());

  //   var Xmas95 = new Date(date);
  //   var weekday = Xmas95.getDay();

  //   console.log(weekday);

  //   var options = { weekday: "long" };
  //   console.log(new Intl.DateTimeFormat("en-US", options).format(Xmas95));

  return (
    <div className="container">
      <div className="row justify-content-end">
        <button className="btn btn-primary btn-lg ">Add To Favorites</button>
      </div>

      <div className="row text-center forecast-top">
        <div className="col-md-12">
          <p className="forecast-card-title">
            {city}, {country}
          </p>
          <p className="forecast-card-date">{date}</p>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-2">
          <Card />
        </div>
        <div className="col-2">
          <Card />
        </div>
        <div className="col-2">
          <Card />
        </div>
        <div className="col-2">
          <Card />
        </div>
        <div className="col-2">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default ForecastCard;
