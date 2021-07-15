import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { BROOMSTICKS_URL, headers } from '../services'

export default function ThreeBroomSticks() {

  const [meals, setMeals] = useState([])

  useEffect(() => {
    const getData = async () => {
      const mealsURL = `${BROOMSTICKS_URL}`
      const res = await axios.get(BROOMSTICKS_URL, { headers })
      console.log(res.data.records)
      setMeals(res.data)
    }
  })


  return (
    <div>
      {meals.map((meal) => {
        return (
          <p>{meal.fields?.name}</p>
        )
      })}

    </div>
  )
}
