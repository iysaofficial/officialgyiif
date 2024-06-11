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

import Lowtahun from './pages/low/lowtahun';
import Kategori24 from './pages/low/2024/kategori24';
import Jenjangofl24 from './pages/low/2024/jenjangofl24';
import Jenjangonl24 from './pages/low/2024/jenjangonl24';
import Kategori23 from './pages/low/2023/kategori23';
import Jenjangofl23 from './pages/low/2023/jenjangofl23';
import Jenjangonl23 from './pages/low/2023/jenjangonl23';

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
  },
  {
    path: "/lowtahun",
    element: <Lowtahun />
  },
  {
    path: "/kategori24",
    element: <Kategori24 />
  },
  {
    path: "/jenjangofl24",
    element: <Jenjangofl24 />
  },
  {
    path: "/jenjangonl24",
    element: <Jenjangonl24 />
  },
  {
    path: "/kategori23",
    element: <Kategori23 />
  },
  {
    path: "/jenjangofl23",
    element: <Jenjangofl23 />
  },
  {
    path: "/jenjangonl23",
    element: <Jenjangonl23 />
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
