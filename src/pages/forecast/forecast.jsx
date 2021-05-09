import React from "react";
import AutoCompleteText from "../../components/autoCompleteText/autoCompleteText";
import ForecastCard from "../../components/forecastCard/forecastCard";
import cities from "../../components/cities.js";
import "./forecast.css";

function Forecast() {
  return (
    <div className="forecast">
      <AutoCompleteText items={cities} />
      <ForecastCard />
    </div>
  );
}

export default Forecast;
