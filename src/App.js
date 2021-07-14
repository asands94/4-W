import { Route } from "react-router-dom"
import DiagonAlley from "./components/diagonalley/DiagonAlley"
import DiagonQuiz from "./components/diagonalley/DiagonQuiz"
import HogsmeadeQuiz from "./components/hogsmeade/HogsmeadeQuiz";
import OwlPost from "./components/hogsmeade/OwlPost";
import SendOwlPost from "./components/hogsmeade/SendOwlPost";
import "./style.css"
import TomsDiary from "./components/diary/TomsDiary"
import HogwartsQuiz from "./components/hogwarts/HogwartsQuiz";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header />

      <Route path="/">
        <Main />
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
      <Route path="/tom-riddle-diary">
        <TomsDiary />
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
