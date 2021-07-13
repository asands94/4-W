import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="NavBar">
      <Link to="/search">Directory</Link>
      <Link to="/platform">Platform 9 3/4</Link>
      <Link to="/">Home</Link>
    </div>
  )
}
