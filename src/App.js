import "./App.css";
import image1 from "./assets/media/images.jpeg";

function App() {
  return (
    <>
      <div className="contener">
        <h1 className="title">Cookies and Beyond</h1>
        <p className="desctiption">where cookie maniacsgather</p>
        <img src={image1} alt="resturent" className="resturent image"></img>
      </div>
    </>
  );
}

export default App;
