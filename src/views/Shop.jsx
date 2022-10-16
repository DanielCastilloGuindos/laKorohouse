import React from 'react'
import { ProductFilter } from '../components/product/ProductFilter'
import { ProductWrapper } from '../components/product/ProductWrapper'
import { getProducts } from '../helpers/getProducts'

export const Shop = () => {
  let products = getProducts();

	return (
		<>
        {/* Slide bar */}
        <ProductFilter />

        {/* Products viewer */}
        <ProductWrapper products={products} />
		</>
	)
}
