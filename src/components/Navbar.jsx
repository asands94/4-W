import React from 'react'
import { Link } from "react-router-dom"
import { Route } from "react-router-dom"
import Home from './Home'
import DirectorySearch from './directory/DirectorySearch'
import Platform from './platform/Platform'

export default function Navbar() {
  return (
    <>
      <div className="NavBar">
        <Link to="/search">Directory</Link>
        <Link to="/platform">Platform 9 3/4</Link>
        <Link k to="/">Home</Link>
      </div>

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/platform">
        <Platform />
      </Route>

      <Route exact path="/search">
        <DirectorySearch />
      </Route>
    </>

  )
}
