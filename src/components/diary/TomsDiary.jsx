import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import { DIARY_URL, headers } from "../services/index.js"


export default function TomsDiary() {

  const [message, setMessage] = useState([])


  useEffect(() => {
    const getMessage = async () => {
      const messageURL = `${DIARY_URL}`
      const res = await axios.get(messageURL, { headers })
      setMessage(res.data.records)
    }
    getMessage()
  }, [])

  const handleDelete = async () => {
    const messageURL = `${DIARY_URL}`
    const res = await axios.delete(messageURL, { headers })
  }


  return (
    <div>
      {message.map((messages, index) => {
        return (
          <div key={index}>
            <h3>{messages.fields.author}</h3>
            <p>{messages.fields.message}</p>
          </div>
        )
      })}
      <Link to="/new-diary">New post</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
