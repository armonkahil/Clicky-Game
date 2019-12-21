import React from "react";
import "./style.css";

function MovieCard(props) {
  return (
    <>
      <div className="card text-white float-left" onClick={()=> props.picker(props.id)}>
        <img
          src={props.image}
          className="card-img img-fluid"
          alt={props.name}
          key={props.id}
        ></img>
        {/* <div className="card-img-overlay">
          <h1 className="card-text">{props.id}</h1>
        </div> */}
      </div>
    </>
  );
}

export default MovieCard;
