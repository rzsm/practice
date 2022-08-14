import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomepageBody from './pages/HomepageBody';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import Layout from './components/Layout';
import { useLoggedIn } from './context/auth-context';

const App = () => {
  const loggedIn = useLoggedIn();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route path="auth" element={<LoginPage />} />
          <Route path="profile" element={
            loggedIn ? <ProfilePage /> : <Navigate to="/auth" replace />} 
          />  
          <Route index element={ <HomepageBody />} />           
        </Route>                 
      </Routes>    
    </BrowserRouter>
  )
}

export default App;

