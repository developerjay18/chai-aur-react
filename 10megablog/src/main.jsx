import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store.js';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import AllPosts from './pages/AllPosts.jsx';
import AddPosts from './pages/AddPost';
import EditPost from './pages/EditPost.jsx';
import Post from './pages/Post.jsx';
import AuthLayout from './components/AuthLayout.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        }
      />
      <Route
        path="/signup"
        element={
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        }
      />
      <Route
        path="/all-posts"
        element={
          <AuthLayout authentication>
            <AllPosts />
          </AuthLayout>
        }
      />
      <Route
        path="/add-posts"
        element={
          <AuthLayout authentication>
            <AddPosts />
          </AuthLayout>
        }
      />
      <Route
        path="/edit-post/:slug"
        element={
          <AuthLayout authentication>
            <EditPost />
          </AuthLayout>
        }
      />
      <Route
        path="/post/:slug"
        element={
          <AuthLayout>
            <Post />
          </AuthLayout>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
