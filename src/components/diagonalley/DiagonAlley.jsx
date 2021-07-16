import React from 'react'
import { Link } from "react-router-dom"
import FullDA from "./images/FullDA.png"

export default function DiagonAlley() {
  return (
    <>
      <img className="main-images main-bg" src={FullDA} alt="diagon Alley" />

      <Link to="/diagon-alley-quiz"><button className="container-card-one">Quiz</button></Link>
      <Link to="/gringotts"><button className="container-card-two">Gringotts</button></Link>
    </>
  )
}
