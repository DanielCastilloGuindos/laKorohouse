import React from 'react'
import { ProductFilter } from '../components/product/ProductFilter'
import { ProductWrapper } from '../components/product/ProductWrapper'
import { getProducts } from '../helpers/getProducts'

export const Shop = () => {
  let products = getProducts();

  return (
    <>
      <main
      className='grid grid-flow-row md:grid-flow-col'
        >
    
        {/* Slide bar */}
        <section
        className='w-full md:w-80 bg-koro-100/30 [backdrop-filter:blur(5px)] text-indigo-100 md:min-h-full border-r border-koro-100'>
          <ProductFilter />
        </section>


        {/* Products viewer */}
        <section className='py-10 md:pl-8 flex flex-wrap justify-center md:justify-start items-start gap-6'>
          <ProductWrapper products={products} />
        </section>
      </main>
    </>
  )
}
