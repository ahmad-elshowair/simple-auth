import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './Components/Login';
import { Dashboard } from './Components/Dashboard';
import { Register } from './Components/Register';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(prev => prev = boolean);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/login'
            element={
              !isAuthenticated ? <Login setAuth={setAuth} /> : <Navigate replace to='/dashboard' />
            }
          />
          <Route
            path='/dashboard'
            element={
              isAuthenticated ? <Dashboard setAuth={setAuth} /> : <Navigate replace to='/login' />
            }
          />
          <Route
            path='/register'
            element={
              !isAuthenticated ? <Register setAuth={setAuth} /> : <Navigate replace to='/login' />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
