import React from 'react'
import './style.css'

function MovieCard(props) {
  return (
    <>
    {props.movies.map(item=> (
      <div className="card text-white float-left">
      
       <img src={item.image} className="card-img img-fluid" alt={item.name} key={item.id}></img>
       <div className="card-img-overlay">
    <h1 className="card-text">{item.id}</h1>
       </div>
  </div>
      
    ))
    
  }
  </>
  )
}

export default MovieCard