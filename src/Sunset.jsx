export default function Sunset(props) {
 let hour = props.date.getHours()
 if (hour < 10) {
    hour = `0${hour}`
 }
 let min = props.date.getMinutes()
 if (min < 10) {
    min = `0${min}`
 }

 return (
    <div className="Sunset">
    <p>Sunset <span>{hour}:{min}</span></p>
    </div>
 )
}