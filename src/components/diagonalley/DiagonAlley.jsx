import React from 'react'
import { Link } from "react-router-dom"
import FullDA from "./images/FullDA.png"

export default function DiagonAlley() {
  return (
    <>
      <img className="main-images Main-BG" src={FullDA} alt="diagon Alley" />

      <Link to="/diagon-alley-quiz"><button className="container-card-one">Quiz</button></Link>
      <Link to="/gringotts"><button className="container-Card-ywo">Gringotts</button></Link>
    </>
  )
}
