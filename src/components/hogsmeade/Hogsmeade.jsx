import React from 'react'
import { Link } from "react-router-dom"
import hogsmeademagic from "./hogsmeademagic.png"

export default function Hogsmeade() {
  return (
    <>
      <div className="main-text-container">
        <h1 className="main-text-header">Hogsmeade</h1>
      </div>
      <img className="background-image" src={hogsmeademagic} alt="blurred hogsmeade background" />
      <div className="card-container">
        <Link to="/hogsmeade-quiz"><button className="container-card">Quiz</button></Link>
        <Link to="/owl-post"><button className="container-card">Owl Post</button></Link>
        <Link to="/the-three-broomsticks"><button className="container-card">The Three Broomsticks</button></Link>
      </div>
    </>
  )
}
