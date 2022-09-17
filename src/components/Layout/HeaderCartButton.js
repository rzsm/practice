// React
import { useContext } from "react"
// Context
import CartContext from "../../contexts/cart-context"
// Components
import CartIcon from "../Cart/CartIcon"
// CSS
import classes from "./HeaderCartButton.module.css"

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const totalItems = cartCtx.items.reduce((total, item) => {
        return total + item.amount
    },0)

	return (
		<button className={classes.button} onClick={props.onShowCart}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{totalItems}</span>
		</button>
	)
}

export default HeaderCartButton
