import React from 'react'

export default function Product(props) {

  const { book, images, onAdd } = props

  return (
    <div className="books-cage">
      <h3>{book.name}</h3>
      <img className="books" src={images.url} alt={book.name} />
      <div>{book.price} Galleons</div>
      <div>
        <button onClick={() => onAdd(book)}>Add to Cart</button>
      </div>
    </div>
  )
}
