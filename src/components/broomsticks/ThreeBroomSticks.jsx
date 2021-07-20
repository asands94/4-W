import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { MEALS_URL, DRINKS_URL, SNACKS_URL, headers } from '../services'
import broommagic from "./broommagic.png"
import Basket from './Basket'
import MealsProduct from './MealsProduct'
import DrinksProduct from './DrinksProduct'
import SnacksProduct from './SnacksProduct'
import "./broomsticks.css"
import Loader from "../Loader"

export default function ThreeBroomSticks() {

  const [meals, setMeals] = useState([])
  const [drinks, setDrinks] = useState([])
  const [snacks, setSnacks] = useState([])
  const [cartItems, setCartItems] = useState([])

  const onAdd = (meals) => {
    const exist = cartItems.find((x) => x.name === meals.name);
    console.log(meals)
    if (exist) {
      setCartItems(cartItems.map((x) => x.name === meals.name ? { ...exist, qty: exist.qty + 1 } : x))
    } else {
      setCartItems([...cartItems, { ...meals, qty: 1 }])
    }
  }

  const onRemove = (meals) => {
    const exist = cartItems.find((x) => x.name === meals.name)
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.name !== meals.name))
    } else {
      setCartItems(cartItems.map((x) => x.name === meals.name ? { ...exist, qty: exist.qty - 1 } : x))
    }
  }

  useEffect(() => {
    const getMeals = async () => {
      const mealsURL = `${MEALS_URL}`
      const res = await axios.get(mealsURL, { headers })
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

  if (!meals.length) {
    return <Loader />
  }

  if (!drinks.length) {
    return <Loader />
  }

  if (!snacks.length) {
    return <Loader />
  }


  return (
    <>
      <div className="main-text-container">
        <h1 className="main-text-header">The Three Broomsticks</h1>
      </div>
      <img className="background-image" src={broommagic} alt="blurred green mushroom background" />
      <div className="basket">
        <Basket
          onAdd={onAdd}
          onRemove={onRemove}
          cartItems={cartItems} />
      </div>
      <h1 style={{ textAlign: "center" }}>Meals</h1>
      <div className="food-container">
        {meals.map((meal) => {
          return (
            <div key={meal.id}>
              {meal.fields.mainDish.map((images) => {
                return (
                  <MealsProduct onAdd={onAdd} key={images.id} images={images} meal={meal.fields} />
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
            <div key={drink.id}>
              {drink.fields.image.map((images) => {
                return (
                  <DrinksProduct onAdd={onAdd} key={images.id} images={images} drink={drink.fields} />
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
            <div key={snack.id}>
              {snack.fields.image.map((images) => {
                return (
                  <SnacksProduct onAdd={onAdd} key={images.id} images={images} snack={snack.fields} />
                )
              })}
            </div>
          )
        })}
      </div>
    </>
  )
}
