import React from "react";
import './style.css'

function Row(props) {
  return <div className={`row${props.fluid ? "-fluid" : ""} justify-content-md-center mx-auto movies`}>{props.children}</div>;
}

export default Row;