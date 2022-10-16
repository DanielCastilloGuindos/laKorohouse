import React from 'react'

let offerPerCent = function (price, offerPrice) {
	let perCentOffered = offerPrice * 1 / price;
	return perCentOffered * 100;
};

export const OfferNote = ( { price, offerPrice } ) => {
	return (
		<p className='flex gap-2 text-gray-400 text-[14px]'>
			<span className='line-through'>{ price } &euro;</span>
			<span className='px-2 bg-green-600 text-white rounded-full'>
				{ offerPerCent( price, offerPrice ) }% de Descuento
			</span>
		</p>
	)
}
