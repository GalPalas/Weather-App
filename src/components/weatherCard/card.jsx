import React from "react";
import { getWeatherIcon } from "../utils";
import "./card.css";

function Card({
  city,
  country,
  date,
  temp,
  desc,
  icon,
  ParentCity,
  ParentCountry,
}) {
  return (
    <div>
      {ParentCity === undefined || ParentCountry === undefined ? (
        <div className="card">
          <div className="card-body">
            <p className="card-title">
              {city}, {country}
            </p>
            <p className="card-date">{date}</p>
            <p className="card-temp">{temp}°c</p>
            <p className="card-desc">{desc}</p>
            {getWeatherIcon(icon)}
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="card-body">
            <p className="card-title">
              {ParentCity}, {ParentCountry}
            </p>
            <p className="card-date">{date}</p>
            <p className="card-temp">{temp}°c</p>
            <p className="card-desc">{desc}</p>
            {getWeatherIcon(icon)}
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
