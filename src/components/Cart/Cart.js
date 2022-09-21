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
	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id)
	}

	const cartItemAddHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 })
	}
	
	const cartItems = cartCtx.items.map((item) => (
		<CartItem
			key={item.id}
			item={item}
			onRemove={cartItemRemoveHandler.bind(null, item.id)}
			onAdd={cartItemAddHandler.bind(null, item)}
		/>
	))
	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
	// To show the order button only if the cart is not empty
	const hasItems = cartCtx.items.length > 0

	return (
		<Modal onClose={props.onClose}>
			{!isCartEmpty && <ul className={classes['cart-items']}>{cartItems}</ul>}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes["button--alt"]} onClick={props.onClose}>
					Close
				</button>
				{hasItems && <button className={classes.button}>Order</button>}
			</div>
		</Modal>
	)
}

export default Cart
