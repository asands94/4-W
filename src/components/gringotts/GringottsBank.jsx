import React, { useState } from 'react'
import { Link } from "react-router-dom"
import MoneyDisplay from './MoneyDisplay'
import "./gringotts.css"

export default function GringottsBank() {

  const [balance, setBalance] = useState(0)


  return (
    <div>
      <Link to="/gringotts-shopping"><button className="gringotts-card">Gringotts</button></Link>
      <button onClick={() => setBalance(balance + 1)}>+</button>
      <button onClick={() => setBalance(0)}>-</button>
      <MoneyDisplay balance={balance} />
    </div>
  )
}
