import React from 'react'
import { CartProduct } from './CartProduct'
import { CartOrderSumary } from './CartOrderSumary'

export const CartWrapper = () => {
	return (
    <section className="w-full px-16 py-10">

      <header className="flex justify-between border-b pb-8">
        <h2 className="font-semibold text-2xl">Shopping Cart</h2>
        <span className="font-semibold text-2xl">3 Items</span>
      </header>

      <div className="flex mt-10 mb-5">
        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Quantity</h3>
        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
      </div>

      <CartProduct />
      <CartProduct />
      <CartProduct />

      <Link to="/shop" className="flex font-semibold text-indigo-600 text-sm mt-10">
    
        <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
        Continue Shopping
      </Link>

    </section>
	)
}
