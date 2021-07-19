import axios from "axios"
import { OWL_URL, headers } from "../services/index.js"

export default function DeletePost(props) {
  const deleteOwlPost = async () => {
    const URL = `${OWL_URL}/${props.post.id}`
    await axios.delete(URL, { headers })
    props.setToggle(prevToggle => !prevToggle)
  }
  return (


    <button className="owl-form-button" onClick={deleteOwlPost}>Rip up letter</button>

  )
}
