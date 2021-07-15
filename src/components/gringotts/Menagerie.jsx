import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { MENAGERIE_URL, headers } from '../services'

export default function Menagerie() {

  const [animals, setAnimals] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const dataURL = `${MENAGERIE_URL}`
      const res = await axios.get(dataURL, { headers })
      console.log(res.data.records)
      setAnimals(res.data.records)
    }
    fetchData()
  }, [])


  return (
    <div>
      {animals.map((animal, index) => {
        return (
          <div key={index}>
            <h1>{animal.fields?.name}</h1>
            <div>
              {animal.fields.image.map((images) => {
                return (
                  <>
                    <img src={images.url} alt={animal.fields?.name} />
                  </>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
