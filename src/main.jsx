import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/pages/Home.jsx'
import Trending from './components/pages/Trending.jsx'
import DetailMovie from './components/pages/DetailMovie.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Favourite from './components/pages/Favourite.jsx'
import { Provider } from 'react-redux'
import store from './components/store/store.js'

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/trending',
    element: <Trending />
  },
  {
    path: '/home/:id',
    element: <DetailMovie />
  },
  {
    path: '/addmovie',
    element: <Favourite />
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
