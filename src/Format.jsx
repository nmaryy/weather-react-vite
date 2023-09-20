import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";

export default function Format(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

function handleResponse (response) {
  setWeatherData({
    ready : true,
    coords : response.data.coord,
    // sunset : response.data.sys.sunset * 1000,
    feels : response.data.main.feels_like,
    press : response.data.main.pressure,
    temp : Math.round(response.data.main.temp),
    humid: response.data.main.humidity,
    date: new Date(response.data.dt * 1000),
    desc: response.data.weather[0].description,
    icon: response.data.weather[0].icon,
    wind: response.data.wind.speed,
    city: response.data.name,
    country: response.data.sys.country,
    vis: response.data.visibility,
  })
  console.log(response)

}

  function getTemp (event) {
    event.preventDefault()
    search()
  }

  function handleCityChange (event) {
    setCity(event.target.value)
  }

  function search () {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if(weatherData.ready) {
    return (
      <div className="Format ">
            <Result data={weatherData}/>
        <div className="second col-3">
          <ul>
            <li>Weather</li>
            <li>
              <span id="day"></span><span id="hour"></span><span>:</span
              ><span id="min"> </span>
            </li>
            <li id="desc">Mostly sunny</li>
            <li className="formList">
                  </li>
              <form className="form" onSubmit={getTemp}>
                <input
                  type="
                    text"
                  placeholder="Enter a city"
                  autoFocus="on"
                  autoComplete="off"
                  id="input"
                  onChange={handleCityChange}
                />
                <input type="submit" value="Search" id="btn" className="btn" />
              </form>
              {/* <button id="btncurr" className="btn">Current Location</button> */}
          </ul>
        </div>
    </div>
    );
} else {
  search();
  return ("Loading...");
}
}