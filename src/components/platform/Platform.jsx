import React from 'react'
import { Link } from "react-router-dom"

export default function Platform() {
  return (
    <>
      <Link to="/hogwarts"><button className="container-card-one">Hogwarts</button></Link>
      <Link to="/hogsmeade"><button className="container-card-two">Hogsmeade</button></Link>
    </>
  )
}
