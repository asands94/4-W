import React from 'react'

export default function SnacksProduct(props) {

  const { snack, images, onAdd } = props

  return (
    <div className="snack-cage">
      <h3>{snack.name}</h3>
      <img className="foods" src={images.url} alt={snack.name} />
      <div>{snack.price} Galleons</div>
      <div>
        <button onClick={() => onAdd(snack)}>Add to Cart</button>
      </div>
    </div>
  )
}
