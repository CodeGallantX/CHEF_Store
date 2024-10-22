import React from 'react'
import CartList from './CartList';
import OrderSummary from './OrderSummary';

const CartUI = () => {
  return (
    <div>
      <div className="container mx-auto px-8 py-6 bg-gray-100">
        <div className='text-lg flex flex-row justify-between items-center'>
          <h2 className='font-serif text-3xl font-semibold'>Cart Items</h2>
          <a href="/#products">&larr; Back to shopping</a>
        </div>
        <div className='flex flex-row items-start justify-between'>
          <CartList/>
          <OrderSummary/>

        </div>
      </div>
    </div>
  )
}

export default CartUI
