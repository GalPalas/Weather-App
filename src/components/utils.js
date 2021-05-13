export const getDayInWeek = (dayInWeek) => {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    new Date(dayInWeek)
  );
};

export const dateBuilder = (d) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
};

export const getWeatherIcon = (iconNumber) => {
  switch (iconNumber) {
    case 1:
      return <img src="/icons/sunny.png" alt="Sunny"></img>;
    case 2:
      return <img src="/icons/Partly_Sunny.png" alt="Mostly Sunny"></img>;
    case 3:
      return <img src="/icons/Partly_Sunny.png" alt="Partly Sunny"></img>;
    case 4:
      return (
        <img src="/icons/Partly_Sunny.png" alt="Intermittent Clouds"></img>
      );
    case 5:
      return <img src="/icons/Partly_Sunny.png" alt="Hazy Sunshine"></img>;
    case 6:
      return <img src="/icons/Partly_Sunny.png" alt="Mostly Cloudy"></img>;
    case 7:
      return <img src="/icons/cloud.png" alt="Cloudy"></img>;
    case 8:
      return <img src="/icons/Overcast.png" alt="Overcast"></img>;
    case 11:
      return <img src="/icons/fog.png" alt="Fog"></img>;
    case 12:
      return <img src="/icons/Showers.png" alt="Showers"></img>;
    case 13:
      return (
        <img
          src="/icons/Mostly_Cloudy.png"
          alt="Mostly Cloudy w/ Showers"
        ></img>
      );
    case 14:
      return (
        <img src="/icons/Mostly_Cloudy.png" alt="Partly Sunny w/ Showers"></img>
      );
    case 15:
      return <img src="/icons/T-Storms.png" alt="T-Storms"></img>;
    case 16:
      return (
        <img src="/icons/T-Storms.png" alt="Mostly Cloudy w/ T-Storms"></img>
      );
    case 17:
      return (
        <img src="/icons/T-Storms.png" alt="Partly Sunny w/ T-Storms"></img>
      );
    case 18:
      return <img src="/icons/rain.png" alt="Rain"></img>;
    case 19:
      return <img src="/icons/Flurries.png" alt="Flurries"></img>;
    case 20:
      return <img src="/icons/hail.png" alt="Mostly Cloudy w/ Flurries"></img>;
    case 21:
      return <img src="/icons/hail.png" alt="Partly Sunny w/ Flurries"></img>;
    case 22:
      return <img src="/icons/snow.png" alt="Snow"></img>;
    case 23:
      return <img src="/icons/snowy.png" alt="Mostly Cloudy w/ Snow"></img>;
    case 24:
      return <img src="/icons/ice.png" alt="Ice"></img>;
    case 25:
      return <img src="/icons/sleet.png" alt="Sleet"></img>;
    case 26:
      return <img src="/icons/snowing.png" alt="Freezing Rain"></img>;
    case 29:
      return (
        <img
          src="/icons/snowing.png"
          alt="Rain and Snow
      "
        ></img>
      );
    case 30:
      return (
        <img
          src="/icons/hot.png"
          alt="Hot
        "
        ></img>
      );
    case 31:
      return (
        <img
          src="/icons/cold.png"
          alt="Cold
          "
        ></img>
      );
    case 32:
      return (
        <img
          src="/icons/windy.png"
          alt="Windy
            "
        ></img>
      );
    case 33:
      return <img src="/icons/clear.png" alt="Clear"></img>;
    case 34:
      return (
        <img
          src="/icons/cloudy-night.png"
          alt="Mostly Clear
      "
        ></img>
      );
    case 35:
      return (
        <img
          src="/icons/cloudy-night.png"
          alt="Partly Cloudy
      "
        ></img>
      );
    case 36:
      return (
        <img
          src="/icons/cloudy-night.png"
          alt="Intermittent Clouds
      "
        ></img>
      );
    case 37:
      return (
        <img
          src="/icons/Hazy_Moonlight.png"
          alt="Hazy_Moonlight
      "
        ></img>
      );

    case 38:
      return (
        <img
          src="/icons/Mostly_Cloudy_moon.png"
          alt="Mostly_Cloudy_Moon
      "
        ></img>
      );
    case 39:
      return (
        <img
          src="/icons/Showers_moon.png"
          alt="Partly Cloudy w/ Showers
      "
        ></img>
      );
    case 40:
      return (
        <img
          src="/icons/Showers_moon.png"
          alt="Mostly Cloudy w/ Showers
      "
        ></img>
      );
    case 41:
      return (
        <img
          src="/icons/storm_moon.png"
          alt="Partly Cloudy w/ T-Storms
      "
        ></img>
      );
    case 42:
      return (
        <img
          src="/icons/storm_moon.png"
          alt="Mostly Cloudy w/ T-Storms
      "
        ></img>
      );
    case 43:
      return (
        <img
          src="/icons/snow_moon.png"
          alt="Mostly Cloudy w/ T-Storms
      "
        ></img>
      );
    case 44:
      return (
        <img
          src="/icons/snow_moon.png"
          alt="Mostly Cloudy w/ T-Storms
      "
        ></img>
      );

    default:
      return null;
  }
};
