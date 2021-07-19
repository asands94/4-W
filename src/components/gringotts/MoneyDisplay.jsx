import React from 'react'
import { Link } from "react-router-dom"

export default function MoneyDisplay(props) {

  const { subBalance } = props
  return (
    <div>
      <Link to="/gringotts">
        <button className="gringotts-money-display"><div className="gringotts-money-display-container">
          Balance
        </div>
          {subBalance} Galleons
        </button></Link>
    </div >
  )
}
