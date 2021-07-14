import React from 'react'
import { Link } from "react-router-dom"
import OwlPostImg from "./OwlPost.jpg"

export default function OwlPost() {
  return (
    <>
      <img className="Main-Images Main-BG" src={OwlPostImg} alt="Owl Post" />
      <Link to="/new-owl-post"><button className="Container-Card-One">Owl Post</button></Link>
    </>
  )
}
