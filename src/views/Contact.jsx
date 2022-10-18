import React from 'react'

export const Contact = () => {
	return (
		<main 
		className='flex flex-col justify-center items-center'>
			<article className='container md:max-w-6xl bg-white text-white'>
				<section className='h-96'>

					<header className='flex justify-center'>
						<h2 className='text-5xl text-koro-600 font-extrabold uppercase'>Contact with us!</h2>
					</header>

					<form>
						<div className="relative text-indigo-900">
							<input
							type="text"
							placeholder=' '
							id="name"
							className="peer py-1 px-4 bg-transparent bg-no-repeat border border-red-50  outline-none transition-all duration-500 [background-image:linear-gradient(-45deg,rgb(105,113,189),rgb(105,113,189)),linear-gradient(-45deg,rgba(185,185,185,.467),rgba(185,185,185,0.467))] [background-position:50% 99%,50% 99%] [background-size:0% 0.1rem, 100% 0.1rem] focus:[background-size:100% .1rem,100% .1rem]" />

							<label htmlFor="name" className="absolute top-0 left-0 text-sm transition-all duration-500 cursor-text [transform:translateY(-50%)] peer-focus:top-0 peer-focus:text-sm peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base ">Hey, what's your name?</label>
						</div>
					</form>

				</section>
			</article>
		</main>
	)
}
