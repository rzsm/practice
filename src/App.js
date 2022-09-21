// React Hooks
import { useState, useEffect } from "react"
// Context
import CartContextProvider from "./contexts/CartContextProvider"
// Components
import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals"
import Cart from "./components/Cart/Cart"

function App() {
	const [cartIsShown, setCartIsShown] = useState(false)

	const showCartHandler = () => {
		setCartIsShown(true)
	}

	const hideCartHandler = () => {
		setCartIsShown(false)
	}

	return (
		<CartContextProvider>
			{cartIsShown && <Cart onClose={hideCartHandler} />}
			<Header onShowCart={showCartHandler} />
			<Meals />
		</CartContextProvider>
	)
}

export default App
