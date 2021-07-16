import React from 'react'
import { Link } from "react-router-dom"

export default function DiagonAlley() {
  return (
    <>

      <Link to="/diagon-alley-quiz"><button className="container-card-one">Quiz</button></Link>
      <Link to="/gringotts"><button className="container-card-two">Gringotts</button></Link>
    </>
  )
}
