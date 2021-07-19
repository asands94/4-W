import React, { useState, useEffect } from 'react'
import axios from "axios"
import NeutralPotion from "./NeutralPotion.svg"
import GoodPotion from "./GoodPotion.svg"
import BadPotion from "./BadPotion.svg"
import { POTION_URL, headers } from "../services/index.js"
import Modal from "./Modal"
import greenmagic from "./greenmagic.png"
import "./potion.css"
import Instructions from "./Instructions"


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
    } else if (count === 51 || count === -29 || count === 10) {
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
      <div className="main-text-container">
        <h1 className="main-text-header">Potions Class</h1>
      </div>
      <img className="background-image" src={greenmagic} alt="blurred green mushroom background" />
      <div className="modal">
        <img className="potion-flask" src={potionType()} alt={potionType()} />
        <Modal />
        <div>
          <button onClick={() => setCount(0)}>reset</button>
          <Instructions />
        </div>
      </div>
      <div className="ingredients-container">
        {ingredients.map((ingredient) => {
          return (
            <div className="ingredients-cage" key={ingredient.id}>
              <h3>{ingredient.fields?.ingredientName}</h3>
              <div>
                {ingredient.fields?.images.map((image) => {
                  return (
                    <div key={image.id}>
                      <button className="ingredients-buttons" onClick={() => handleClick(ingredient.fields?.value)}><img className="ingredients" src={image.url} alt={ingredient.fields?.ingredientName} /></button>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </ >

  )
}


