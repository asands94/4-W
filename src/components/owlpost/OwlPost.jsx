import React, { useEffect, useState } from 'react'
import axios from "axios"
import { OWL_URL, headers } from "../services/index.js"
import owlpostmagic from "./owlpostmagic.jpg"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SendOwlPost from './SendOwlPost.jsx'
import DeletePost from './DeletePost.jsx'
import "./owlpost.css"
import Loader from "../Loader"


export default function OwlPost() {

  const [data, setData] = useState([])
  const [toggle, setToggle] = useState(false);


  useEffect(() => {
    const getSearch = async () => {
      const searchURL = `${OWL_URL}`
      const res = await axios.get(searchURL, { headers })
      setData(res.data.records)

    }
    getSearch()
  }, [toggle])


  if (!data.length) {
    return <Loader />
  }

  return (
    <>

      <div className="main-text-container">
        <h1 className="main-text-header">Owl Post</h1>
      </div>
      <img className="background-image" src={owlpostmagic} alt="blurred owl post background" />
      <SendOwlPost setToggle={setToggle} />
      <div className="card-container ">
        {data.map((results) => {
          return (
            <Card key={results.id} className="cards " sx={{ width: 245, height: 400, backgroundColor: "antiquewhite", boxShadow: "1px 1px 40px burlywood inset" }}>
              <div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h5>From: {results.fields?.name}</h5>
                  </Typography>
                  <Typography gutterBottom variant="h6" color="text.secondary">
                    <p>To: {results.fields?.receiver}</p>
                    <p className="owl-post-cards">{results.fields?.message}</p>
                    <DeletePost post={results} setToggle={setToggle} />
                  </Typography>

                </CardContent>
              </div>
            </Card>
          )
        })}

      </div>
    </>
  )
}


