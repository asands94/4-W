import React from 'react'

export default function DrinksProduct(props) {

  const { drink, images, onAdd } = props

  return (
    <div className="drink-cage">
      <h3>{drink.name}</h3>
      <img className="foods" src={images.url} alt={drink.name} />
      <div>{drink.price} Galleons</div>
      <div>
        <button className="drink-button" onClick={() => onAdd(drink)}>Add to Cart</button>
      </div>
    </div>
  )
}
