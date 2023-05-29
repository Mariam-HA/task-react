import "./App.css";
import image1 from "./assets/media/seaFood.jpeg";
import products from "./products.js";

function App() {
  const productsList = products.map((product) => {
    return (
      <div className="mainDishes">
        <img src={product.image} alt={product.name}></img>
        <p>{product.name}</p>
        <p>{product.price}</p>
      </div>
    );
  });

  return (
    <>
      <div className="contener">
        <h1>The Coasteal Catch</h1>
        <h4>
          A seafood lover's paradise, offering a tempting selection of freshly
          caught delights from the ocean, expertly prepared with a creative
          twist that highlights the natural flavors of the sea.
        </h4>
        <img src={image1} alt="resturent"></img>
      </div>

      <div className="plapla">{productsList}</div>
    </>
  );
}

export default App;
