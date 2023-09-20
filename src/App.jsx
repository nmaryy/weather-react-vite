import "bootstrap/dist/css/bootstrap.css"
import './App.css'
// import Form from "./Form"
// import Result from "./Result"
import Format from "./Format"
import Daily from "./Daily"

function App() {

  return (
    <div className="App">

    {/* <Result/> */}
    <Format defaultCity="Berlin"/>
    <Daily/>
    </div>
  )
}

export default App
