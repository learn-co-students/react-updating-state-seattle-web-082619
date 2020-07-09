import React from "react";
import ReactDOM from "react-dom";
import ClickityClick from "./components/ClickityClick";

ReactDOM.render(
  <div>
    <ClickityClick />
  </div>,
  document.getElementById("root")
);

//the render method probably takes two arguments:
// the html wrapper and the refererence to the element with id='root'
