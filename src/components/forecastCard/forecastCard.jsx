import React, { useState, useEffect } from "react";
import Card from "./card";
import { useSelector } from "react-redux";
import {
  getCoordinates,
  getForecast,
} from "../../store/currentWeather/weather.js";
import { dateBuilder } from "../utils.js";
import _ from "lodash";
import "./forecastCard.css";

function ForecastCard() {
  const [forecast, setForecast] = useState([]);
  const coordinates = useSelector(getCoordinates());
  const forecastsData = useSelector(getForecast());

  const dailyForecasts = _.get(forecastsData, "DailyForecasts");
  const city = _.get(coordinates, "EnglishName");
  const country = _.get(coordinates, "Country.ID");
  const date = dateBuilder(new Date());

  useEffect(() => {
    setForecast(dailyForecasts);
  }, [setForecast, dailyForecasts]);

  if (forecast === undefined) {
    return <p>Loading Data...</p>;
  }

  return (
    <div>
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
          {forecast.map((item) => (
            <div className="col-2" key={item.EpochDate}>
              <Card
                dayInWeek={item.Date}
                minValue={Math.round(item.Temperature.Minimum.Value)}
                maxValue={Math.round(item.Temperature.Maximum.Value)}
                iconDescription={item.Day.IconPhrase}
                iconNumber={item.Day.Icon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ForecastCard;
