import React from 'react'
import { Link } from "react-router-dom";


import { getFooterNavs } from '../helpers/getConfig'

export const Footer = () => {
	let currYear = 2022;
	let { primarylinks, socialLinks } = getFooterNavs();

	let keysPrimaryLinks = Object.keys(primarylinks);
	let keysSocialLinks = Object.keys(socialLinks);

	return (
		<footer className='bg-koro-900 mt-auto mb-0 py-8 sm:py-12 px-12'>

			<section className='container grid grid-col-1 md:grid-cols-4 gap-y-6'>

				{
					keysPrimaryLinks.map((key, index) => {
						let navs = primarylinks[key].navs;
						let keysNavs = Object.keys(navs);

						return (
							<div>
								<h4 className='text-xl font-bold mb-6'>{ key }</h4>
								<ul className='list-none leading-10'>

									{
										keysNavs.map((keyN, index) => (
											<li>
												<Link to={ navs[keyN].path } className='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'>{ keyN }</Link>
											</li>
										))
									}
								</ul>
							</div>
						);
					})
				}

			</section>

			<section className='container mt-12'>
				<h4 className='text-xl font-bold mb-6 hidden'>Redes</h4>
				<nav className='flex gap-6'>

					{
						keysSocialLinks.map((key, index) => {
							let { path, icon } = socialLinks[key];

							return (
								<Link to={ path } >
									<img src={ icon } alt={ key } className='inline w-10'/>
								</Link>
							);
						})
					}

				</nav>
			</section>

			<section className="w-full mt-12 py-6 border-t border-koro-100 flex pb-5 px-3 m-auto pt-5 text-gray-400 text-sm flex-col md:flex-row justify-start items-start max-w-6xl">

				<div class="mt-2">
					<p>&copy; Copyright { currYear } | La KoroHouse</p>
					<p>All Rights Reserved.</p>
				</div>

			</section>

		</footer>
	)
}
