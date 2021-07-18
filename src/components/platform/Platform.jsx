import React from 'react'
import { Link } from "react-router-dom"
import trainmagic from "./trainmagic.png"

export default function Platform() {
  return (
    <>
      <div className="main-text-container">
        <h1 className="main-text-header">Platform 9 <sup>3/4</sup></h1>
      </div>
      <img className="background-image" src={trainmagic} alt="blurred train background" />
      <div className="card-container">
        <Link to="/hogwarts"><button className="container-card">Hogwarts</button></Link>
        <Link to="/random"><button className="container-card">Random</button></Link>
        <Link to="/hogsmeade"><button className="container-card">Hogsmeade</button></Link>
      </div>

    </>
  )
}
