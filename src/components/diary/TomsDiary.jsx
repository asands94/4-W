import React from 'react'
import diarymagic from "./diarymagic.png"

export default function TomsDiary() {

  return (
    <>
      <div className="main-text-container">
        <h1 className="main-text-header">Tom Riddle's Diary</h1>
      </div>
      <img className="background-image" src={diarymagic} alt="blurred door background" />
      <div className="diary-container">
        <p className="animated-text">Hello, my name is Tom Marvolo Riddle.</p>
      </div>
    </>
  )
}
