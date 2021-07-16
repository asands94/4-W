import React, { useState } from 'react'
import GringottsImg from "./gringotts.png"
import { Link } from "react-router-dom"
import MoneyDisplay from './MoneyDisplay'


export default function Gringotts() {

  const [balance, setBalance] = useState(0)

  return (
    <>
      <img className="main-images main-bg" src={GringottsImg} alt="Gringotts" />
      <Link to="/magical-menagerie"><button>Shop for a new pet</button></Link>
      <Link to="/flourish-and-blotts"><button>Shop for school books</button></Link>
      <Link to="/ollivanders"><button>Shop for a wand</button></Link>

      <button onClick={() => setBalance(balance + 50)}>Deposit 50 Galleons</button>
      <button onClick={() => setBalance(balance + 75)}>Deposit 75 Galleons</button>
      <button onClick={() => setBalance(balance + 100)}>Deposit 100 Galleons</button>
      <MoneyDisplay balance={balance} />
    </>
  )
}
