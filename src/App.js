import React, { useEffect, useState } from "react";

import "./index.css";
import TopButtons from "./Components/TopButtons";
import Inputs from "./Components/Inputs";
import TimeAndLocation from "./Components/TimeAndLocation";
import TempDetails from "./Components/TempDetails";
import getFormattedWeatherData from "./Services/WeatherService";

const App = () => {
  const [query, setQuery] = useState({ q: "patna" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getFormattedWeatherData({ ...query, units });

        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchWeather();
  }, [query, units]);

  return (
    <div className="mx-auto w-screen h-screen p-16  bg-center bg-no-repeat bg-[url('./assets/w-bg-4.jpg')] bg-gray-600 bg-blend-multiply bg-cover">
      {/* <p className="text-white font-semibold mx-auto">THE. WEATHER</p> */}
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TempDetails weather={weather} />
        </div>
      )}
    </div>
  );
};

export default App;
