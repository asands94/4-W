import React, { useState, useEffect } from 'react'
import axios from "axios"
import NeutralPotion from "./NeutralPotion.svg"
import GoodPotion from "./GoodPotion.svg"
import BadPotion from "./BadPotion.svg"
import { POTION_URL, headers } from "../services/index.js"

export default function Potions() {
  const [count, setCount] = useState(0)
  const [ingredients, setIngredients] = useState([])

  function potionType() {
    if (count === 0) {
      return NeutralPotion
    } else if (count === 12 || 22) {
      return GoodPotion
    } else {
      return BadPotion
    }
  }

  useEffect(() => {
    const getIngredients = async () => {
      const searchURL = `${POTION_URL}`
      const res = await axios.get(searchURL, { headers })
      setIngredients(res.data.records)
      console.log(res.data.records[0].fields)

    }
    getIngredients()
  }, [])







  return (
    <div>
      <img src={potionType} alt={potionType} />
      {ingredients.map((ingredient, index) => {
        return (
          <div key={index}>
            {ingredient.fields?.ingredientName}
            {ingredient.fields.images.map((image) => {
              return (
                <div key={image.filename}>
                  <button className="Ingredients"><img src={image.thumbnails.small.url} alt={image.filename} /></button>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
