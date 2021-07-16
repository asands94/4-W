import React from 'react'
import { Link } from "react-router-dom"

export default function Hogwarts() {
  return (
    <>
      <Link to="/hogwarts-quiz"><button className="container-card-one">Hogwarts Quiz</button></Link>
      <Link to="/new-diary"><button className="container-card-two">Tom Riddles Diary</button></Link>
      <Link to="/potions-class"><button className="container-card-three">Potions Class</button></Link>
    </>
  )
}
