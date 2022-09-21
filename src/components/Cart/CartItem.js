// React
import { useContext } from 'react';
// Context
import CartContext from '../../contexts/cart-context';
// CSS
import classes from './CartItem.module.css';

const CartItem = props => {
    const cartCtx = useContext(CartContext)
    const price = `$${props.item.price.toFixed(2)}`
    return (
			<li className={classes.item}>
				<div>
					<h3>{props.item.name}</h3>
					<div>
						<span className={classes.price}>{price}</span>
						<span className={classes.amount}>
							<span className={classes.cross}>&#9747;</span>
							<span>{props.item.amount}</span>
						</span>
					</div>
				</div>
				<div className={classes.actions}>
					<button onClick={props.onRemove}>-</button>
					<button onClick={props.onAdd}>+</button>
				</div>
			</li>
		)
}

export default CartItem;