import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

/*const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path:"/cad",
        element: <App/>
      },
      {
        path: "/plantations",
        element: <Plantations/>
      }
    ]
  }
 
])*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
