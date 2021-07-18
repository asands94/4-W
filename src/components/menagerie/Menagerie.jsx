import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { MENAGERIE_URL, headers } from '../services'
import goldmagic from "./goldmagic.png"

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
    <>
      <div className="main-text-container">
        <h1 className="main-text-header">Magical Menagerie</h1>
      </div>
      <img className="background-image" src={goldmagic} alt="blurred orange background" />
      <div className="pets-container">
        {animals.map((animal, index) => {
          return (
            <div className="pets-cage" key={index}>
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

    </>
  )
}
