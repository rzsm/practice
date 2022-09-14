// Components
import MealsSummary from "./MealsSummary"
import AvailableMeals from "./AvailableMeals"

//CSS
import classes from './Meals.module.css'

const Meals = () => {
    return (
			<>
				<MealsSummary />
                <AvailableMeals />
			</>
		)
}

export default Meals