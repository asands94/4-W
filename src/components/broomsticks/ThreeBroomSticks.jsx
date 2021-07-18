import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { MEALS_URL, DRINKS_URL, SNACKS_URL, headers } from '../services'
import broommagic from "./broommagic.png"

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
      <div className="main-text-container">
        <h1 className="main-text-header">The Three Broomsticks</h1>
      </div>
      <img className="background-image" src={broommagic} alt="blurred green mushroom background" />
      <h1 style={{ textAlign: "center" }}>Meals</h1>
      <div className="food-container">
        {meals.map((meal) => {
          return (
            <div className="meal-cage" key={meal.id}>
              <h3>{meal.fields?.name}</h3>
              {meal.fields.mainDish.map((image) => {
                return (
                  <img className="foods" key={image.id} src={image.url} alt={meal.name} />
                )
              })}
            </div>
          )
        })}
      </div>
      <h1 style={{ textAlign: "center" }}>Drinks</h1>
      <div className="food-container">
        {drinks.map((drink) => {
          return (
            <div className="drink-cage" key={drink.id}>
              <h3>{drink.fields?.name}</h3>
              {drink.fields.image.map((image) => {
                return (
                  <img className="foods" key={image.id} src={image.url} alt={drink.name} />
                )
              })}
            </div>
          )
        })}
      </div>
      <h1 style={{ textAlign: "center" }}>Desserts</h1>
      <div className="food-container">
        {snacks.map((snack) => {
          return (
            <div className="snack-cage" key={snack.id}>
              <h3>{snack.fields?.name}</h3>
              {snack.fields.image.map((image) => {
                return (
                  <img className="foods" key={image.id} src={image.url} alt={snack.name} />
                )
              })}
            </div>
          )
        })}
      </div>
    </>
  )
}
