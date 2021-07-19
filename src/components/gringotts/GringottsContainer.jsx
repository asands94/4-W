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
        <Link to="/magical-menagerie"><button className="gringotts-cards"></button></Link>
        <Link to="/flourish-and-blotts"><button className="gringotts-cards2"></button></Link>
        <Link to="/ollivanders"><button className="gringotts-cards3"></button></Link>
      </div>
    </>
  )
}
