import React from 'react'
import { Route } from "react-router-dom"
import DirectoryResults from './directory/DirectoryResults'
import Hogwarts from "./hogwarts/Hogwarts";
import Hogsmeade from "./hogsmeade/Hogsmeade";
import NewDiary from './diary/NewDiary';
import TomsDiary from './diary/TomsDiary';
import DirectorySearch from './directory/DirectorySearch';
import Potions from './potionsclass/Potions';
import Gringotts from './gringotts/Gringotts';
import DiagonAlley from "./diagonalley/DiagonAlley"
import DiagonQuiz from "./diagonalley/DiagonQuiz"
import HogsmeadeQuiz from "./hogsmeade/HogsmeadeQuiz";
import OwlPost from "./hogsmeade/OwlPost";
import SendOwlPost from "./hogsmeade/SendOwlPost";
import HogwartsQuiz from "./hogwarts/HogwartsQuiz";
import Menagerie from './gringotts/Menagerie';
import Ollivanders from './gringotts/Ollivanders';
import Flourish from './gringotts/Flourish';
import ThreeBroomSticks from './hogsmeade/ThreeBroomSticks';

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

      <Route path="/potions-class">
        <Potions />
      </Route>

      <Route path="/diagon-alley">
        <DiagonAlley />
      </Route>
      <Route path="/diagon-alley-quiz">
        <DiagonQuiz />
      </Route>

      <Route path="/hogwarts-quiz">
        <HogwartsQuiz />
      </Route>

      <Route path="/hogsmeade-quiz">
        <HogsmeadeQuiz />
      </Route>

      <Route path="/owl-post">
        <OwlPost />
      </Route>

      <Route path="/new-owl-post/:owl">
        <SendOwlPost />
      </Route>

      <Route path="/gringotts">
        <Gringotts />
      </Route>

      <Route path="/magical-menagerie">
        <Menagerie />
      </Route>

      <Route path="/ollivanders">
        <Ollivanders />
      </Route>

      <Route path="/flourish-and-blotts">
        <Flourish />
      </Route>

      <Route path="/the-three-broomsticks">
        <ThreeBroomSticks />
      </Route>
    </main>
  )
}
