import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { citySearchCallBegan } from "../../store/currentWeather/api";
import { getFavoritesCards } from "../../store/favorites/card";
import { cardRemoved } from "../../store/favorites/card";
import { getWeatherIcon } from "../utils";
import "./favoritesCards.css";

function FavoritesCards() {
  const history = useHistory();
  console.log(history);
  const [favorites, setFavorites] = useState([]);
  const favoritesCardsData = useSelector(getFavoritesCards());
  const dispatch = useDispatch();

  useEffect(() => {
    setFavorites(favoritesCardsData);
  }, [setFavorites, favoritesCardsData]);

  const handleFavoriteCardClick = (card) => {
    dispatch(citySearchCallBegan({ cityName: card.city }));
    history.goBack();
  };
  return (
    <div className="container">
      {favorites.length > 0 ? (
        <h1 className="text-center heading">Favorites Cards</h1>
      ) : (
        <h1 className="text-center heading">No Weather Cards Selected</h1>
      )}
      <div className="row justify-content-around">
        {favorites.map((card) => (
          <div className="col-3" key={card.id}>
            <div className="card text-center">
              <i
                onClick={() => dispatch(cardRemoved({ id: card.id }))}
                className="fa fa-times d-flex justify-content-start p-2 col-1"
                aria-hidden="true"
              ></i>
              <div
                className="card-body"
                onClick={() => handleFavoriteCardClick(card)}
              >
                <p className="city-country">
                  {card.city},{card.country}
                </p>
                <p className="temp">{card.temp}</p>
                <p className="desc">{card.desc}</p>
                {getWeatherIcon(card.icon)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoritesCards;
