import React, { useState } from 'react'
import { Link } from "react-router-dom"



export default function GringottsContainer() {



  return (
    <>
      <Link to="/magical-menagerie"><button className="container-card-one">Shop for a new pet</button></Link>
      <Link to="/flourish-and-blotts"><button className="container-card-two">Shop for school books</button></Link>
      <Link to="/ollivanders"><button className="container-card-three">Shop for a wand</button></Link>



    </>
  )
}
