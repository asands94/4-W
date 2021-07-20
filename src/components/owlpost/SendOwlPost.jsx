import React, { useState } from 'react'
import axios from "axios"
import { OWL_URL, headers } from "../services/index.js"

export default function SendOwlPost(props) {

  const [post, setPost] = useState('')
  const [poster, setPoster] = useState('')
  const [receiver, setReceiver] = useState('')

  const handlePost = async (e) => {
    e.preventDefault()
    const fields = {
      name: poster,
      receiver,
      message: post,

    }
    await axios.post(OWL_URL, { fields }, { headers })
    props.setToggle((prevToggle) => !prevToggle);

    setPoster('')
    setReceiver('')
    setPost('')
  }

  return (
    <>

      <form className="owl-form" onSubmit={handlePost}>
        <input className="owl-form-value" value={poster} name="name" placeholder="Your Name" onChange={(e) => setPoster(e.target.value)}></input>
        <input className="owl-form-value" value={receiver} name="receiver" placeholder="Recipients Name" onChange={(e) => setReceiver(e.target.value)}></input>
        <input className="owl-form-value" value={post} name="message" placeholder="Message" onChange={(e) => setPost(e.target.value)}></input>
        <button className="owl-form-button">send</button>
      </form>

    </>
  )
}
