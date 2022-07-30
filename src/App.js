import { Outlet, Link } from 'react-router-dom';
import styles from './App.module.css' 

function App() {
  return (
    <>
    <header>
        <Link to="/"> <h1 className={styles.title}>React Auth </h1> </Link>
        <nav>
          <ul className={styles['nav-bar']}>
            <li>
              <Link to="/auth"> Login </Link>
            </li>
            <li>
              <Link to="/profile"> Profile </Link>
            </li>
            <li>
              <button className={styles['logout-btn']}>Logout</button>
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
