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
      // console.log(res.data.records)
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

  const num = meals.length
  const randomMeal = meals[Math.floor(Math.random() * num)].fields
  const randomizeMeals = randomMeal?.name
  const randomizeMealsImg = randomMeal?.mainDish[0].url

  const num2 = drinks.length
  const randomDrink = drinks[Math.floor(Math.random() * num2)].fields
  const randomizeDrinks = randomDrink?.name
  const randomizeDrinksImg = randomDrink?.image[0].url


  const num3 = snacks.length
  const randomSnack = snacks[Math.floor(Math.random() * num3)].fields
  const randomizeSnacks = randomSnack?.name
  const randomizeSnacksImg = randomSnack?.image[0].url




  return (
    <div >
      {randomizeMeals}
      <img src={randomizeMealsImg} alt={randomMeal} />
      {randomizeDrinks}
      <img src={randomizeDrinksImg} alt={randomDrink} />
      {randomizeSnacks}
      <img src={randomizeSnacksImg} alt={randomSnack} />
      hi
    </div>
  )
}
