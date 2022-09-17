// React
import { useContext } from "react"
// Context
import CartContext from "../../contexts/cart-context"
// Components
import Modal from "../UI/Modal"
import CartItem from "./CartItem"
// CSS
import classes from "./Cart.module.css"

const Cart = (props) => {
	const cartCtx = useContext(CartContext)
	const isCartEmpty = !cartCtx.items.length
	const cartItems = cartCtx.items.map((item) => (
		<CartItem key={item.id} item={item} />
	))
	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

	return (
		<Modal onClose={props.onClose}>
			{!isCartEmpty && cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes["button--alt"]} onClick={props.onClose}>
					Close
				</button>
				<button className={classes.button}>Order</button>
			</div>
		</Modal>
	)
}

export default Cart
