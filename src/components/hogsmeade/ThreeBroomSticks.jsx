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
      // console.log(res.data.records)
      setDrinks(res.data.records)
    }
    getDrinks()
  }, [])

  useEffect(() => {
    const getSnacks = async () => {
      const snacksURL = `${SNACKS_URL}`
      const res = await axios.get(snacksURL, { headers })
      // console.log(res.data.records)
      setSnacks(res.data.records)
    }
    getSnacks()
  }, [])





  return (
    <>
      <div>
        {meals.map((meal) => {
          return (
            <div key={meal.id}>
              <h1>{meal.fields?.name}</h1>
              {meal.fields.mainDish.map((image) => {
                return (
                  <img key={image.id} src={image.url} alt={meal.name} />
                )
              })}
            </div>
          )
        })}
      </div>
      <div>
        {drinks.map((drink) => {
          return (
            <div key={drink.id}>
              <h1>{drink.fields?.name}</h1>
              {drink.fields.image.map((image) => {
                return (
                  <img key={image.id} src={image.url} alt={drink.name} />
                )
              })}
            </div>
          )
        })}
      </div>
      <div>
        {snacks.map((snack) => {
          return (
            <div key={snack.id}>
              <h1>{snack.fields?.name}</h1>
              {snack.fields.image.map((image) => {
                return (
                  <img key={image.id} src={image.url} alt={snack.name} />
                )
              })}
            </div>
          )
        })}
      </div>
    </>
  )
}
