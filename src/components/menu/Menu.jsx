import React from 'react'
import { MenuItem } from './MenuItem';

export const Menu = ({ navs }) => {
	if (typeof navs != 'object')
		throw new Error ('The navs field must be an array.');

	let navKeys = Object.keys( navs );

	return (
		<nav className='flex justify-center'>
	
			{ navKeys.map( (navKey, index) =>
				( <MenuItem
					key={ index }
					title={ navKey }
					data={ navs[ navKey ] } /> ) 
			) }

		</nav>
	)
}