import { useState, useEffect } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import { DIRECTORY_URL, headers } from "../services/index.js"



export default function DirectoryResults() {
  const [results, setResults] = useState({})
  const { character } = useParams()

  useEffect(() => {
    const getResults = async () => {
      const resultsURL = `${DIRECTORY_URL}/${character}`
      const res = await axios.get(resultsURL, { headers })
      setResults(res.data)
    }
    getResults()
  }, [character])

  function houseColor() {
    if (results.fields?.house === "Slytherin") {
      return "green specific-details"
    } else if (results.fields?.house === "Gryffindor") {
      return "red specific-details"
    } else if (results.fields?.house === "Ravenclaw") {
      return "blue specific-details"
    } else {
      return "yellow specific-details"
    }
  }





  return (
    <>
      <div className="characters-container paper-bg">
        <h2>{results.fields?.name}</h2>
        <img className="characters" src={results.fields?.image} alt={results.fields?.name} />
        <h3 className="character-details">House</h3><p className={houseColor()}>{results.fields?.house}</p>
        <h3 className="character-details">Patronus</h3> <p className="specific-details patronus">{results.fields?.patronus}</p>
        <h3 className="character-details">Boggart</h3> <p className="specific-details boggart">{results.fields?.boggart}</p>
      </div>
    </>
  )
}
