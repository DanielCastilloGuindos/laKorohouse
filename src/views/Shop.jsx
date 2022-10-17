import React from 'react'
import { ProductFilter } from '../components/product/ProductFilter'
import { ProductWrapper } from '../components/product/ProductWrapper'
import { getProducts } from '../helpers/getProducts'

export const Shop = () => {
  let products = getProducts();

  return (
    <>
      <main
      className=' grid grid-flow-col'
        >
    
        {/* Slide bar */}
        <section
        className='w-80 py-10 bg-indigo-50 text-koro-900 min-h-full border-r border-gray-300'>
          <ProductFilter />
        </section>


        {/* Products viewer */}
        <section className='py-10 pl-8 flex flex-wrap justify-start items-start gap-6'>
          <ProductWrapper products={products} />
        </section>
      </main>
    </>
  )
}
