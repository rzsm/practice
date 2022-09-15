// Components
import Modal from "../UI/Modal"

// CSS
import classes from "./Cart.module.css"

const Cart = (props) => {
	const cartItems = (
		<ul>
			{[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((meal) => (
				<li>{meal.name}</li>
			))}
		</ul>
	)

	return (
		<Modal>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>32.64</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']}>Close</button>
				<button className={classes.button}>Order</button>
			</div>
		</Modal>
	)
}

export default Cart
