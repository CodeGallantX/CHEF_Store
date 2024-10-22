import React from 'react'


// const [email, setEmail] = useState('');
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (!email) {
//       alert("Please enter your email address.");
//       return;
//     }

//     console.log("Email submitted:", email);
//     setEmail('');
//     alert("Thank you for signing up!");
//   };


const OrderSummary = () => {
  return (
    <div className="w-full">
      <h3 className='font-bold text-2xl font-serif'>Order Summary</h3>
      <div className='font-medium text-[#3c3c3c] text-lg flex flex-col gap-4'>
        <div className='flex flex-row items-center justify-between border-b border-b-[#e0dffe] py-2'>
            <span className='text-lg'>Subtotal</span>
            <span className='text-lg'>₦180,000</span>
        </div>
        <div className='flex flex-row items-center justify-between border-b border-b-[#e0dffe] py-2'>
            <span className='text-lg'>Shipping</span>
            <span className='text-lg'>₦10,000</span>
        </div>
        <div className='flex flex-row items-center justify-between border-b border-b-[#e0dffe] py-2'>
            <span className='text-lg'>Total</span>
            <span className='text-lg'>₦190,000</span>
        </div>
      </div>
      <div>
      <form className='flex flex-row items-center w-full'>
        <div className='bg-transparent border border-black rounded h-16 w-full flex flex-row justify-end'>
          <div className='flex flex-row items-center justify-end pl-2 py-2'>
              <input 
                type="text"
                name="promoCode" 
                id="promoCode" 
                placeholder='PROMO CODE'
                className="flex-grow font-sans outline-none w-full h-8 mt-1 indent-3 placeholder:indent-3 bg-white placeholder:text-[#636363] placeholder:text-md transition-all  duration-300 ease-in-out text-md font-medium text-black"
                required
              />
          </div>
              <button 
                type="submit" 
                className='group bg-[#db6a18] text-white px-8 h-14 py-2 rounded-r cursor-pointer transition-colors duration-200 hover:bg-black outline-none'>
                  Apply
              </button>                  
          </div>
      </form>
      </div>
    </div>
  )
}

export default OrderSummary
