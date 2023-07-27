import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

const Inputs = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") {
      setQuery({ q: city });
    }
  };

  // const handleLocationClick = () => {
  //   if (navigator.geolocation)
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       let lat = position.coords.latitude;
  //       let lon = position.coords.lon;

  //       setQuery({
  //         lat,
  //         lon,
  //       });
  //     });
  // };

  return (
    <div className="flex flex-row justify-center my-8 gap-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          className="text-sm p-3 font-normal w-5/6 shadow-xl focus:outline-none capitalize"
          placeholder="Enter location"
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        {/* <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        /> */}
      </div>
      {/* <div className="flex flex-row  items-center justify-center">
        <button
          name="meteric "
          className="text-xl text-white font-medium hover:scale-125"
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          name="imperial "
          className="text-xl text-white font-medium hover:scale-125"
        >
          °F
        </button>
      </div> */}
    </div>
  );
};

export default Inputs;
