import React, { useState } from 'react'
import { Link } from "react-router-dom"
import diarymagic from "./diarymagic.png"

export default function YesDiary() {

  const [user] = useState(
    (localStorage.getItem('userInLocalStorage')) || '')



  return (
    <>
      <div className="main-text-container">
        <h1 className="main-text-header">Tom Riddle's Diary</h1>
      </div>
      <img className="background-image" src={diarymagic} alt="blurred door background" />
      <div className="diary-container">
        <p className="animated-text">Slytherin is the best house.</p>
        <p className="animated-text">I have a secret for you, {user}.</p>
      </div>
      <form className="diary-form">
        <Link to="/tom-riddle-diary-last"><button>what is it?</button></Link>
      </form>
    </>
  )
}
