import React, { useState } from 'react'
import GringottsImg from "./gringotts.png"
import { Link } from "react-router-dom"


export default function Gringotts() {

  const [balance, setBalance] = useState(0)

  return (
    <>
      <img className="Main-Images Main-BG" src={GringottsImg} alt="Gringotts" />
      <Link to="/magical-menagerie"><button>Shop for a new pet</button></Link>
      <Link to="/flourish-and-blotts"><button>Shop for school books</button></Link>
      <Link to="/ollivanders"><button>Shop for a wand</button></Link>
      <h1>{balance} Galleons</h1>
      <button onClick={() => setBalance(balance + 300)}>Deposit 300 Galleons</button>

    </>
  )
}
