import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="users" element={<p>users</p>} />
          <Route path="admin" element={<p>admin</p>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
