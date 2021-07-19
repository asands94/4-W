import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
// import { DIARY_URL, headers } from "../services/index.js"
import diarymagic from "./diarymagic.png"
import "./diary.css"

export default function NewDiary() {

  const [user, setUser] = useState(
    (localStorage.getItem('userInLocalStorage')) || '')

  useEffect(() => {
    localStorage.setItem('userInLocalStorage', user)
  }, [user])

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser('')
  }

  return (
    <>
      <div className="main-text-container">
        <h1 className="main-text-header">Tom Riddle's Diary</h1>
      </div>
      <img className="background-image" src={diarymagic} alt="blurred door background" />
      <div className="diary-container">
        <p className="diary-message">{user}</p>
      </div>
      <form className="diary-form" onSubmit={handleSubmit}>
        <input value={user} name="message" onChange={(e) => setUser(e.target.value)}></input>
        <Link to="/tom-riddle-diary"><button>what is your name?</button></Link>
      </form>
    </>
  )
}

