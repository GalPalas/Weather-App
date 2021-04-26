import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadWeatherData } from "./store/weather";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadWeatherData());
  }, [dispatch]);

  return <div className="App">Hello</div>;
}

export default App;
