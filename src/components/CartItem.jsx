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
    // {
    //     name: 'Transparent Kettle',
    //     price: '100,000',
    //     url: 'https://ik.imagekit.io/mshcgnjju/CHEF%20-%20Timbu%20Cloud%20Store/transparent_jug.jpg?updatedAt=1720304094125',
    // },
    // {
    //     name: 'Superior Non-stick Set',
    //     price: '290,000',
    //     url: 'https://ik.imagekit.io/mshcgnjju/CHEF%20-%20Timbu%20Cloud%20Store/redpots.jpg?updatedAt=1720304148887',
    // },
    // {
    //     name: 'Non-rust Frying Pan',
    //     price: '80,000',
    //     url: 'https://ik.imagekit.io/mshcgnjju/CHEF%20-%20Timbu%20Cloud%20Store/copper_pan.jpg?updatedAt=1720304110112',
    // },
    // {
    //     name: 'Double Coat Non-stick',
    //     price: '120,000',
    //     url: 'https://ik.imagekit.io/mshcgnjju/CHEF%20-%20Timbu%20Cloud%20Store/whitepot.jpg?updatedAt=1720304126521',
    //     theme: {
    //         width: '20px',
    //         height: '20px',
    //         backgroundColor: '#78716c',
    //         borderRadius: "100%",
    //     },
    // },
];



const CartItem = () => {
    return (
        <div>
            {products.map((product, index) => (
            <div key={index} className='px-8 py-8 bg-[#ffffff] border border-[#e0dffe] rounded mt-6 flex flex-row items-start justify-between'>
                <div className="w-64 h-44">
                    <img src={product.url} alt={product.name} className="rounded-sm object-cover w-full h-full"/>
                </div>
                <div className='flex flex-col gap-6'>
                    <div className="flex flex-row justify-between">
                        <h3 className="text-xl font-bold font-serif">{product.name}</h3>
                        <span className='font-semibold text-2xl'>₦{product.price}</span>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="fill-black" viewBox="0 0 448 512">
                            <path d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z"/>
                        </svg>
                            <span>Delete</span>
                        </div>
                        <div className="flex flex-row gap-2 items-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="fill-black" viewBox="0 0 512 512">
                            <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
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