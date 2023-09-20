

export default function Result(props) {
    return(        
    <div className="Result col-3">
        <div className="briefs">
      <p>Link to my <a href="https://github.com/nmaryy/weather-react-vite">github</a></p>
          <h1 id="city">{props.data.city}, {props.data.country}</h1>
          <div className="status">
                <div className="curr">
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    alt="img"
                  />
                </div>
                <div className="currtemp">
                  <span id="temp">{props.data.temp}°</span>
                  <span id="celcius">°C</span>
                  <span>|</span>
                  <span id="farenheit">°F</span>
                </div>
                <ul>
                  <li>Precipitation: 0%</li>
                  <li>Humidity: <span id="humidity">{props.data.humid}%</span></li>
                  <li>Wind: <span id="wind">{props.data.wind}km/h</span></li>
                </ul>
          </div>
          </div>
        <div className="specific">
          <p>Details:</p>
          <ul>
            <li>UV Index<span> 7</span></li>
            <li>Sunset <span>19:07</span></li>
            <li>Wind <span id="wind">{props.data.wind}km/h</span></li>
            <li>Precipitation <span>0mm</span></li>
            <li>Feels like <span>29°</span></li>
            <li>Humidity <span id="humidity">{props.data.humid}%</span></li>
            <li>Visibility <span>16km</span></li>
            <li>Pressure <span>1014hPa</span></li>
          </ul>
        </div>
    </div>
    )
}
