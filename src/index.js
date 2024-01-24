import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Faqpages from './pages/faqpages';
import Listnews from './pages/news/listnews';

import PageNews1 from './pages/news/PageNews1';
import PageNews2 from './pages/news/PageNews2';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/faq",
    element: <Faqpages />
  },
  {
    path: "/news",
    element: <Listnews />
  },
  {
    path: "/pagenews1",
    element: <PageNews1 />
  },
  {
    path: "/pagenews2",
    element: <PageNews2 />
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
