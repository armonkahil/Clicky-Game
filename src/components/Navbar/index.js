import React from "react";
import "./style.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between text-center">
        <span>
          <a className="navbar-brand" href="https://www.marvel.com/movies">
            <img
              className="img-fluid navbar-text"
              src="https://i.imgur.com/YsPuzSV.png"
              width="100"
              height="100"
              alt=""
            ></img>{" "}
            Clicky Game
          </a>
        </span>
        <span className="navbar-text text-light mr-5">
          Click any picture to start
        </span>
        <span className="navbar-text text-light">Score: 0 | High Score: 0</span>
      </nav>
    </>
  );
}

export default Navbar;