import React from "react";
import AutoCompleteText from "../../components/autoCompleteText/autoCompleteText";
import cities from "../../components/cities.js";
import { ToastContainer } from "react-toastify";

function HomePage() {
  return (
    <div>
      <AutoCompleteText items={cities} />
      <ToastContainer position="bottom-left" />
    </div>
  );
}

export default HomePage;
