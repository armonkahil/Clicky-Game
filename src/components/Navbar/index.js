import React from 'react'
import './style.css'

const Navbar = ({ theme, score, highScore }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between text-center sticky-top">
        <span>
          <a className="navbar-brand" href="https://www.marvel.com/movies">
            <img
              className="img-fluid navbar-text"
              src="https://i.imgur.com/YsPuzSV.png"
              width="100"
              height="100"
              alt=""
            />{' '}
            Clicky Game
          </a>
        </span>
        <h2 className="navbar-text text-light mr-5" onClick={() => theme()}>
          Click any picture to start
        </h2>
        <span className="navbar-text text-light">
          Score: {score} | High Score: {highScore}
        </span>
      </nav>
    </>
  )
}

export default Navbar
