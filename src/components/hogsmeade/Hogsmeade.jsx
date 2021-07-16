import React from 'react'
import { Link } from "react-router-dom"

export default function Hogsmeade() {
  return (
    <div className="boxes-container">
      <Link to="/hogsmeade-quiz"><button className="container-card-one">Quiz</button></Link>
      <Link to="/owl-post"><button className="container-card-two">Owl Post</button></Link>
      <Link to="/the-three-broomsticks"><button className="container-card-three">The Three Broomsticks</button></Link>
    </div>
  )
}
