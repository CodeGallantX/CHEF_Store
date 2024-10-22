import React, { useState } from 'react'


const [email, setEmail] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    console.log("Email submitted:", email);
    setEmail('');
    alert("Thank you for signing up!");
  };


const OrderSummary = () => {
  return (
    <div>
      <h3>Order Summary</h3>
      <div>
        <div className='flex flex-row items-center justify-between border-b border-b-[#e0dffe] py-2'>
            <span className='font-semibold text-lg'>Subtotal</span>
            <span className='font-semibold text-lg'>₦180,000</span>
        </div>
        <div className='flex flex-row items-center justify-between border-b border-b-[#e0dffe] py-2'>
            <span className='font-semibold text-lg'>Shipping</span>
            <span className='font-semibold text-lg'>₦10,000</span>
        </div>
        <div className='flex flex-row items-center justify-between border-b border-b-[#e0dffe] py-2'>
            <span className='font-semibold text-lg'>Total</span>
            <span className='font-semibold text-lg'>₦190,000</span>
        </div>
      </div>
      <div>
      <form onSubmit={handleSubmit} className='flex flex-row items-center w-full max-w-sm relative'>
              <input 
                type="text"
                name="promoCode" 
                id="promoCode" 
                placeholder='PROMO CODE'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow font-sans bg-[#242424] outline-none pl-4 pr-20 py-3 rounded-md border-black placeholder:text-[#636363] placeholder:text-md focus:ring-1 focus:ring-[#fff] transition-all  duration-300 ease-in-out text-md font-medium text-[#919090]"
                required
              />
              <button 
                type="submit" 
                className='absolute group bg-[#db6a18] text-white px-3 py-3 rounded-r-md right-0 -translate-x-3 cursor-pointer transition-colors duration-200 hover:bg-black outline-none'>
                  Apply
              </button>                  
            </form>
      </div>
    </div>
  )
}

export default OrderSummary
