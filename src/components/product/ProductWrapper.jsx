import React from 'react'
import { ProductCard } from './ProductCard'

export const ProductWrapper = ({ products }) => {
	let productKeys = Object.keys( products );

	return (
		<>
		{ productKeys.map( (productKey, index) =>
			( <ProductCard
				key={ index }
				product={ products[productKey] } /> ) 
		) }
		</>
	)
}
