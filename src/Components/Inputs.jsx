import React, { useState } from "react";
import { UilSearch } from "@iconscout/react-unicons";

const Inputs = ({ setQuery }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") {
      setQuery({ q: city });
    }
  };

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
      </div>
    </div>
  );
};

export default Inputs;
