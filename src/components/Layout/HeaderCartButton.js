// React
import { useContext, useState, useEffect } from "react"
// Context
import CartContext from "../../contexts/cart-context"
// Components
import CartIcon from "../Cart/CartIcon"
// CSS
import classes from "./HeaderCartButton.module.css"

const HeaderCartButton = (props) => {
	const [needsBumpingStyle, setNeedsBumpingStyle] = useState(true);	
    const cartCtx = useContext(CartContext);
	const { items } = cartCtx	
    const totalItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount
    }, 0)

	const buttonClasses = `${classes.button} ${needsBumpingStyle ? classes.bump : ' '}`

	// Managing Bumping style addition and removement whenever items are changed
	useEffect(() => {
		setNeedsBumpingStyle(true);
		const timer = setTimeout(() => setNeedsBumpingStyle(false), 300)

		return () => {
			clearTimeout(timer)
		}
	},[items])

	return (
		<button className={buttonClasses} onClick={props.onShowCart}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{totalItems}</span>
		</button>
	)
}

export default HeaderCartButton
