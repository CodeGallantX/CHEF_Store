import React from 'react'
import CartList from './CartList';

const CartUI = () => {
  return (
    <div>
      <div className='text-lg flex flex-row justify-between items-center'>
        <h2>Cart Items</h2>
        <a href="#products">Back to shopping</a>
      </div>
      <CartList/>
    </div>
  )
}

export default CartUI
