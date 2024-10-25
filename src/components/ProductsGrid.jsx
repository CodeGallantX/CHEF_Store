// import React from 'react';
import products from '../data/products/products.json'


function cartAlert() {
  const alertBox = document.getElementById('cart-alert');

  alertBox.classList.remove('-right-72');
  alertBox.classList.add('right-5');

  setTimeout(() => {
    alertBox.classList.remove('right-5');
    alertBox.classList.add('-right-72');
  }, 3000);
}


function heartFill(index) {
  const heart = document.getElementById(`heart-${index}`);

  if (heart.classList.contains('filled')) {
    heart.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#fff" class="fill-white" viewBox="0 0 16 16">
        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
      </svg>
    `;
    heart.classList.remove('filled');
  } else {
    heart.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#fff" className="fill-white" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
      </svg>
    `;
    heart.classList.add('filled');
  }
}

// Product grid component
const ProductsGrid = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 p-6 mt-10'>
      {products.map((product, index) => (
        <div key={index} className='relative w-96 h-auto mx-auto mb-8'>
          <div className='relative z-10 bg-white shadow-lg rounded overflow-hidden'>
            <div className='relative'>
              <img
                src={product.url}
                alt={product.name}
                className='w-full h-56 object-cover rounded-t-md'
              />
              <div
                onClick={() => heartFill(index)}
                className='absolute bottom-3 right-3 bg-[#db6918b9] p-2 rounded-full cursor-pointer'
              >
                <div id={`heart-${index}`} className="heart-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="fill-white" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>
                </div>
              </div>
            </div>
            <div className='py-6 px-4 flex flex-col gap-2 rounded-b-md'>
              <div className="flex flex-row items-center justify-between">
                <h3 className='font-semibold font-serif text-lg'>{product.name}</h3>
                <span className='font-semibold text-lg'>₦{product.price}</span>
              </div>
              <p className='text-gray-800 text-sm'>{product.description}</p>

              <div>
                <h4 className='font-medium mt-2 font-serif'>Available colours</h4>
                <ul className='flex gap-2'>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>

              <div className='flex flex-row justify-between items-center'>
                <div>
                  <h4 className='font-medium mt-2 font-serif'>Sizes in set</h4>
                  <ul className='flex gap-2'>
                    {product.sizes.map((size, idx) => (
                      <li key={idx} className='text-sm'>
                        {size}
                      </li>
                    ))}
                  </ul>
                </div>

                <button onClick={cartAlert} className='group bg-none hover:bg-black text-black flex flex-row justify-between hover:text-white font-medium border hover:fill-white border-black py-2 px-4 rounded text-sm gap-3 transition-all duration-200 ease'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="fill-black group-hover:fill-white" viewBox="0 0 16 16">
                    <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* <div className='absolute top-0 left-0 group-hover:top-3 group-hover:left-3 w-full h-full rounded-lg border-2 border-black -z-10 transition-all duration-300 ease-in-out'></div> */}
        </div>
      ))}
    </div>
  );
}

export default ProductsGrid;
