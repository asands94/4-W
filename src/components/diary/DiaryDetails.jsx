import { useState, useEffect } from 'react'
import axios from "axios"
import { useParams, useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { DIARY_URL, headers } from "../services/index.js"


export default function DiaryDetails() {

  const [post, setPost] = useState({})
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    const getMessage = async () => {
      const messageURL = `${DIARY_URL}/${id}`
      const res = await axios.get(messageURL, { headers })
      setPost(res.data)
    }
    getMessage()
  }, [])

  const handleDelete = async () => {
    const messageURL = `${DIARY_URL}/${id}`
    const res = await axios.delete(messageURL, { headers })
    history.push("/tom-riddle-diary")
  }


  return (
    <div>
      {post.fields?.author}
      {post.fields?.message}
      <Link to="/new-diary">New message</Link>
      <button onClick={handleDelete}>Delete message</button>
    </div>
  )
}
