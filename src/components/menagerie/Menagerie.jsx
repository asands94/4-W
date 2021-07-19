import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { MENAGERIE_URL, headers } from '../services'
import goldmagic from "./goldmagic.png"
import Basket from './Basket'
import Product from './Product'
import "./menagerie.css"

export default function Menagerie() {

  const [animals, setAnimals] = useState([])
  const [cartItems, setCartItems] = useState([])

  const onAdd = (animal) => {
    const exist = cartItems.find((x) => x.name === animal.name);
    console.log(animal);
    if (exist) {
      setCartItems(cartItems.map((x) => x.name === animal.name ? { ...exist, qty: exist.qty + 1 } : x))
    } else {
      setCartItems([...cartItems, { ...animal, qty: 1 }])
    }
  }

  const onRemove = (animal) => {
    const exist = cartItems.find((x) => x.name === animal.name)
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.name !== animal.name))
    } else {
      setCartItems(cartItems.map((x) => x.name === animal.name ? { ...exist, qty: exist.qty - 1 } : x))
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const dataURL = `${MENAGERIE_URL}`
      const res = await axios.get(dataURL, { headers })
      console.log(res.data.records)
      setAnimals(res.data.records)
    }
    fetchData()
  }, [])


  return (
    <>
      <div className="main-text-container">
        <h1 className="main-text-header">Magical Menagerie</h1>
      </div>
      <img className="background-image" src={goldmagic} alt="blurred orange background" />
      <div className="basket">
        <Basket
          onAdd={onAdd}
          onRemove={onRemove}
          cartItems={cartItems} />
      </div>
      <div className="pets-container">
        {animals.map((animal) => {
          return (
            <div key={animal.id}>
              {animal.fields.image.map((images) => (
                <Product onAdd={onAdd} key={images.id} images={images} animal={animal.fields} />
              ))}
            </div>

          )
        })}

      </div>
    </>
  )
}
