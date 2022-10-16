import { products } from '../data/Products'

export const getProducts = () => {
	return products;
};

export const getProductById = ( id ) => {
	return products.find( product => product.id === id );
}

export const getProductByName = ( name ) => {
	return products.filter( product => product.name.toLowerCase() === name.toLowerCase() );
}

export const getProductsBySimilarName = ( similarName ) => {
}

export const getProductsByCategories = ( categories ) => {
	// let validCategories = [];
	// if ( !validCategories.includes( categories.toLowerCase() ) )
	// 	throw new Error( 'Invalid category "' + category + '" found');

	// return products.filter( product => product.categories.toLowerCase() === product.toLowerCase() );
}