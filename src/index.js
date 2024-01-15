import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Faqpages from './pages/faqpages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/faq",
    element: <Faqpages />
  }
]);

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
