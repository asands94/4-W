import React from 'react'
import { Link } from "react-router-dom"


export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to="/search">Directory</Link>
        <Link to="/platform">Kings Cross</Link>
        <Link to="/diagon-alley">Diagon Alley</Link>
      </div>




    </>

  )
}
