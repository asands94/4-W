import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { FLOURISH_URL, headers } from '../services'

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
    <div>
      {books.map((book, index) => {
        return (
          <div key={index}>
            <p>{book.fields?.name}</p>
            <div>
              {book.fields.image.map((images) => {
                return (
                  <>
                    <img src={images.url} alt={book.name} />
                  </>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Flourish
