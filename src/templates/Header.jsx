import React from 'react'
import { Menu } from '../components/menu/Menu'
import { getMenus } from "../helpers/getMenu"
import { Link } from "react-router-dom";

export const Header = () => {
	let menu = getMenus();

	return (
		<header className="flex gap-4 justify-end items-center h-12 px-8 border-b border-gray-300 shadow">

			{/* Title & Logo */}
			<h1 className="mr-auto ml-0">
				<Link to='/'>
					<img className="h-12" src="https://e7.pngegg.com/pngimages/906/122/png-clipart-pokemon-logo-pokemon-logo-thumbnail.png" alt="La Korohouse - logo" />
				</Link>
			</h1>

			{/* Links */}
      <Menu navs={menu} />

			<section className="flex gap-3">
				{/* { Search } */}

				{/* { Fav } */}

				{/* { Account } */}

				{/* Carrito */}
				<button className="relative block w-5 h-5 fill-current group">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="group-hover:animate-bounce"
						viewBox="0 0 24 24"
						aria-hidden="true"
						focusable="false">
						<path d="M9 22a2 2 0 100-4 2 2 0 000 4zm7 0a2 2 0 100-4 2 2 0 000 4zm5-17H5.665l-.687-3.21A1 1 0 004 1H1a1 1 0 000 2h2.191l2.831 13.21a.962.962 0 00.064.159c.017.053.038.105.063.155a.979.979 0 00.133.153.926.926 0 00.088.1c.058.041.12.077.185.105.034.022.07.042.107.06A.993.993 0 007 17h11a1 1 0 00.958-.713l3-10A1.001 1.001 0 0021 5zm-2.244 5H16V7h3.656l-.9 3zM7.819 15l-.6-3H9v3H7.819zM11 12h3v3h-3v-3zm0-2V7h3v3h-3zM9 7v3H6.82l-.6-3H9zm8.256 8H16v-3h2.156l-.9 3z"></path>
					</svg>

					<span className="absolute flex justify-center items-center -top-1/2 -right-1/2 w-4 min-w-fit h-4 rounded-full text-white bg-red-700 text-[10px]">
						{ 0 }
					</span>

				</button>
			</section>

		</header>
	)
}
