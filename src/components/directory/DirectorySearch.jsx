import React, { useEffect, useState } from 'react'
import axios from "axios"
import { DIRECTORY_URL, headers } from "../services/index.js"
import nightsky from "./nightsky.jpg"
import NameCard from './NameCard.jsx';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default function DirectorySearch() {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([]);
  const [filterInput, setFilterInput] = useState("");

  useEffect(() => {
    const getSearch = async () => {
      const searchURL = `${DIRECTORY_URL}`
      const res = await axios.get(searchURL, { headers })
      setData(res.data.records)
      console.log(res.data.records)
    }
    getSearch()
  }, [])

  useEffect(() => {
    if (filterInput !== "") {
      setFilteredData(data.filter((names) => {
        if (names.fields.firstName.toUpperCase() === filterInput.toUpperCase() || names.fields.lastName.toUpperCase() === filterInput.toUpperCase()) {
          return data
        }
        return null
      })
      )
    }
  }, [filterInput, data])

  const handleSubmit = (e) => {
    setFilterInput(e.target.value);
    setFilterInput('')
  };

  return (
    <>
      <div className="main-text-container">
        <h1 className="main-text-header">Directory</h1>
      </div>
      <img className="background-image" src={nightsky} alt="blurred night sky" />
      <form className="search-form" onSubmit={handleSubmit}>
        <input className="directory-input" value={filterInput} onChange={(e) => setFilterInput(e.target.value)} placeholder="search by first or last name" />
      </form>

      {filteredData.map((names) => {
        return <NameCard key={names.id} names={names} />;

      })}
      <div className="card-container">
        {data.map((data) => {
          return (


            <Card key={data.fields.firstName} className="cards" sx={{ width: 345, height: 600 }}>
              <div >
                <CardMedia
                  component="img"
                  alt={data.fields?.firstName}
                  height="450"

                  image={data.fields?.image}
                  title={data.fields?.firstName}

                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {data.fields?.firstName} {data.fields?.lastName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data.fields?.firstName} {data.fields?.lastName} is part of {data.fields?.house} house. What {data.fields?.firstName} fears most is {data.fields?.boggart}. {data.fields?.firstName}'s patronus is {data.fields?.patronus}.
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