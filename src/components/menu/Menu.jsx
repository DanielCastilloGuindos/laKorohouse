import { useCallback, useState } from "react";
import { Hamburger } from "./Hamburger";
import { MenuItem } from './MenuItem';

export const Menu = ({ navs }) => {
	if (typeof navs != 'object')
		throw new Error ('The navs field must be an array.');

	let navKeys = Object.keys( navs );
	const [isActive, setActive] = useState( false )

	const handleClick = useCallback(
		() =>  {
			setActive( !isActive )
		},
		[ isActive ],
	)

	return (
		<>
			<Hamburger 
				isActive={ isActive }
				handleClick={ handleClick } />

			<nav className={(isActive ? 'fixed ': 'hidden') + ' md:relative top-0 left-0 w-screen md:w-auto h-screen md:h-full flex flex-col md:flex md:flex-row gap-4 md:gap-0 justify-center items-center bg-[url("/media/background.jpg")] md:[background-image:none]  z-40 md:z-auto scroll-m-0'}>

				{ navKeys.map( (navKey, index) =>
					( <MenuItem
						key={ index }
						title={ navKey }
						data={ navs[ navKey ] }
						onClick={ handleClick }
						/> ) 
				) }

			</nav>
		</>
	)
}