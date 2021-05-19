import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getFavoritesCards } from "../../store/favorites/card";
import "./favoritesCards.css";

function FavoritesCards() {
  const [favorites, setFavorites] = useState([]);
  const favoritesCardsData = useSelector(getFavoritesCards());

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
              <div className="card-body">
                <h2>{card.city}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoritesCards;
