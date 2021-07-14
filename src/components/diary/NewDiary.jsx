import React, { useState } from 'react'
import axios from "axios"
import { useHistory } from "react-router-dom"
import { DIARY_URL, headers } from "../services/index.js"


export default function NewDiary() {

  const [author, setAuthor] = useState('')
  const [message, setMessage] = useState('')

  const history = useHistory()

  const handlePost = async (e) => {
    e.preventDefault()
    const fields = {
      author,
      message,

    }
    await axios.post(DIARY_URL, { fields }, { headers })
    history.push(`/tom-riddle-diary`)
  }



  return (
    <div>
      <form onSubmit={handlePost}>
        <input value={author} name="author" onChange={(e) => setAuthor(e.target.value)}></input>
        <input value={message} name="message" onChange={(e) => setMessage(e.target.value)}></input>
        <button>Submit</button>
      </form>
    </div>
  )
}
