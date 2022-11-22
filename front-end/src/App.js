import './App.css';
import { BrowserRoute, Routes, Route } from 'react-router-dom';
import { Login } from './Components/Login';
import { Dashboard } from './Components/Dashboard';
import { Register } from './Components/Register';

function App() {
  return (
    <>
      <BrowserRoute>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRoute>
    </>
  );
}

export default App;
