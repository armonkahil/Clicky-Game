import React from 'react'

function Col({ children }) {
  return (
    <div className="col-lg-10 col-xl-11 d-flex align-content-center text-center mx-auto">
      {children}
    </div>
  )
}

export default Col
