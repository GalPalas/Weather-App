import React from "react";
import _ from "lodash";
import { useSelector } from "react-redux";
import {
  getCoordinates,
  getConditions,
} from "../../store/currentWeather/weather.js";
import { dateBuilder, getWeatherIcon } from "./utils.js";
import "./weatherCard.css";

function WeatherCard() {
  const coordinates = useSelector(getCoordinates());
  const conditions = useSelector(getConditions());

  const ParentCity = _.get(coordinates, "ParentCity.EnglishName");
  const ParentCountry = _.get(coordinates, "AdministrativeArea.EnglishName");

  const city = _.get(coordinates, "EnglishName");
  const country = _.get(coordinates, "Country.ID");

  const temp = _.get(conditions, "[0].Temperature.Metric.Value");
  const desc = _.get(conditions, "[0].WeatherText");
  const icon = _.get(conditions, "[0].WeatherIcon");

  return (
    <div>
      {ParentCity === undefined || ParentCountry === undefined ? (
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-8">
              <div className="card">
                <div className="card-body">
                  <p className="card-title">
                    {city}, {country}
                  </p>
                  <p className="card-date">{dateBuilder(new Date())}</p>
                  <p className="card-temp">{Math.round(temp)}°c</p>
                  <p className="card-desc">{desc}</p>
                  {getWeatherIcon(icon)}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-8">
              <div className="card">
                <div className="card-body">
                  <p className="card-title">
                    {ParentCity}, {ParentCountry}
                  </p>
                  <p className="card-date">{dateBuilder(new Date())}</p>
                  <p className="card-temp">{Math.round(temp)}°c</p>
                  <p className="card-desc">{desc}</p>
                  {getWeatherIcon(icon)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherCard;
