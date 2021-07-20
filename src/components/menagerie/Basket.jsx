import React, { useState, useEffect } from 'react'
import MoneyDisplay from '../gringotts/MoneyDisplay'


export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
  const [subBalance, setSubBalance] = useState(
    Number(localStorage.getItem('newBalanceInLocalStorage')) || 0)

  useEffect(() => {
    localStorage.setItem('newBalanceInLocalStorage', subBalance)
  }, [subBalance])



  return (
    <div>
      <MoneyDisplay subBalance={subBalance} />
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.name}>
          <div>{item.name}</div>
          {/* {console.log(item.name)} */}
          <div>
            <button className="add-button-menagerie" onClick={() => onAdd(item)}>+</button>
            <button className="minus-button-menagerie" onClick={() => onRemove(item)}>-</button>
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
          <button className="button-menagerie" disabled={subBalance < itemsPrice} onClick={() => setSubBalance(subBalance - itemsPrice)}>Checkout</button>
        </>
      )}

    </div>
  )
}
