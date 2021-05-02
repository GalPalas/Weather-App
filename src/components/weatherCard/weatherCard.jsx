import React from "react";
import { useSelector } from "react-redux";
import {
  getCoordinates,
  getConditions,
} from "../../store/currentWeather/weather.js";
import { dateBuilder } from "./utils.js";
import _ from "lodash";

function WeatherCard() {
  const coordinates = useSelector(getCoordinates());
  const conditions = useSelector(getConditions());

  const city = _.get(coordinates, "EnglishName");
  const country = _.get(coordinates, "Country.ID");

  const temp = _.get(conditions, "[0].Temperature.Metric.Value");
  const desc = _.get(conditions, "[0].WeatherText");

  return (
    <div>
      {typeof coordinates !== "undefined" ? (
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-8">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    {city}, {country}
                  </h5>
                  <p className="card-date">{dateBuilder(new Date())}</p>
                  <h1>{Math.round(temp)}°c</h1>
                  <h2>{desc}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default WeatherCard;
