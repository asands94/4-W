import React from 'react'

export default function MoneyDisplay(props) {
  return (
    <div>
      <div className="gringotts"><h1 className="gringotts-Text">{props.balance} Galleons</h1></div>
    </div>
  )
}
