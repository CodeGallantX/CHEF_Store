// import React from 'react'

const OrderSummary = () => {
  return (
    <div className='flex flex-col items-center ml-auto'>
      <div className='flex flex-col gap-6'>
        <h3 className='font-bold text-3xl font-serif'>Order Summary</h3>
        <div className='font-medium text-[#3c3c3c] text-lg flex flex-col gap-4'>
          <div className='flex flex-row items-center justify-between border-b border-b-[#e0dffe] py-3'>
              <span className='text-lg'>Subtotal</span>
              <span className='text-lg'>₦180,000</span>
          </div>
          <div className='flex flex-row items-center justify-between border-b border-b-[#e0dffe] py-3'>
              <span className='text-lg'>Shipping</span>
              <span className='text-lg'>₦10,000</span>
          </div>
          <div className='flex flex-row items-center justify-between border-b border-b-[#e0dffe] py-3'>
              <span className='text-lg'>Total</span>
              <span className='text-lg'>₦190,000</span>
          </div>
        </div>
        <div>
          <form className='flex flex-row items-center w-full mt-2'>
            <div className='bg-transparent border border-black rounded h-14 w-full flex flex-row justify-end'>
              <div className='flex flex-row items-center justify-end pl-2 py-2 w-full'>
                  <input 
                    type="text"
                    name="promoCode" 
                    id="promoCode" 
                    placeholder='Promo code'
                    className="flex-grow font-sans outline-none w-full h-8 indent-3 placeholder:indent-3 bg-white placeholder:text-[#636363] placeholder:text-md transition-all  duration-300 ease-in-out text-md font-medium text-black"
                    required
                  />
              </div>
                  <button 
                    type="submit" 
                    className='group bg-[#db6a18] text-white px-14 h-[54px] rounded-r-sm cursor-pointer transition-colors duration-200 hover:bg-black outline-none'>
                      Apply
                  </button>                  
              </div>
          </form>
          <a href="/checkout">
            <button 
              className='group bg-black w-full mt-6 text-white h-16 rounded cursor-pointer transition-colors duration-200 outline-none'>
              Checkout
            </button>  
          </a>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary;
