// Components
import Card from '../UI/Card';
// CSS
import classes from './MealsSummary.module.css';

const MealsSummary = () =>  {
  return (
		<Card className={classes.card}>
			<section>
				<h2>Delicious Food, Delivered To You</h2>
				<p>
					Choose your favourite meal from our broud selection of meals and enjoy
					a delious lunch or dinner at home
				</p>
				<p>
					All our meals are cooked with high quality ingredients, just in-time
					and of course by experienced chefs
				</p>
			</section>
		</Card>
	)
}

export default MealsSummary;
