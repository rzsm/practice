import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import classes from './MainNavigation.module.css';

export default function MainNavigation() {
  return (
		<header className={classes.header}>
			<h1>Company Logo</h1>
			<nav>
				<ul className={classes.nav}>
					<li>
						<Link to="/users">Users</Link>
					</li>
					<li>
						<Link to="/admin">Admin</Link>
					</li>
					<li>
						<Button className={classes.btn}>Logout</Button>
					</li>
				</ul>
			</nav>
		</header>
	)
}
