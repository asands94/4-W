import React from 'react'
import { Link } from "react-router-dom"

export default function MoneyDisplay(props) {
  return (
    <div>
      <div><h1 className="gringotts-text">{props.balance} Galleons</h1></div>
    </div>
  )
}
