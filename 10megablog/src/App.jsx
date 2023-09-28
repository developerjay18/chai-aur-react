import { useState, useEffect } from 'react';
import './App.css';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice.js';
import { useDispatch } from 'react-redux';
import { Header, Footer } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return !loading ? (
    <div className="main-container bg-black min-h-screen text-white">
      <Header />
      <Outlet />
      <h1>Here is my changing content ::mine outlet is above::</h1>
      <Footer />
    </div>
  ) : null;
}

export default App;
