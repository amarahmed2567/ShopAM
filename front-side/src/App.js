import React,{useState} from "react";
import Home from "./components/Home/Home";
import NavBar from "./components/Nav/NavBar";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Products from "./components/product/Products";
import Product from "./components/product/ItemPage";
import Cart from "./components/Cart/Cart";
import { Container} from 'react-bootstrap'


function App() {
  const [isAddedToCart,setIsAddedToCart] =useState(false)

  return (
    <Router>
      <NavBar isAddedToCart={isAddedToCart} />
    <Container>
    <Routes>
      <Route path="/" element={<Home/>} exact />
      <Route path="/products" element={<Products/>} />
      <Route path="/product/:id" element={<Product isAddedToCart={isAddedToCart} setIsAddedToCart={setIsAddedToCart}/>} />
      <Route path="/cart" element={<Cart isAddedToCart={isAddedToCart}  setIsAddedToCart={setIsAddedToCart}/>} />
    </Routes>
    </Container>
    </Router>
  );
}

export default App;
