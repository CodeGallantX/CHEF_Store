import React from 'react'
import CartList from './CartList';

const CartUI = () => {
  return (
    <div>
      <div>
        <h2>Cart Items</h2>
        <a href="#products">Back to shopping</a>
      </div>
      <CartList/>
    </div>
  )
}

export default CartUI
