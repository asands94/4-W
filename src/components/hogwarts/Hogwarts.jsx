import React from 'react'
import { Link } from "react-router-dom"
import hogwartsmagic from "./hogwartsmagic.jpg"
import "./hogwarts.css"

export default function Hogwarts() {
  return (
    <>
      <div className="main-text-container">
        <h1 className="main-text-header">Hogwarts</h1>
      </div>
      <img className="background-image" src={hogwartsmagic} alt="blurred hogwarts castle background" />
      <div className="card-container">
        <Link to="/hogwarts-quiz"><button className="container-card hogwarts-card"></button></Link>
        <Link to="/new-diary"><button className="container-card2 hogwarts-card2"></button></Link>
        <Link to="/potions-class"><button className="container-card3 hogwarts-card3"></button></Link>
      </div>

    </>
  )
}
