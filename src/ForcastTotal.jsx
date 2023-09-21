import React, {useState, useEffect}  from "react";
import ForcastDay from "./ForcastDay";
import axios from "axios";


export default function ForcastTotal(props) {
    let [loaded, setLoaded] = useState(false)
    let [forcast, setForcast] = useState(null)

    useEffect(()=>{
        setLoaded(false);
    }, [props.coordinates])


    function handleResponse(response) {
    setForcast(response.data.daily);
    setLoaded(true);
  }

    function load() {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if(loaded) {

      return(
          <div className="ForcastTotal col-2">
            {forcast.map(function(daily, index) {
                if(index <6) {

                    return (
                        <div className="days" key={index}>
                    <ForcastDay data={daily}/>
                    </div>
                )
            }else{
                return null
            }
            })}

        </div>
    )
}else {
    load()
    return null
}

}