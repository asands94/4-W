import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { FLOURISH_URL, headers } from '../services'
import Product from './Product'
import bookmagic from "./bookmagic.png"
import Basket from './Basket'
import "./flourish.css"



export default function Main(props) {
  const [books, setBooks] = useState([])
  const [cartItems, setCartItems] = useState([])

  const onAdd = (books) => {
    const exist = cartItems.find((x) => x.name === books.name);
    console.log(books);
    if (exist) {
      setCartItems(cartItems.map((x) => x.name === books.name ? { ...exist, qty: exist.qty + 1 } : x))
    } else {
      setCartItems([...cartItems, { ...books, qty: 1 }])
    }
  }

  const onRemove = (book) => {
    const exist = cartItems.find((x) => x.name === book.name)
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.name !== book.name))
    } else {
      setCartItems(cartItems.map((x) => x.name === book.name ? { ...exist, qty: exist.qty - 1 } : x))
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const dataURL = `${FLOURISH_URL}`
      const res = await axios.get(dataURL, { headers })
      // console.log(res.data.records)
      setBooks(res.data.records)
    }
    fetchData()
  }, [])


  return (
    <>

      <div className="main-text-container">
        <h1 className="main-text-header">Flourish and Blotts</h1>
      </div>
      <img className="background-image" src={bookmagic} alt="blurred book" />

      <div className="basket">
        <Basket
          onAdd={onAdd}
          onRemove={onRemove}
          cartItems={cartItems} />

      </div>

      <div className="books-container">
        {books.map((book) => {
          return (
            <div>
              {book.fields.image.map((images) => (
                <Product onAdd={onAdd} key={book.fields.id} images={images} book={book.fields} />
              ))}
            </div>

          )
        })}

      </div>
    </>
  )
}



