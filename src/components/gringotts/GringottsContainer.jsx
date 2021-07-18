import React, { useState } from 'react'
import { Link } from "react-router-dom"



export default function GringottsContainer() {



  return (
    <div className="card-container2">
      <Link to="/magical-menagerie"><button className="gringotts-cards">Shop for a new pet</button></Link>
      <Link to="/flourish-and-blotts"><button className="gringotts-cards">Shop for school books</button></Link>
      <Link to="/ollivanders"><button className="gringotts-cards">Shop for a wand</button></Link>



    </div>
  )
}
