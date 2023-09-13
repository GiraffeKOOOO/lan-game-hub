// libraries
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// files
import Home from './pages/Home.jsx'
import Admin from './pages/Admin.jsx'
import User from './pages/User.jsx'
// styles
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/admin",
    element: <Admin />
  },
  {
    path: "/user",
    element: <User />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <UserContextProvider> maybe for managing if a user is logged in?*/}
      {/* <GameProvider> will need to go here*/}
        <RouterProvider router={router} />
      {/* </GameProvider> */}
    {/* </UserContextProvider> ?*/}
  </React.StrictMode>,
)
