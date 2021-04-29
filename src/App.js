import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadWeatherData } from "./store/currentWeather/weather";
import { geopositionData } from "./store/geoPosition/location";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import HomePage from "./pages/home/homePage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(geopositionData());
    dispatch(loadWeatherData());
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
