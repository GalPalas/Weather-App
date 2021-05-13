import React from "react";
import { getWeatherIcon, getDayInWeek } from "../utils.js";

function Card({ dayInWeek, minValue, maxValue, iconDescription, iconNumber }) {
  return (
    <div className="card text-center">
      <div className="card-body">
        <p className="days">{getDayInWeek(dayInWeek)}</p>

        <p className="temperature">
          {minValue} - {maxValue} °c
        </p>
        <p className="icon-description">{iconDescription}</p>
        {getWeatherIcon(iconNumber)}
      </div>
    </div>
  );
}

export default Card;
