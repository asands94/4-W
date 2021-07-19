import React from 'react'
import { Link } from "react-router-dom"
import diarymagic from "./diarymagic.png"

export default function NoDiary() {


  return (
    <>
      <div className="main-text-container">
        <h1 className="main-text-header">Tom Riddle's Diary</h1>
      </div>
      <img className="background-image" src={diarymagic} alt="blurred door background" />
      <div className="diary-container">
        <p className="animated-text">You are a fool for picking up this diary!</p>
        <p className="animated-text">Give this diary to someone more useful.</p>
      </div>
      <form className="diary-form">
        <Link to="/hogwarts"><button>run away</button></Link>
      </form>
    </>
  )
}
