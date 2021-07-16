import React, { useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import { DIARY_URL, headers } from "../services/index.js"

export default function NewDiary() {

  const [post, setPost] = useState('')

  const handlePost = async (e) => {
    e.preventDefault()
    const fields = {
      message: post,

    }
    await axios.post(DIARY_URL, { fields }, { headers })
  }

  return (
    <div>
      <form className="diary-form" onSubmit={handlePost}>
        <input value={post} name="message" onChange={(e) => setPost(e.target.value)}></input>
        <Link to="/tom-riddle-diary"><button>who are you?</button></Link>
      </form>
      <p className="diary-message">{post}</p>
    </div>
  )
}

