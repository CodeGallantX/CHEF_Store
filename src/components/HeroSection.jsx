import React from 'react';
import Header from './Header';

const HeroSection = () => {
  return (
    <div>
      <Header />
      <section className="relative h-screen">
        <img 
          src="https://ik.imagekit.io/mshcgnjju/CHEF%20-%20Timbu%20Cloud%20Store/hero-bg.jpg" 
          alt="" 
          className="w-full h-full object-cover" />
        <div className='absolute top-0 bg-black opacity-20 w-full h-full'></div>
        <div className='absolute -top-10 w-full h-full flex flex-col items-center justify-center text-white gap-3'>
          <h2 className='font-serif text-5xl font-bold'>Built to last, Cook with Confidence</h2>
          <p className='font-sans text-xl'>Limited edition! Get yours before they’re gone again, shop the collection now!</p>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
