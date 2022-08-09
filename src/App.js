import { Outlet, Link } from 'react-router-dom';
import { useLoggedIn } from './context/auth-context';
import Button from './components/UI/Button';
import styles from './App.module.css'; 

function App() {
  const loggedIn = useLoggedIn();
  
  return (
    <>
    <header>
        <Link to="/"> <h1 className={styles.logo}>React Auth </h1> </Link>
        <nav>
          <ul className={styles['nav-bar']}>
            <li>
              <Link to="/auth"> Login </Link>
            </li>
            <li>
              <Link to="/profile"> Profile </Link>
            </li>            
            <li>
              <Button className={styles['logout-btn']}>Logout</Button>
            </li>
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
