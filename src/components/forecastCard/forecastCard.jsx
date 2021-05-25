import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getDailyForecasts,
  getForecastsCardData,
} from "../../store/currentWeather/weather.js";
import { cardAdded } from "../../store/favorites/card";
import Card from "./card";
import "./forecastCard.css";

function ForecastCard() {
  const forecast = useSelector(getDailyForecasts());
  const {
    key,
    city,
    country,
    date,
    temp,
    desc,
    icon,
    ParentCity,
    ParentCountry,
  } = useSelector(getForecastsCardData());

  const dispatch = useDispatch();

  if (forecast === undefined) {
    return <p>Loading Data...</p>;
  }

  return (
    <div className="container">
      <div className="row justify-content-end">
        <button
          className="btn btn-primary btn-lg"
          onClick={() =>
            dispatch(
              cardAdded({
                key,
                city,
                country,
                temp,
                desc,
                icon,
                ParentCity,
                ParentCountry,
              })
            )
          }
        >
          Add To Favorites
        </button>
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
  );
}

export default ForecastCard;
