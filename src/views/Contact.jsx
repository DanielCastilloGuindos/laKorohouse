import React from 'react'

import TalkSvg from '../assets/icons/talk.svg'

export const Contact = () => {
	return (
		<main 
		className='flex flex-col justify-center items-center'>
			<article className=" px-8 py-12">
				<section
					className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-koro-100/30 [backdrop-filter:blur(5px)] text-gray-100 rounded-lg shadow-lg">
					<header className="flex flex-col justify-between">
						<div>
							<h2 className="text-4xl lg:text-5xl font-bold leading-tight">¡Hablamos de lo que quieras!</h2>
							<div className="mt-8">
								¿Odias los formularios? Mandanos un <span className="underline">correo</span>.
							</div>
						</div>
						<div className="mt-8 text-center">
							<img src={ TalkSvg } alt="" />
						</div>
					</header>

					<form >
						<div>
							<label className="uppercase text-sm font-bold">Nombre</label>
							<input
								type="text"
								className="bg-gray-100 placeholder:italic text-koro-900 outline-none w-full text-sm mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
								placeholder="" />
						</div>
						<div className="mt-8">
							<span className="uppercase text-sm font-bold">Email</span>
							<input className="bg-gray-100 placeholder:italic text-koro-900 outline-none w-full text-sm mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
								type="text" />
						</div>
						<div className="mt-8">
							<span className="uppercase text-sm font-bold">Mensaje</span>
							<textarea
								className="bg-gray-100 placeholder:italic text-koro-900 outline-none w-full h-32 text-sm mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
						</div>
						<div className="mt-8">
							<button
								className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
								Send Message
							</button>
						</div>
					</form>
				</section>
			</article>
		</main>
	)
}
