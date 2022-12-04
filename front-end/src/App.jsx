import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Register } from './pages/Register';
import { Home } from './pages/Home';
import { Layout } from './pages/Layout';
function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(prev => prev = boolean);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index  element={ <Home/>} />
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
