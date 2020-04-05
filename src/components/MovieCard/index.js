import React from 'react'
import './style.css'

const MovieCard = ({ picker, image, name, id }) => {
  return (
    <>
      <div className="card text-white float-left" onClick={() => picker(id)}>
        <img src={image} className="card-img img-fluid" alt={name} key={id} />
      </div>
    </>
  )
}

export default MovieCard
