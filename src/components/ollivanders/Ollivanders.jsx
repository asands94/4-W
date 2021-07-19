import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { OLLIVANDERS_URL, headers } from '../services'
import greenmagic from "./greenmagic.png"
import Basket from './Basket'
import Product from './Product'
import "./ollivanders.css"


export default function Ollivanders() {
  const [wands, setWands] = useState([])
  const [cartItems, setCartItems] = useState([])

  const onAdd = (wands) => {
    const exist = cartItems.find((x) => x.wood === wands.wood);
    console.log(wands)
    if (exist) {
      setCartItems(cartItems.map((x) => x.wood === wands.wood ? { ...exist, qty: exist.qty + 1 } : x))
    } else {
      setCartItems([...cartItems, { ...wands, qty: 1 }])
    }
  }

  const onRemove = (wands) => {
    const exist = cartItems.find((x) => x.wood === wands.wood)
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.wood !== wands.wood))
    } else {
      setCartItems(cartItems.map((x) => x.wood === wands.wood ? { ...exist, qty: exist.qty - 1 } : x))
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const dataURL = `${OLLIVANDERS_URL}`
      const res = await axios.get(dataURL, { headers })
      console.log(res.data.records)
      setWands(res.data.records)
    }
    fetchData()
  }, [])

  return (
    <>
      <div className="main-text-container">
        <h1 className="main-text-header">Ollivanders</h1>
      </div>
      <img className="background-image" src={greenmagic} alt="blurred blue background" />
      <div className="basket">
        <Basket
          onAdd={onAdd}
          onRemove={onRemove}
          cartItems={cartItems} />
      </div>
      <div className="wands-container">
        {wands.map((wand) => {
          return (
            <div key={wand.id}>
              {wand.fields.image.map((images) => (
                <Product onAdd={onAdd} key={images.id} images={images} wand={wand.fields} />
              ))}
            </div>

          )
        })}
      </div>
    </>

  )
}
