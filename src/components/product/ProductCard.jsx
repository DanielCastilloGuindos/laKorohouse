import React from 'react'
import { OfferNote } from './ProductOfferNote';

export const ProductCard = ( { product, } ) => {
	return (
		<figure
			className="group relative flex h-80 w-64 cursor-pointer justify-center overflow-hidden bg-slate-800/30 text-left text-white">
	
			{/* Image product */}
			<img
				className="max-h-full object-cover transition duration-500 group-hover:scale-110" 
				alt={ product.title }
				src={ product.images[0] } />
					
			<figcaption
				className="absolute left-0 w-full h-1/2 bottom-0 bg-indigo-900/30 leading-10 [backdrop-filter:blur(5px)]">

				<article className='py-2 px-6'>
					{/* Title product */}
					<h3 className="truncate font-bold uppercase">{ product.title }</h3>
					{/* Desc. product */}
					<p className="overflow-hidden text-ellipsis text-sm leading-4 [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est modi eveniet omnis? Neque quisquam facilis aliquid illum similique consequuntur, eum vitae reprehenderit quasi accusantium aspernatur eveniet voluptatibus? Laboriosam veniam porro, adipisci unde facere ad impedit officiis eligendi beatae doloribus itaque.</p>

					{/* Price product */}
					<span className="-pt-1 mt-8 block w-full border-t-2 border-white">
						{ product.hasOffer && ( <s className="text-gray-900">{ product.price } &euro;</s> )}
						&nbsp;{ product.hasOffer ? product.offerPrice : product.price } &euro;
					</span>
				</article>
					

			</figcaption>

			{/* Action cart */}
			<i
				title='Add to cart'
				className="absolute right-1 top-1 hidden h-12 w-12 transform items-center justify-center border border-gray-900 bg-indigo-700/20 border-none duration-500 hover:bg-blue-700 group-hover:flex [backdrop-filter:blur(5px)]">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-6"
					fill="rgba(255,255,255)"
					viewBox="0 0 24 24"
					aria-hidden="true"
					focusable="false">
					<path d="M9 22a2 2 0 100-4 2 2 0 000 4zm7 0a2 2 0 100-4 2 2 0 000 4zm5-17H5.665l-.687-3.21A1 1 0 004 1H1a1 1 0 000 2h2.191l2.831 13.21a.962.962 0 00.064.159c.017.053.038.105.063.155a.979.979 0 00.133.153.926.926 0 00.088.1c.058.041.12.077.185.105.034.022.07.042.107.06A.993.993 0 007 17h11a1 1 0 00.958-.713l3-10A1.001 1.001 0 0021 5zm-2.244 5H16V7h3.656l-.9 3zM7.819 15l-.6-3H9v3H7.819zM11 12h3v3h-3v-3zm0-2V7h3v3h-3zM9 7v3H6.82l-.6-3H9zm8.256 8H16v-3h2.156l-.9 3z"></path>
				</svg>
			</i>
		</figure>

	)
}
