import React from 'react'
import { Link } from "react-router-dom"
import HogwartsImg from "./Hogwarts.jpg"

export default function Hogwarts() {
  return (
    <>
      <img className="Main-Images" src={HogwartsImg} alt="Hogwarts" />
      <Link to="/hogwarts-quiz"><button className="Container-Card-One">Hogwarts Quiz</button></Link>
      <Link to="/tom-riddle-diary"><button className="Container-Card-Two">Tom Riddles Diary</button></Link>
    </>
  )
}
