import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
  )
}

export default App;