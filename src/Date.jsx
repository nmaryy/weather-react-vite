export default function Date(props) {
 let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
 
 let day = days[props.date.getDay()]
 let hour = props.date.getHours()
 if (hour < 10) {
    hour = `0${hour}`
 }
 let min = props.date.getMinutes()
 if (min < 10) {
    min = `0${min}`
 }

 return (
    <div className="Date">
      <p>{day}</p>  
    <p>{hour}:{min}</p>
    </div>
 )
}