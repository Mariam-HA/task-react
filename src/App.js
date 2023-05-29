import "./App.css";
import Home from "./components/Home";
import Dishes from "./components/Dishes";
import Body from "./components/Body";

function App() {
  return (
    <>
      <div className="contener">
        <Home />
        <Body />
      </div>
      <br />
      <Dishes />
    </>
  );
}

export default App;
