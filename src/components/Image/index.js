import React from 'react'
import './style.css'

function Image(props) {
  return (
    <>
    {props.friends.map(item=> (
       <img src={item.image} className="img-fluid img-thumbnail float-left" alt={item.name} key={item.id}></img>
    ))
    
  }
  </>
  )
}

export default Image