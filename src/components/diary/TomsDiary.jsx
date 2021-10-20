import React, { useState } from 'react'
import { Link } from "react-router-dom"
import diarymagic from "./diarymagic.png"

export default function TomsDiary() {

  const [user] = useState(
    (localStorage.getItem('userInLocalStorage')) || '')

  const [house, setHouse] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setHouse('')
  }

  return (
    <>
      <div className="main-text-container">
        <h1 className="main-text-header">Tom Riddle's Diary</h1>
      </div>
      <img className="background-image" src={diarymagic} alt="blurred door background" />
      <div className="diary-container">
        <p className="animated-text">Hello {user}, my name is Tom Marvolo Riddle.</p>
        <p className="animated-text">{user}, are you in Slytherin?</p>
        <p className="diary-message">{house}</p>
      </div>
      <form className="diary-form" onSubmit={handleSubmit}>
        <input value={house.tolowerCase()} name="message" onChange={(e) => setHouse(e.target.value)}></input>
        {house === 'yes' ? (<Link to="/tom-riddle-diary-slytherin"><button>Yes or No</button></Link>)
          : (<Link to="/tom-riddle-diary-other"><button>Yes or No</button></Link>)}

      </form>
    </>
  )
}
