import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Account from "./pages/account";
import WishList from "./pages/wishlist";
import Contact from "./pages/contact";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/account" element={<Account/>}/>
      <Route path="/wishlist" element={<WishList/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  )
}

export default App;