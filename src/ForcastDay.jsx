import Icon from "./Icon"

export default function ForcastDay (props) {
    function maxTemp() {
        let temp = Math.round(props.data.temp.max)
        return `${temp}°`
    }
    function minTemp() {
        let temp = Math.round(props.data.temp.min)
        return `${temp}°`
    }

    function day () {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun","Mon","Tue","Wed","Thr","Fri","Sat"];
        return days[day];
    }  

    return(
    <div className="ForcastDay">
            <ul>
              <li className="day">{day()}</li>
              <li className="icon">
                <Icon code={props.data.weather[0].icon} size={28}/>
              </li>
              <li className="temp"><span>{maxTemp()}</span> <span>{minTemp()}</span></li>
            </ul>
          </div>
    )

}