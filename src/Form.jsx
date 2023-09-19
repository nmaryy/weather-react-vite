import React, { useState } from "react";
import axios from "axios";
const key = "6e6ec494746b5229a9f2d526478c924c";

export default function Form(props) {
  let [city, setCity] = useState(null);
  let [temp, setTemp] = useState(null);

  function handle(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    if (city !== null) {
      axios.get(url).then(display);
    }
  }

  function change(event) {
    setCity(event.target.value);
  }

  function display(response) {
    setTemp(Math.round(response.data.main.temp));
  }

  return (
    <>
      {temp === null ? (
        <div className="Form">
          <form onSubmit={handle}>
            <input
              type="search"
              placeholder="type city here"
              onChange={change}
            />
            <input type="submit" value="Search" />
          </form>
        </div>
      ) : (
        <div className="Form">
          <form onSubmit={handle}>
            <input
              type="search"
              placeholder="type city here"
              onChange={change}
            />
            <input type="submit" value="Search" />
          </form>
          <h3>
            The temperature in {city} is {temp}°C
          </h3>
        </div>
      )}
    </>
  );
}