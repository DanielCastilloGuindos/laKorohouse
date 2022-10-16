import React from 'react'
import { ProductCard } from './ProductCard'

export const ProductWrapper = ({ products }) => {
	let productKeys = Object.keys( products );

	return (
		<section className='py-10 pl-8 grid grid-cols-3 gap-6'>
		{ productKeys.map( (productKey, index) =>
			( <ProductCard
				key={ index }
				product={ products[productKey] } /> ) 
		) }
		</section>
	)
}
