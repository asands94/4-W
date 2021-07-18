import React from 'react'

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)


  return (
    <div>
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.wood}>
          <div>{item.wood} wood wand</div>

          <div>
            <button onClick={() => onAdd(item)}>+</button>
            <button onClick={() => onRemove(item)}>-</button>
          </div>
          <div>
            {item.qty} x {item.price} Galleons
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div>Total Price</div>
          <div>{itemsPrice} Galleons</div>
          <button onClick={() => alert('Implement Checkout')}>Checkout</button>
        </>
      )}
    </div>
  )
}
