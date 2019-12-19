import React from "react";

function Col(props) {
  return (
    <div className="col-10 movies d-flex align-content-center text-center mx-auto">
      {props.children}
    </div>
  );
}

export default Col;
