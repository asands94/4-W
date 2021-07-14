import React from 'react'
import { Link } from "react-router-dom"

export default function DirectorySearch() {
  return (
    <div>
      Directory Search Page with general results
      <Link to="/search/:id">Specific Results</Link>

    </div>
  )
}
