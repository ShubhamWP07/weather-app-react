import React from "react";

const TopButtons = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: "Patna",
    },
    {
      id: 2,
      title: "New Delhi",
    },
    {
      id: 3,
      title: "Mumbai",
    },
    {
      id: 4,
      title: "Gujarat",
    },
    {
      id: 5,
      title: "Rajasthan",
    },
  ];
  return (
    <div className="flex items-center justify-around mb-6 mt-10">
      {cities.map((city) => (
        <button
          onClick={() => {
            setQuery({ q: city.title });
          }}
          key={city.id}
          className="text-white text-lg font-medium"
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
