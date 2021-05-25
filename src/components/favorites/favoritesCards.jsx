import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { citySearchCallBegan } from "../../store/currentWeather/api";
import { getFavoritesCards } from "../../store/favorites/card";
import { cardRemoved } from "../../store/favorites/card";
import { getWeatherIcon } from "../utils";
import "./favoritesCards.css";

function FavoritesCards() {
  const [favorites, setFavorites] = useState([]);
  const favoritesCardsData = useSelector(getFavoritesCards());
  const dispatch = useDispatch();

  useEffect(() => {
    setFavorites(favoritesCardsData);
  }, [setFavorites, favoritesCardsData]);

  return (
    <div className="container">
      <h1 className="text-center heading">Favorites Cards</h1>
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
                onClick={() =>
                  dispatch(citySearchCallBegan({ cityName: card.city }))
                }
              >
                <p>
                  {card.city},{card.country}
                </p>
                <p>{card.temp}</p>
                <p>{card.desc}</p>
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
