import React from "react";
import AutoCompleteText from "../../components/autoCompleteText/autoCompleteText";
import cities from "../../components/cities.js";

function HomePage() {
  return (
    <div>
      <AutoCompleteText items={cities} />
    </div>
  );
}

export default HomePage;
