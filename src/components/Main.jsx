import React from 'react'
import { Route } from "react-router-dom"
import DirectoryResults from './directory/DirectoryResults'
import Hogwarts from "./hogwarts/Hogwarts";
import Hogsmeade from "./hogsmeade/Hogsmeade";

export default function Main() {
  return (
    <main>
      <Route path="/search/:id">
        <DirectoryResults />
      </Route>
      <Route path="/hogwarts">
        <Hogwarts />
      </Route>
      <Route path="/hogsmeade">
        <Hogsmeade />
      </Route>
    </main>
  )
}
