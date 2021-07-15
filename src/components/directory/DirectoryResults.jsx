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


  return (
    <>
      <div>
        <h2>Name: {results.fields?.name}</h2>
        <img className="Characters" src={results.fields?.image} alt={results.fields?.name} />
        <h3>Boggart: {results.fields?.boggart}</h3>
        <h3>House: {results.fields?.house}</h3>
        <h3>Patronus: {results.fields?.patronus}</h3>

      </div>
    </>
  )
}
