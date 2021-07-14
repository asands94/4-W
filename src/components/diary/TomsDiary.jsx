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

  return (
    <>

      <h1 className="animated-text">Hello, my name is Tom Marvolo Riddle.</h1>
      <div className="Diary-BG">
        {message.map((messages, index) => {
          return (
            <Link to={`/tom-riddle-diary/${messages.id}`} key={index}>
              <p className="Diary-Message">{messages.fields.message}</p>
            </Link>
          )
        })}
      </div>
    </>
  )
}
