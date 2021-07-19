import React, { useEffect, useState } from 'react'
import axios from "axios"
import { DIRECTORY_URL, headers } from "../services/index.js"
import nightsky from "./nightsky.jpg"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default function DirectorySearch() {


  const [data, setData] = useState([])


  useEffect(() => {
    const getSearch = async () => {
      const searchURL = `${DIRECTORY_URL}`
      const res = await axios.get(searchURL, { headers })
      setData(res.data.records)
      console.log(res.data.records)
    }
    getSearch()
  }, [])



  return (
    <>
      <div className="main-text-container">
        <h1 className="main-text-header">Directory</h1>
      </div>
      <img className="background-image" src={nightsky} alt="blurred night sky" />
      <div className="card-container">
        {data.map((data) => {
          return (

            <Card key={data.fields.name} className="cards" sx={{ width: 345, height: 600 }}>
              <div >
                <CardMedia
                  component="img"
                  alt={data.fields?.name}
                  height="450"

                  image={data.fields?.image}
                  title={data.fields?.name}

                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {data.fields?.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data.fields?.name} is part of {data.fields?.house} house. What {data.fields?.name} fears most is {data.fields?.boggart}. {data.fields?.pronouns} patronus is {data.fields?.patronus}.
                  </Typography>
                </CardContent>
              </div>
            </Card>


          )
        })}
      </div>
    </>
  );
}