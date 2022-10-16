import { useReducer } from "react";

export const useCart = () => {

	let initState = JSON.parse( localStorage.getItem('productsCart') ) || [];
	
	// const [ toDos, dispatchToDosAction ] = useReducer( todoReducer, initState );
	const [ productsCart, dispatchProductsCartAction ] = useReducer( '', initState );

	const handleAddProductInCart = ( productId ) => {
		let addAction = {
			type		: 'add',
			payload	: productId,
		};

		dispatchProductsCartAction( addAction );
	};

	const handleRemoveProductInCart = ( productId ) => {
		let removeAction = {
			type		: 'remove',
			payload	: productId,
		};

		dispatchProductsCartAction( removeAction );
	};

	const handleDiscardProductsFromCart = () => {
		let discardAction = {
			type		: 'discard',
			payload	: 0,
		};

		dispatchProductsCartAction( discardAction );
	};

	const handleBuyProductsByCart = () => {
	};

	return {
		myProducts,
		handleAddProductInCart,
		handleRemoveProductInCart,
		handleDiscardProductsFromCart,
		handleBuyProductsByCart,
	};
};