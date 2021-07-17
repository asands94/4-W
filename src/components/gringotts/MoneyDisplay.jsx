import React from 'react'
import { Link } from "react-router-dom"

export default function MoneyDisplay(props) {
  return (
    <div>
      <div><button className="gringotts-card">{props.balance} Galleons</button></div>
    </div>
  )
}
