import React from 'react'
import { Link } from "react-router-dom"
import redmagic from "./redmagic.png"
import "./diagon.css"

export default function DiagonAlley() {
  return (
    <>
      <div className="main-text-container">
        <h1 className="main-text-header">Diagon Alley</h1>
      </div>
      <img className="background-image" src={redmagic} alt="blurred red background" />
      <div className="card-container">
        <Link to="/diagon-alley-quiz"><button className="container-card diagon-card"></button></Link>

        <Link to="/gringotts"><button className="container-card3 diagon-card3"></button></Link>
      </div>

    </>
  )
}
