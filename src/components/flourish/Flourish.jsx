import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { FLOURISH_URL, headers } from '../services'
import bookmagic from "./bookmagic.png"

function Flourish() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const dataURL = `${FLOURISH_URL}`
      const res = await axios.get(dataURL, { headers })
      console.log(res.data.records)
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
      <div className="books-container">
        {books.map((book, index) => {
          return (
            <div className="books-cage" key={index}>
              <h3>{book.fields?.name}</h3>
              <div>
                {book.fields.image.map((images) => {
                  return (
                    <>
                      <img className="books" src={images.url} alt={book.name} />
                    </>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Flourish
