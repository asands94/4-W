import React, { useState, useEffect } from 'react'
import axios from "axios"
import OwlPostImg from "./OwlPost.jpg"
import { useHistory } from "react-router-dom"
import { useParams } from 'react-router-dom'
import { OWL_URL, headers } from "../services/index.js"

export default function SendOwlPost() {

  const [post, setPost] = useState('')
  const [name, setName] = useState('')
  const [results, setResults] = useState({})
  const { owl } = useParams()

  const history = useHistory()

  useEffect(() => {
    const getResults = async () => {
      const resultsURL = `${OWL_URL}/${owl}`
      const res = await axios.get(resultsURL, { headers })
      setResults(res.data)
    }
    getResults()
  }, [owl])

  const handlePost = async (e) => {
    e.preventDefault()
    const fields = {
      name,
      message: post,

    }
    await axios.post(OWL_URL, { fields }, { headers })
    history.push('/owl-post')
  }




  return (
    <>
      <img className="Main-Images Main-BG" src={OwlPostImg} alt="Owl Post" />
      <div className="Owl-BG">
        <form className="Owl-Form" onSubmit={handlePost}>
          <input value={name} name="name" onChange={(e) => setName(e.target.value)}></input>
          <input value={post} name="message" onChange={(e) => setPost(e.target.value)}></input>
          <button>send</button>
        </form>
      </div>
      <div>
        <h2>{results.fields?.name}</h2>
        <h3>Message</h3> <p>{results.fields?.message}</p>
      </div>
    </>
  )
}
