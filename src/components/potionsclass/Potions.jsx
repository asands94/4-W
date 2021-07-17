import React, { useState, useEffect } from 'react'
import axios from "axios"
import NeutralPotion from "./NeutralPotion.svg"
import GoodPotion from "./GoodPotion.svg"
import BadPotion from "./BadPotion.svg"
import { POTION_URL, headers } from "../services/index.js"
import Modal from "./Modal"

export default function Potions() {
  const [count, setCount] = useState(0)
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    const getIngredients = async () => {
      const searchURL = `${POTION_URL}`
      const res = await axios.get(searchURL, { headers })
      setIngredients(res.data.records)
      console.log(res.data.records)

    }
    getIngredients()
  }, [])


  function potionType() {
    if (count === 0) {
      return NeutralPotion
    } else if (count === 5) {
      return GoodPotion
    } else {
      return BadPotion
    }
  }

  const handleClick = (value) => {
    if (value) {
      setCount(count + value)
    }
  }

  return (

    <>

      <img className="potion" src={potionType()} alt={potionType()} />
      <div className="ingredients-container">
        {ingredients.map((ingredient, index) => {
          return (
            <div key={index}>
              {ingredient.fields?.ingredientName}
              {ingredient.fields?.images.map((image) => {
                return (
                  <div key={image.filename}>
                    <button onClick={() => handleClick(ingredient.fields?.value)} className="ingredients"><img className="ingredients" src={image.url} alt={ingredient.fields?.ingredientName} /></button>
                  </div>
                )
              })}
            </div>
          )
        })}
        <Modal />
      </div>
      <button onClick={() => setCount(0)}>reset</button>
    </ >

  )
}
