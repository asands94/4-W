import React from 'react'
import { Link } from "react-router-dom"
import HogsmeadeImg from "./Hogsmeade.png"

export default function Hogsmeade() {
  return (
    <>
      <img className="Main-Images Main-BG" src={HogsmeadeImg} alt="Hogsmeade" />
      <Link to="/hogsmeade-quiz"><button className="Container-Card-One">Quiz</button></Link>
      <Link to="/owl-post"><button className="Container-Card-Two">Owl Post</button></Link>
    </>
  )
}
