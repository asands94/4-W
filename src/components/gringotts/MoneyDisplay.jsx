import React from 'react'
import { Link } from "react-router-dom"

export default function MoneyDisplay(props) {
  return (
    <div>
      <div><Link to="/gringotts"><button className="gringotts-money-display">{props.balance} Galleons</button></Link></div>
    </div>
  )
}
