// Image
import mealsImage from '../../assets/meals.jpg';
// CSS
import classes from "./Header.module.css"

const Header = (props) => {
	return (
		<>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<button>Cart</button>
			</header>
			<div className={classes['sub-header-image']}>
				<img src={mealsImage} alt="a table full of delicious food"/>
			</div>
		</>
	)
}

export default Header