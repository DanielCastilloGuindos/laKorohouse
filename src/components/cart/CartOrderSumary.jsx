import React from 'react'

export const CartOrderSumary = () => {
	return (
		<section className="ml-auto px-8 py-10 w-80 min-h-full border-l border-gray-300">

			<header>
				<h2 className="font-semibold text-2xl border-b pb-8">Order Summary</h2>
			</header>

			<div className="flex justify-between mt-10 mb-5">
				<span className="font-semibold text-sm uppercase">3 Productos</span>
				<span className="font-semibold text-sm">590$</span>
			</div>

			<div className="py-10">
				<label for="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
				<input type="text" id="promo" placeholder="Enter your code" className='bg-white placeholder:italic placeholder:text-gray-400 outline-none px-1.5 py-2 w-full text-sm' />
			</div>

			<button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>

			<div className="border-t mt-8">
				<div className="flex font-semibold justify-between py-6 text-sm uppercase">
					<span>Total cost</span>
					<span>$600</span>
				</div>

				<button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
			</div>
		</section>
	)
}
