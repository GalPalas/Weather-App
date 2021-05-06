import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { citySearchCallBegan } from "../../store/currentWeather/api";
import "./autoCompleteText.css";

function AutoCompleteText({ items }) {
  const [suggestion, setSuggestion] = useState([]);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onTextCanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = items.sort().filter((v) => regex.test(v));
    }
    setSuggestion(suggestions);
    setText(value);
  };

  const renderSuggestions = () => {
    if (suggestion.length === 0) return null;
    return (
      <ul className="cities">
        {suggestion.map((item) => (
          <li key={item} onClick={() => suggestionSelected(item)}>
            {item}
          </li>
        ))}
      </ul>
    );
  };

  const suggestionSelected = (value) => {
    setText(value);
    setSuggestion([]);
    dispatch(citySearchCallBegan({ cityName: value }));
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 mt-5">
            <div className="autoCompleteText">
              <input
                className="search form-control"
                type="text"
                value={text}
                placeholder="Search city..."
                onChange={onTextCanged}
              ></input>
              {renderSuggestions()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AutoCompleteText;
