import { memo, useState, } from "react"

export const Hamburger = memo(({ isActive, handleClick }) => {

	return (
		<button
			type="button"
			onClick={ handleClick }
			className={`block md:hidden relative w-9 h-9 ease-in duration-300 outline-none ${ isActive && 'delay-700 rotate-45'} z-50` } >

			<span className={`absolute left-1/2 w-3/4 h-[2px] bg-gray-50 -translate-x-1/2 ease-in duration-300 ${ isActive ? 'top-1/2 delay-300 rotate-0' :  'top-1/4'}`}></span>

			<span className={`absolute top-1/2 left-1/2 w-3/4 h-[2px] bg-gray-50 -translate-x-1/2 ease-in duration-300 ${ isActive && 'w-0'}`}></span>

			<span className={`absolute left-1/2 w-3/4 h-[2px] bg-gray-50 -translate-x-1/2 ease-in duration-300 ${ isActive ? 'top-1/2 delay-300 rotate-90' : 'top-3/4'}`}></span>

		</button>
	)
}
)