import React from 'react'
import { Link } from "react-router-dom"
import Train from "./ThePlatform.jpg"

export default function Platform() {
  return (
    <>
      <img className="Main-Images Main-BG" src={Train} alt="Platform 9 3/4" />
      <Link to="/hogwarts"><button className="Container-Card-One">Hogwarts</button></Link>
      <Link to="/hogsmeade"><button className="Container-Card-Two">Hogsmeade</button></Link>
    </>
  )
}
