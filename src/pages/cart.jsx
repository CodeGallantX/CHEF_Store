import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardUI from '../components/CartUI'

const App = () => {
  return (
    <div>
      <Header/>
      <CartUI/>
      <Footer/>
    </div>
  )
}

export default App;