import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { OLLIVANDERS_URL, headers } from '../services'

export default function Ollivanders() {
  const [wands, setWands] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const dataURL = `${OLLIVANDERS_URL}`
      const res = await axios.get(dataURL, { headers })
      console.log(res.data.records)
      setWands(res.data.records)
    }
    fetchData()
  }, [])


  return (
    <div>
      {wands.map((wand, index) => {
        return (
          <div key={index}>
            <p>{wand.fields?.wood} wood with a {wand.fields?.core} core, {wand.fields?.length} and {wand.fields?.flexibility} flexibility</p>
            <div>
              {wand.fields.image.map((images) => {
                return (
                  <>
                    <img src={images.url} alt="wand" />
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
