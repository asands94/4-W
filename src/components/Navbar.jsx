import React from 'react'
import { Link } from "react-router-dom"


export default function Navbar() {
  return (
    <>
      <div className="navBar">
        <Link to="/search">Directory |</Link>
        <Link to="/platform">Kings Cross |</Link>
        <Link to="/">Home</Link>
      </div>




    </>

  )
}
