import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App'
import Root from './Root';
import Section from './Section';
import Experience from './Experience';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element : <Root />,
    children : [  {
      path: "/Section",
      element : <Section />,},
      {
      path : "/Experience",
      element : <Experience />
      },
      ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
