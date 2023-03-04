"use client";

import { useEffect, useState } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState("United States");
  const [city, setCity] = useState("New York");
  const [query, setQuery] = useState("0.0.0.0");
  const [continent, setContinent] = useState("America");

  useEffect(() => {
    fetch(
      `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCountry(data.country);
        setCity(data.city);
        setQuery(data.query);
        setContinent(data.continent);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="flex  items-center justify-between text-xl font-semibold">
      <div>Country: {country}</div>
      <div>City: {city}</div>
      <div>IP Address: {query}</div>
      <div>Continent: {continent}</div>
    </div>
  );
}
