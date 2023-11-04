import React from "react";
import ReactDOM from "react-dom";
import CalculatorNew from "./CalculatorNew"



const App = () => {
  return (
    <CalculatorNew/>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)