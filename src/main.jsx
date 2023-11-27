import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import PostDetail from './components/PostDetail.jsx';
import CreatePost from './components/CreatePost.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/post/:postId', element: <PostDetail /> },
      { path: '/create-post', element: <CreatePost /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
