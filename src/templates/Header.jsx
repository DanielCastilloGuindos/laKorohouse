import React from 'react'
import { Menu } from '../components/menu/Menu'
import { Link } from "react-router-dom";

import Logo from '../assets/media/logo.png'
import Cart from '../assets/icons/cart.svg'

import { getHeaderNavs } from "../helpers/getConfig"

export const Header = () => {
	let headerInfo = getHeaderNavs();

	return (
		<header className="flex gap-4 justify-center md:justify-start items-center h-16 px-8 border-b border-koro-100 shadow bg-koro-900">

			{/* Title & Logo */}
			<h1 className="h-full">
				<Link to='/' className=''>
					<img className="h-full" src={ Logo } alt="La KoroHouse - logo" />
				</Link>
			</h1>

			{/* Links */}
			<section className='flex items-center ml-auto mr-0 h-full'>
	      <Menu navs={ headerInfo } />
			</section>

			<section className="mr-0 flex gap-3">
				{/* { Search } */}

				{/* { Fav } */}

				{/* { Account } */}

				{/* Carrito */}
				<button className="relative flex items-center w-5 h-5 fill-current group">
					{/*  */}
					<img
						alt="" 
						className="h-10 group-hover:animate-bounce"
						src={ Cart } />

					<span className="absolute flex justify-center items-center -top-1/2 -right-1/2 w-4 min-w-fit h-4 rounded-full text-white bg-red-700 text-[10px]">
						{ 0 }
					</span>

				</button>
			</section>

		</header>
	)
}
