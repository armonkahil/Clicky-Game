import React from "react";

function Col(props) {
  return (
    <div className="col-10">
      {props.children}
    </div>
  );
}

export default Col;
