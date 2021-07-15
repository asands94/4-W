import React from 'react'
import { Route } from "react-router-dom"
import DirectoryResults from './directory/DirectoryResults'
import Hogwarts from "./hogwarts/Hogwarts";
import Hogsmeade from "./hogsmeade/Hogsmeade";
import NewDiary from './diary/NewDiary';
import TomsDiary from './diary/TomsDiary';
import DirectorySearch from './directory/DirectorySearch';

export default function Main() {
  return (
    <main>
      <Route exact path="/search">
        <DirectorySearch />
      </Route>

      <Route path="/search/:character">
        <DirectoryResults />
      </Route>

      <Route path="/hogwarts">
        <Hogwarts />
      </Route>

      <Route path="/hogsmeade">
        <Hogsmeade />
      </Route>

      <Route path="/tom-riddle-diary">
        <TomsDiary />
      </Route>

      <Route path="/new-diary">
        <NewDiary />
      </Route>
    </main>
  )
}
