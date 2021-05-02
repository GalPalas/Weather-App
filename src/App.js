import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { geoPositionData } from "./store/currentWeather/weather";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import HomePage from "./pages/home/homePage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(geoPositionData());
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
