import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import HomepageBody from './pages/HomepageBody';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}> 
        <Route path="auth" element={<div>login</div>} />    
        <Route path="profile" element={<p>profile</p>} />  
        <Route index element={ <HomepageBody />} />
      </Route>
    </Routes>    
  </BrowserRouter>
);

