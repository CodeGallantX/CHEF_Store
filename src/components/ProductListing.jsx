import React from 'react';
import Filter from './Filter';
import ProductsGrid from './ProductsGrid';
import Alert from './Alert';

const ProductListing = () => {
  return (
    <div>
      <section id="products" className="m-24 relative scroll-m-10">
        <div className='flex flex-col items-center justify-center gap-2'>
          <h2 className='font-serif font-bold text-2xl text-center'>Cookware Collection</h2>
          <span className="w-32 h-1 text-center bg-[#db6a18]"></span>
        </div>
        <Filter/>
        <ProductsGrid/>
        <Alert/>
      </section>
    </div>
  )
}

export default ProductListing
