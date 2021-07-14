import React, { useState } from 'react'
import axios from "axios"
import { DIARY_URL, headers } from "../services/index.js"


export default function TomsDiary() {

  const [author, setAuthor] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {

    e.preventDefault()
    const fields = {
      author,
      message,

    }
    const res = await axios.post(DIARY_URL, { fields }, { headers })
    console.log("res", res)
  }




  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={author} name="author" onChange={(e) => setAuthor(e.target.value)}></input>
        <input value={message} name="message" onChange={(e) => setMessage(e.target.value)}></input>
        <button>Submit</button>
      </form>
    </div>
  )
}
