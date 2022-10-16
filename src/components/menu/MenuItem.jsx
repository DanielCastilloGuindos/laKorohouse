import React from 'react'
// import { Link } from "react-router-dom";

export const MenuItem = ({ title, data }) => {
	let { path, navs, rel } = data;

	let subnavKeys = navs && Object.keys(navs);

	return (
		<span className=" relative uppercase">
			{/* <Link */}
			<a
			href={ path || 'javascript:void()' }
			to={ path }
			rel={ rel ? rel : 'nofollow' }
			title={ title }
			className='block py-3 px-3.5 font-semibold no-underliner hover:bg-white peer'
			>
				{ title } { navs && ( 
					<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					className="stroke-current inline-block w-4 h-4 transform transition duration-150">
						<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M19 9l-7 7-7-7"></path>
					</svg>
				)}
			</a>
			{/* </Link> */}

			{ navs && (
			<ul className="flex flex-col absolute left-0 px-4 py-5 w-64 bg-white normal-case opacity-0 -rotate-x-90 origin-top-right border shadow-lg overflow-hidden ease-linear duration-200 hover:opacity-100 hover:rotate-0 hover:overflow-auto -z-10 peer-hover:opacity-100 peer-hover:rotate-0 peer-hover:overflow-auto peer-hover:z-10 hover:z-10">
				{ subnavKeys.map((key, index) => (
					<a key={ index } href={ path } className="py-2.5 border-b ease-linear duration-300 last:border-b-0 hover:text-red-500 cursor-pointer">{ key }</a>
				) ) }
			</ul>
			)}
		</span>
	)
}
