import React, { useState, useEffect } from 'react'
import axios from "axios"

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
    <div className="Diary-BG">
      <p className="animated-text">Hello, my name is Tom Marvolo Riddle.</p>
    </div>
  )
}
