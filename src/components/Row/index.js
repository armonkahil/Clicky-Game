import React from 'react'
import './style.css'

const Row = ({ children }) => {
  return (
    <div className="row justify-content-md-center mx-auto movies">
      {children}
    </div>
  )
}

export default Row
