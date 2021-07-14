import React from 'react'
import { Link } from "react-router-dom"
import FullDA from "./images/FullDA.png"

export default function DiagonAlley() {
  return (
    <>
      <img className="Main-Images Main-BG" src={FullDA} alt="Diagon Alley" />

      <Link to="/diagon-alley-quiz"><button className="Container-Card-One">Quiz</button></Link>
    </>
  )
}
