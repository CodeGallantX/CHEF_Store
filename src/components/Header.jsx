import React from 'react'

const Header = () => {
  return (
    <div>
      <header className="bg-[#0a0a0a] py-5 z-40">
        <div className="flex flex-row px-10 xl:px-32 justify-between items-center selection:bg-[#db6a18] mb-5">
          <div className="flex flex-row items-center gap-4">
            <a href="/">
              <img src="/logo.webp" alt="logo" className='w-full h-7'/>
            </a>
            <div className='flex flex-row items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#858585" className="bi bi-search translate-x-14" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
              </svg>
              <input 
                type="text"
                name="search" 
                id="search" 
                placeholder='Search products'
                className="font-sans bg-[#242424] outline-none px-20 py-4 rounded-lg border-none placeholder:text-[#636363] placeholder:text-md text-md font-medium text-[#636363]"
                />
            </div>
          </div>
          <div className='flex gap-6 items-center'>
            <a href="/account">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="fill-white" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
              </svg>
            </a>
            <a href="/favourites">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="fill-white" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
            </svg>
            </a>
            <a href="/cart" className='relative'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="fill-white" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
              </svg>
              <span className="absolute -top-3 -right-2 text-[12px] text-white bg-red-500 px-[6px] rounded-full">2</span>
            </a>
          </div>
        </div>
        <nav className="bg-[#db6a18] py-4">
          <ul className='flex flex-row items-center justify-center text-white gap-16'>
            <li><a href="/#products" className="border-b-2 border-b-white pb-1 font-medium">Cookware</a></li>
            <li><a href="#">Knives</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
      </nav>
      </header>
    </div>
  )
}

export default Header
