import { Outlet, Link } from 'react-router-dom';
import { useLoggedIn, useLogoutHandler } from './context/auth-context';
import Button from './components/UI/Button';
import styles from './App.module.css'; 

function App() {
  const loggedIn = useLoggedIn();
  const logoutHandler = useLogoutHandler();
  
  return (
    <>
    <header>
        <Link to="/"> <h1 className={styles.logo}>React Auth </h1> </Link>
        <nav>
          <ul className={styles['nav-bar']}>
            {!loggedIn &&
            <li>
              <Link to="/auth"> Login </Link>
            </li>
            }
            {loggedIn &&
            <li>
            <Link to="/profile"> Profile </Link>
            </li> 
            }
            {loggedIn &&
            <li>
              <Button className={styles['logout-btn']} onClick={logoutHandler}>Logout</Button>
            </li>
            }
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>

    </>
  );
}

export default App;
