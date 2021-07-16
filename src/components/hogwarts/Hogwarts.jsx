import React from 'react'
import { Link } from "react-router-dom"
import HogwartsImg from "./Hogwarts.jpg"

export default function Hogwarts() {
  return (
    <>
      <img className="main-images main-bg" src={HogwartsImg} alt="Hogwarts" />
      <Link to="/hogwarts-quiz"><button className="container-card-one">Hogwarts Quiz</button></Link>
      <Link to="/new-diary"><button className="container-card-two">Tom Riddles Diary</button></Link>
      <Link to="/potions-class"><button className="container-card-three">Potions Class</button></Link>
    </>
  )
}
