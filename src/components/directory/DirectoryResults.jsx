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
      return "green Specific-Details"
    } else if (results.fields?.house === "Gryffindor") {
      return "red Specific-Details"
    } else if (results.fields?.house === "Ravenclaw") {
      return "blue Specific-Details"
    } else {
      return "yellow Specific-Details"
    }
  }





  return (
    <>
      <div className="Characters-Container Paper-BG">
        <h2>{results.fields?.name}</h2>
        <img className="Characters" src={results.fields?.image} alt={results.fields?.name} />
        <h3 className="Character-Details">House</h3><p className={houseColor()}>{results.fields?.house}</p>
        <h3 className="Character-Details">Patronus</h3> <p className="Specific-Details Patronus">{results.fields?.patronus}</p>
        <h3 className="Character-Details">Boggart</h3> <p className="Specific-Details Boggart">{results.fields?.boggart}</p>
      </div>
    </>
  )
}
