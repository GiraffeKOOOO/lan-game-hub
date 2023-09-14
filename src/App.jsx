// libraries
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// providers
import { ThemeProvider } from './components/ThemeContext/ThemeContext';
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

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
