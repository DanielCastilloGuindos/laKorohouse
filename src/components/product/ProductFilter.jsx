import React from 'react'

export const ProductFilter = () => {
	return (
		<section
			className='float-left w-80 py-10 min-h-full border-r border-gray-300'>

			<div className=' px-11 '>
				<h3 
				className='uppercase font-bold pb-2.5'>Filter</h3>
				<label className=''>
					<input type="text" name="" id="" className='bg-white placeholder:italic placeholder:text-gray-400 outline-none px-1.5 py-2 w-full text-sm' placeholder='Ej.: pajarito pio'/>
				</label>
			</div>

			<div className=' px-11 '>
				<h3
				className='uppercase font-bold pt-9 pb-2.5'
				>Categories</h3>

				<ul className='leading-10 text-gray-400'>
					<li
					className='list-none font-normal'>
						<input type="checkbox" name="laminas" id="laminas"/>
						<label htmlFor='laminas' className='pl-4 leading-6'>Laminas</label>
					</li>
					<li
					className='list-none font-normal'>
						<input type="checkbox" name="pines" id="pines" />
						<label htmlFor='pines' className='pl-4 leading-6'>pines</label>
					</li>
					<li
					className='list-none font-normal'>
						<input type="checkbox" name="Chapas" id="Chapas" />
						<label htmlFor='Chapas' className='pl-4 leading-6'>chapas</label>
					</li>
				</ul>
			</div>

			<div className=' px-11 '>
				<h3
				className='uppercase font-bold pt-9 pb-2.5'
				>Prices</h3>

				<ul className='leading-10 text-gray-400'>
					<li
					className='list-none font-normal'>
						<input type="checkbox" name="fiveOrLess" id="fiveOrLess"/>
						<label htmlFor='fiveOrLess' className='pl-4 leading-6'>Menos de 5 €</label>
					</li>
					<li
					className='list-none font-normal'>
						<input type="checkbox" name="fiveteenOrLess" id="fiveteenOrLess"/>
						<label htmlFor='fiveteenOrLess' className='pl-4 leading-6'>Menos de 15 €</label>
					</li>
					<li
					className='list-none font-normal'>
						<input type="checkbox" name="twentyOrLess" id="twentyOrLess"/>
						<label htmlFor='twentyOrLess' className='pl-4 leading-6'>Menos de 20 €</label>
					</li>
					<li
					className='list-none font-normal'>
						<input type="checkbox" name="custom" id="custom"/>
						<label htmlFor='custom' className='pl-4 leading-6'>Personalizado</label>
					</li>
				</ul>
			</div>

			
			<div className=' px-11 '>
				<h3
				className='uppercase font-bold pt-9 pb-2.5'
				>Themes</h3>

				<ul className='leading-10 text-gray-400'>
					<li
					className='list-none font-normal'>
						<input type="checkbox" name="naruto" id="naruto"/>
						<label htmlFor='naruto' className='pl-4 leading-6'>Naruto</label>
					</li>
					<li
					className='list-none font-normal'>
						<input type="checkbox" name="onePice" id="onePice" />
						<label htmlFor='onePice' className='pl-4 leading-6'>One Piece</label>
					</li>
					<li
					className='list-none font-normal'>
						<input type="checkbox" name="dragonBall" id="dragonBall" />
						<label htmlFor='dragonBall' className='pl-4 leading-6'>Dragon Ball</label>
					</li>
				</ul>
			</div>

		</section>
	)
}
