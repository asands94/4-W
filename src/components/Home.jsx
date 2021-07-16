import React from 'react'
import { Link } from "react-router-dom"
import Entrance from "./images/DiagonAlley.png"


export default function Home() {
  return (
    <>
      <Link to="/diagon-alley"><img className="main-images" src={Entrance} alt="Diagon Alley Entrance" /></Link>
    </>
  )
}
