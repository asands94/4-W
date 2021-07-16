import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import { DIRECTORY_URL, headers } from "../services/index.js"


export default function DirectorySearch() {

  const [data, setData] = useState([])


  useEffect(() => {
    const getSearch = async () => {
      const searchURL = `${DIRECTORY_URL}`
      const res = await axios.get(searchURL, { headers })
      setData(res.data.records)

    }
    getSearch()
  }, [])



  return (
    <>
      <div>

        {data.map((results) => {
          return (
            <Link to={`/search/${results.id}`} key={results.id}>
              <p>{results.fields?.name}</p>
            </Link>
          )
        })}
      </div>
    </>
  )
}
