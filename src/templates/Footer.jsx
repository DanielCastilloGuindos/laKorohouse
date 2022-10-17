import React from 'react'
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<footer className='bg-koro-900 mt-auto mb-0 py-8 sm:py-12 px-12'>

			<section className='container grid grid-cols-4'>
				<div>
					<h4 className='text-xl font-bold mb-6'>Productos</h4>
					<ul className='list-none leading-10'>
						<li>
							<Link to="" className='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'>Laminas</Link>
						</li>
						<li>
							<Link to="" className='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'>Chapas</Link>
						</li>
						<li>
							<Link to="" className='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'>Pines</Link>
						</li>
					</ul>
				</div>

				<div>
					<h4 className='text-xl font-bold mb-6'>Util links</h4>
					<ul className='list-none leading-10'>
						<li>
							<Link to="" className='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'>Laminas</Link>
						</li>
						<li>
							<Link to="" className='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'>Chapas</Link>
						</li>
						<li>
							<Link to="" className='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'>Pines</Link>
						</li>
					</ul>
				</div>

			</section>

			<section className='container mt-12'>
				<h4 className='text-xl font-bold mb-6 hidden'>Redes</h4>
				<nav className='flex gap-6'>
					<Link to="">
						<img src="svg/socialMedia/tiktok.svg" alt="" className='inline w-10' />
					</Link>
					<Link to="">
						<img src="svg/socialMedia/instagram.svg" alt="" className='inline w-10' />
					</Link>
					<Link to="">
						<img src="svg/socialMedia/twitter.svg" alt="" className='inline w-10' />
					</Link>
					<Link to="">
						<img src="svg/socialMedia/twitch.svg" alt="" className='inline w-10' />
					</Link>
				</nav>
			</section>

			<section className='w-full container mt-12 border-t border-gray-400'>
			</section>

		</footer>
	)
}
