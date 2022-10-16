import React from 'react'

export const CartProduct = () => {
	return (
		<div className="flex items-center hover:bg-gray-50 -mx-8 px-6 py-5">

			{/* Image product */}
			<figure className="flex w-2/5">

				<img
				className="h-24 w-20"
				alt=""
				src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z" />

				<figcaption className="flex flex-col justify-between ml-4 flex-grow">

					{/* Title product */}
					<h3 className="font-bold text-sm">Iphone 6S</h3>

					{/* Description product */}
					<p className="truncate text-red-500 text-xs w-full">Lorem ipsum, do</p>
	
					{/* Option to remove */}
					<button className="flex font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</button>

				</figcaption>
			</figure>

			{/* Quantity and price */}
			<div className="flex justify-center w-1/5">
				<button>
					<svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
					</svg>
				</button>

				<input className="mx-2 border text-center w-8" type="text" value="1" />

				<button>
					<svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
						<path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
					</svg>
				</button>
			</div>

			<span className="text-center w-1/5 font-semibold text-sm">$400.00</span>

			<span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
		</div>
	)
}
