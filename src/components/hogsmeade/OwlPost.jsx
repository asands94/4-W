import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import { OWL_URL, headers } from "../services/index.js"
import owlpostmagic from "./owlpostmagic.jpg"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SendOwlPost from './SendOwlPost.jsx'


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

  return (
    <>

      <div className="main-text-container">
        <h1 className="main-text-header">Owl Post</h1>
      </div>
      <img className="background-image" src={owlpostmagic} alt="blurred owl post background" />
      <SendOwlPost className="owl-form" setToggle={setToggle} />
      <div className="card-container">
        {data.map((results) => {
          return (
            <Card className="cards" sx={{ width: 245, height: 400 }}>
              <div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <p>From: {results.fields?.name}</p>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <p>To: {results.fields?.receiver}</p>
                    <p>{results.fields?.message}</p>
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


