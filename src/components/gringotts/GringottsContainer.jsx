import React from 'react'
import { Link } from "react-router-dom"
import redmagic from "./redmagic.png"
import "./gringotts.css"



export default function GringottsContainer() {



  return (
    <>
      <div className="main-text-container">
        <h1 className="main-text-header">Diagon Alley</h1>
      </div>
      <img className="background-image" src={redmagic} alt="blurred red background" />
      <div className="card-container">
        <Link to="/magical-menagerie"><button className="container-card diagon-card4"></button></Link>
        <Link to="/flourish-and-blotts"><button className="container-card2 diagon-card5"></button></Link>
        <Link to="/ollivanders"><button className="container-card3 diagon-card6"></button></Link>
      </div>
    </>
  )
}
