import { Route, Routes, Navigate } from 'react-router-dom'

import { Home } from '../views/Home'
import { AboutUs } from '../views/AboutUs'
import { Contact } from '../views/Contact'
import { FAQS } from '../views/FAQS'
import { Product } from '../views/Product'
import { Shop } from '../views/Shop'
import { MyCart } from '../views/client/MyCart'

export const AppRouter = () => {
	return (
		<>
			<Routes>
	
				<Route path="/" element={ <Home /> } ></Route>

				<Route path="/aboutUs" element={ <AboutUs /> }></Route>
				
				<Route path="/contact" element={ <Contact /> }></Route>

				<Route path="/faqs" element={ <FAQS /> }></Route>

				<Route path="/cart" element={ <MyCart /> }></Route>

				<Route path="/shop" element={ <Shop /> }></Route>

				<Route path="/shop/:query" element={ <Shop /> }></Route>
				
				<Route path="/product/:id" element={ <Product /> }></Route>

				{/* Cuualquier ruta que no sea el login pasara por aqui  */}
				{/* <Route path="/*" element={ <HeroesRouters /> } ></Route> */}

			</Routes>
		</>
	)
}
