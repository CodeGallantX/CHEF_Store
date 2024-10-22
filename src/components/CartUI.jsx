import React from 'react'
import CartList from './CartList';

const CartUI = () => {
  return (
    <div>
      <div className="container mx-auto px-8 py-6 bg-gray-100">
        <div className='text-lg flex flex-row justify-between items-center'>
          <h2 className='font-serif text-3xl font-semibold'>Cart Items</h2>
          <a href="/#products">&larr; Back to shopping</a>
        </div>
        <div>
          <CartList/>
        </div>
      </div>
    </div>
  )
}

export default CartUI
