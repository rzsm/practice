// React
import { useContext } from "react"
// Context
import CartContext from "../../../contexts/cart-context"
// Components
import MealItemForm from "./MealItemForm"
// CSS
import classes from "./MealItem.module.css"

const MealItem = (props) => {
	const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`

	const addItemHandler = amount => {
		cartCtx.addItem({
			id: props.id,
			name: props.name,
			price: props.price,
			amount: amount
		})
	}

	return (
		<li className={classes.meal}>
			<div>
				<h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
			</div>
			<MealItemForm onAddItem={addItemHandler}/>
		</li>
	)
}

export default MealItem
