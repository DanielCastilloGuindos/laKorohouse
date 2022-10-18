import React from 'react'

export const ProductFilter = () => {
	return (
		<>

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
						<input type="checkbox" name="laminas" id="laminas" className='peer'/>
						<label htmlFor='laminas' className='pl-4 leading-6 peer-checked:text-koro-600'>Laminas</label>
					</li>
					<li
					className='list-none font-normal'>
						<input type="checkbox" name="pines" id="pines" className='peer'/>
						<label htmlFor='pines' className='pl-4 leading-6 peer-checked:text-koro-600'>pines</label>
					</li>
					<li
					className='list-none font-normal'>
						<input type="checkbox" name="Chapas" id="Chapas" className='peer'/>
						<label htmlFor='Chapas' className='pl-4 leading-6 peer-checked:text-koro-600'>chapas</label>
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
						<input type="checkbox" name="fiveOrLess" id="fiveOrLess" className='peer'/>
						<label htmlFor='fiveOrLess' className='pl-4 leading-6 peer-checked:text-koro-600'>Menos de 5 €</label>
					</li>
					<li
					className='list-none font-normal'>
						<input type="checkbox" name="fiveteenOrLess" id="fiveteenOrLess" className='peer'/>
						<label htmlFor='fiveteenOrLess' className='pl-4 leading-6 peer-checked:text-koro-600'>Menos de 15 €</label>
					</li>
					<li
					className='list-none font-normal'>
						<input type="checkbox" name="twentyOrLess" id="twentyOrLess" className='peer'/>
						<label htmlFor='twentyOrLess' className='pl-4 leading-6 peer-checked:text-koro-600'>Menos de 20 €</label>
					</li>
					<li
					className='list-none font-normal'>
						<input type="checkbox" name="custom" id="custom" className='peer'/>
						<label htmlFor='custom' className='pl-4 leading-6 peer-checked:text-koro-600'>Personalizado</label>
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
						<input type="checkbox" name="naruto" id="naruto" className='peer'/>
						<label htmlFor='naruto' className='pl-4 leading-6 peer-checked:text-koro-600'>Naruto</label>
					</li>
					<li
					className='list-none font-normal'>
						<input type="checkbox" name="onePice" id="onePice"  className='peer'/>
						<label htmlFor='onePice' className='pl-4 leading-6 peer-checked:text-koro-600'>One Piece</label>
					</li>
					<li
					className='list-none font-normal'>
						<input type="checkbox" name="dragonBall" id="dragonBall"  className='peer'/>
						<label htmlFor='dragonBall' className='pl-4 leading-6 peer-checked:text-koro-600'>Dragon Ball</label>
					</li>
				</ul>
			</div>

		</>
	)
}
