import React from 'react'

export default function Product(props) {

  const { animal, images, onAdd } = props

  return (
    <div className="pets-cage">
      <h3>{animal.name}</h3>
      <img className="pets" src={images.url} alt={animal.name} />
      <div>{animal.price} Galleons</div>
      <div>
        <button className="menagerie-button" onClick={() => onAdd(animal)}>Add to Cart</button>
      </div>
    </div>
  )
}
