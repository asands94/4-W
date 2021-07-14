import { Route } from "react-router-dom"
import DirectorySearch from "./components/directory/DirectorySearch";
import DiagonAlley from "./components/diagonalley/DiagonAlley"
import Platform from "./components/platform/Platform"
import DirectoryResults from "./components/directory/DirectoryResults"
import DiagonQuiz from "./components/diagonalley/DiagonQuiz"
import HogsmeadeQuiz from "./components/hogsmeade/HogsmeadeQuiz";
import Hogsmeade from "./components/hogsmeade/Hogsmeade";
import OwlPost from "./components/hogsmeade/OwlPost";
import Hogwarts from "./components/hogwarts/Hogwarts";
import SendOwlPost from "./components/hogsmeade/SendOwlPost";
import Home from "./components/Home";
import "./style.css"
import TomsDiary from "./components/hogwarts/TomsDiary"
import HogwartsQuiz from "./components/hogwarts/HogwartsQuiz";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />

      {/* <Route exact path="/">
        <Home />
      </Route> */}

      <Route exact path="/search">
        <DirectorySearch />
      </Route>
      <Route path="/search/:id">
        <DirectoryResults />
      </Route>

      <Route path="/diagon-alley">
        <DiagonAlley />
      </Route>
      <Route path="/diagon-alley-quiz">
        <DiagonQuiz />
      </Route>

      <Route path="/platform">
        <Platform />
      </Route>

      <Route path="/hogwarts">
        <Hogwarts />
      </Route>
      <Route path="/hogwarts-quiz">
        <HogwartsQuiz />
      </Route>
      <Route path="/tom-riddle-diary">
        <TomsDiary />
      </Route>

      <Route path="/hogsmeade">
        <Hogsmeade />
      </Route>
      <Route path="/hogsmeade-quiz">
        <HogsmeadeQuiz />
      </Route>
      <Route path="/owl-post">
        <OwlPost />
      </Route>
      <Route path="/new-owl-post">
        <SendOwlPost />
      </Route>

    </>
  );
}

export default App;
