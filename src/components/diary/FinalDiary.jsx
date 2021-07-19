import React from 'react'
import { Link } from "react-router-dom"
import diarymagic from "./diarymagic.png"

export default function FinalDiary() {


  return (
    <>
      <div className="main-text-container">
        <h1 className="main-text-header">Tom Riddle's Diary</h1>
      </div>
      <img className="background-image" src={diarymagic} alt="blurred door background" />
      <div className="diary-container">
        <p className="animated-text">T O M M A R V O L O R I D D L E</p>
        <p className="animated-text">I am Lord Voldemort</p>
      </div>
      <form className="diary-form">
        <Link to="/the-three-broomsticks"><button>celebrate</button></Link>
      </form>
    </>
  )
}
