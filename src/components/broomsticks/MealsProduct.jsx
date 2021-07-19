import React from 'react'

export default function MealsProduct(props) {

  const { meal, images, onAdd } = props

  return (
    <div className="meal-cage">
      <h3>{meal.name}</h3>
      <img className="foods" src={images.url} alt={meal.name} />
      <div>{meal.price} Galleons</div>
      <div>
        <button className="meal-button" onClick={() => onAdd(meal)}>Add to Cart</button>
      </div>
    </div>
  )
}
