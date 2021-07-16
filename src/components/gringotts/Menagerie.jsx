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
      <div className="pets-container">
        {animals.map((animal, index) => {
          return (
            <div key={index}>
              <h3>{animal.fields?.name}</h3>
              <div>
                {animal.fields.image.map((images) => {
                  return (
                    <>
                      <img className="pets" src={images.url} alt={animal.fields?.name} />
                    </>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
