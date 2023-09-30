import React, { useState } from 'react';
import { authService } from '../appwrite/auth';
import { login } from '../store/authSlice';
import { useForm } from 'react-hook-form';
import { Logo, Button, Input } from '../components';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState('');

  const signup = async (data) => {
    setError("")
    try {
      const userSession = await authService.createAccount(data);
      if (userSession) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate('/');
      }
    } catch (error) {
      setError(error);
      console.log(`${error}`);
    }
  };

  return <h1>helo</h1>;
}

export default Signup;
