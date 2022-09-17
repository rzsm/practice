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
        <li>
            <div>
                <h3>{props.item.name}</h3>
                <div>
                    <span>{price}</span>
                    <span>✖{props.item.amount}</span>
                </div>
            </div>
            <div>
                <button onClick={cartCtx.removeItem}>-</button>
                <button onClick={cartCtx.addItem}>+</button>
            </div>
        </li>
    )
}

export default CartItem;