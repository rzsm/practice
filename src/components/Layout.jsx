import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useLoggedIn, useLogoutHandler } from '../context/auth-context';
import Button from './UI/Button';
import styles from './Layout.module.css'; 

function Layout() {
  const navigate = useNavigate();
  const loggedIn = useLoggedIn();
  const logout = useLogoutHandler();

  const logoutHandler = () => {
    logout();
    navigate('/', {
      replace:true
    })
  }
  
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

export default Layout;
