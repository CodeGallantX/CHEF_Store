import React from 'react';



const products = [
    {
        name: 'Classic Non-stick Set',
        price: '190,000',
        url: 'https://ik.imagekit.io/mshcgnjju/CHEF%20-%20Timbu%20Cloud%20Store/stainless-steel-pots-pans-isolated-white.jpg?updatedAt=1720283849632',
    },
    {
        name: 'Stain-Free Frying Pan',
        price: '215,000',
        url: 'https://ik.imagekit.io/mshcgnjju/CHEF%20-%20Timbu%20Cloud%20Store/bluepan.jpg?updatedAt=1720304132952',
    },
    {
        name: 'Transparent Kettle',
        price: '100,000',
        url: 'https://ik.imagekit.io/mshcgnjju/CHEF%20-%20Timbu%20Cloud%20Store/transparent_jug.jpg?updatedAt=1720304094125',
    },
    {
        name: 'Superior Non-stick Set',
        price: '290,000',
        url: 'https://ik.imagekit.io/mshcgnjju/CHEF%20-%20Timbu%20Cloud%20Store/redpots.jpg?updatedAt=1720304148887',
    },
    {
        name: 'Non-rust Frying Pan',
        price: '80,000',
        url: 'https://ik.imagekit.io/mshcgnjju/CHEF%20-%20Timbu%20Cloud%20Store/copper_pan.jpg?updatedAt=1720304110112',
    },
    {
        name: 'Double Coat Non-stick',
        price: '120,000',
        url: 'https://ik.imagekit.io/mshcgnjju/CHEF%20-%20Timbu%20Cloud%20Store/whitepot.jpg?updatedAt=1720304126521',
        theme: {
            width: '20px',
            height: '20px',
            backgroundColor: '#78716c',
            borderRadius: "100%",
        },
    },
];




const CartItem = () => {
    return (
        <div>
            {products.map((product, index) => (
            <div key={index} className='px-8 py-8 bg-[#ffffff] border border-[#e0dffe] rounded mt-6'>
                <div className="w-64 h-44">
                    <img src={product.url} alt={product.name} className="rounded-sm object-cover w-full h-full"/>
                </div>
                <div>
                    <div className="flex flex-row justify-between">
                        <h3 className="text-xl font-bold font-serif">{product.name}</h3>
                        <span className='font-semibold text-2xl'>{product.price}</span>
                    </div>
                    <div className="flex flex-row justify-between">
                        <span className="text-lg font-medium">Available colours</span>
                        <div className="flex flex-row gap-3 items-center">
                            <span className="w-5 h-5 bg-stone-500 rounded-full"></span>
                            <span className="w-5 h-5 bg-gray-500 rounded-full"></span>
                            <span className="w-5 h-5 bg-slate-500 rounded-full"></span>
                        </div>
                    </div>
                    <div className="flex flex-row items-center font-medium gap-6">
                        <div className="flex flex-row gap-2 items-center cursor-pointer">
                            <span>Delete</span>
                        </div>
                        <div className="flex flex-row gap-2 items-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="fill-black" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                            </svg>
                            <span>Move to wishlist</span>
                        </div>
                        <div className="flex flex-row gap-2 items-center cursor-pointer">
                            <span>Quantity</span>
                        </div>
                    </div>
                </div>
            </div>
             ))}
        </div>
    )
}

export default CartItem;