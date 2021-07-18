import React from 'react'
import { Link } from "react-router-dom"

export default function MoneyDisplay(props) {

  const { subBalance } = props
  return (
    <div>
      <Link to="/gringotts"><button className="gringotts-money-display">{subBalance} Galleons</button></Link>
    </div >
  )
}
