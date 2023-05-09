import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductForm from "./Components/AddProduct/ProductForm";
import Header from "./Components/UI/Header/Header";
import Home from "./Components/Home/Home";
import Context from "./store/context";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";

function App() {

  const [cartOpen, setCartOpen] = useState(true)
  return (
    <div className="App">
      <BrowserRouter>
        <Context>
          <Header cartOpen = {setCartOpen} />
          {cartOpen && <ProductForm />}
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Context>
      </BrowserRouter>
    </div>
  );
}

export default App;
