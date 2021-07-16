import React from 'react'
import { Link } from "react-router-dom"
import HogsmeadeImg from "./Hogsmeade.png"

export default function Hogsmeade() {
  return (
    <>
      <img className="main-images main-bg" src={HogsmeadeImg} alt="Hogsmeade" />
      <Link to="/hogsmeade-quiz"><button className="container-Card-one">Quiz</button></Link>
      <Link to="/owl-post"><button className="container-Card-two">Owl Post</button></Link>
      <Link to="/the-three-broomsticks"><button className="container-card-three">The Three Broomsticks</button></Link>
    </>
  )
}
