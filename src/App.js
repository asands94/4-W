import { Route } from "react-router-dom"
import "./style.css"
import Header from "./components/Header";
import DirectoryResults from './components/directory/DirectoryResults'
import Hogwarts from "./components/hogwarts/Hogwarts";
import Hogsmeade from "./components/hogsmeade/Hogsmeade";
import NewDiary from './components/diary/NewDiary';
import TomsDiary from './components/diary/TomsDiary';
import DirectorySearch from './components/directory/DirectorySearch';
import Potions from './components/potionsclass/Potions';
import Gringotts from './components/gringotts/Gringotts';
import DiagonAlley from "./components/diagonalley/DiagonAlley"
import DiagonQuiz from "./components/diagonalley/DiagonQuiz"
import HogsmeadeQuiz from "./components/hogsmeade/HogsmeadeQuiz";
import OwlPost from "./components/hogsmeade/OwlPost";
import SendOwlPost from "./components/hogsmeade/SendOwlPost";
import HogwartsQuiz from "./components/hogwarts/HogwartsQuiz";
import Menagerie from './components/gringotts/Menagerie';
import Ollivanders from './components/gringotts/Ollivanders';
import Flourish from './components/gringotts/Flourish';
import ThreeBroomSticks from './components/hogsmeade/ThreeBroomSticks';
import Platform from "./components/platform/Platform";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      

      <Route path="/platform">
        <Platform />
      </Route>

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

      {/* <Footer /> */}
      
      

    </>
  );
}

export default App;
