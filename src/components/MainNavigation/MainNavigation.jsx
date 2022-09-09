import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/auth-context';
import Button from '../UI/Button';
import classes from './MainNavigation.module.css';

export default function MainNavigation() {
	const ctx = useContext(AuthContext);
	const navigate = useNavigate();

	const logoutHandler = () => {
		ctx.onLogout();
		navigate("/");
	}

  return (
		<header className={classes.header}>
			<h1>Company Logo</h1>
			<nav>
				{ctx.isLoggedIn && (
					<ul className={classes.nav}>
						<li>
							<Link to="/users">Users</Link>
						</li>
						<li>
							<Link to="/admin">Admin</Link>
						</li>
						<li>
							<Button className={classes.btn} onClick={logoutHandler}>
								Logout
							</Button>
						</li>
					</ul>
				)}
				{!ctx.isLoggedIn && (
					<Button className={classes.btn} onClick={() => navigate("/auth")}>
						Login
					</Button>
				)}
			</nav>
		</header>
	)
}
