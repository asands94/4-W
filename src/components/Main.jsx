import React from 'react'
import { Route } from "react-router-dom"
import DirectoryResults from './directory/DirectoryResults'
import Hogwarts from "./hogwarts/Hogwarts";
import Hogsmeade from "./hogsmeade/Hogsmeade";
import NewDiary from './diary/NewDiary';
import DiaryDetails from './diary/DiaryDetails';
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
      <Route path="/new-diary">
        <NewDiary />
      </Route>
      <Route path="/tom-riddle-diary/:id">
        <DiaryDetails />
      </Route>
    </main>
  )
}
