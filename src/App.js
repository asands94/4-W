import { Route } from "react-router-dom"
import "./style.css"
import Header from "./components/Header";
import Main from "./components/Main";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <Route path="/">
        <Main />
      </Route>
      {/* <Footer /> */}
      
      

    </>
  );
}

export default App;
