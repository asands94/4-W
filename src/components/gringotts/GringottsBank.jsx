import React, { useState } from 'react'
import { Link } from "react-router-dom"
// import MoneyDisplay from './MoneyDisplay'

export default function GringottsBank() {

  const [balance, setBalance] = useState(0)


  return (
    <div>
      <Link to="/gringotts-shopping"><button className="container-card-two">Gringotts</button></Link>
      {/* <MoneyDisplay balance={balance} /> */}
    </div>
  )
}
