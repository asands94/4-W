import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { MEALS_URL, DRINKS_URL, SNACKS_URL, headers } from '../services'

export default function ThreeBroomSticks() {

  const [meals, setMeals] = useState([])
  const [drinks, setDrinks] = useState([])
  const [snacks, setSnacks] = useState([])

  useEffect(() => {
    const getMeals = async () => {
      const mealsURL = `${MEALS_URL}`
      const res = await axios.get(mealsURL, { headers })
      console.log(res.data.records)
      setMeals(res.data.records)
    }
    getMeals()
  }, [])

  useEffect(() => {
    const getDrinks = async () => {
      const drinksURL = `${DRINKS_URL}`
      const res = await axios.get(drinksURL, { headers })
      console.log(res.data.records)
      setDrinks(res.data.records)
    }
    getDrinks()
  }, [])

  useEffect(() => {
    const getSnacks = async () => {
      const snacksURL = `${SNACKS_URL}`
      const res = await axios.get(snacksURL, { headers })
      console.log(res.data.records)
      setSnacks(res.data.records)
    }
    getSnacks()
  }, [])


  return (
    <div >
      {meals.map((meal, index) => {
        return (
          <div key={index}>
            <p>{meal.fields?.name}</p>

            {meal.fields?.mainDish.map((image) => {
              return (
                <img src={image.url} alt={meal.fields?.name} />
              )
            })}
          </div>
        )
      })}
      <div>
        {drinks.map((drink, index) => {
          return (
            <div key={index}>
              <p>{drink.fields?.name}</p>
              {drink.fields?.image.map((image) => {
                return (
                  <img src={image.url} alt={drink.fields?.name} />
                )
              })}
            </div>
          )
        })}
      </div>
      <div>
        {snacks.map((snack, index) => {
          return (
            <div key={index}>
              <p>{snack.fields?.name}</p>
              {snack.fields?.image.map((image) => {
                return (
                  <img src={image.url} alt={snack.fields?.name} />
                )
              })}
            </div>
          )
        })}
      </div>

    </div>

  )
}
