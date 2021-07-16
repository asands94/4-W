import React from 'react'

export default function MoneyDisplay(props) {
  return (
    <div>
      <div className="Gringotts"><h1 className="Gringotts-Text">{props.balance} Galleons</h1></div>
    </div>
  )
}
