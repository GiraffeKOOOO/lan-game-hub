// libraries
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
// providers
import { ThemeProvider } from './components/ThemeContext/ThemeContext';
import { GameProvider } from './components/GameContext/GameContext';
import { UserProvider } from './components/UserContext/UserContext';
// files
import Home from './pages/Home.jsx';
import Admin from './pages/Admin.jsx';
import User from './pages/User.jsx';
// styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
  {
    path: '/user',
    element: <User />,
  },
]);

function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <ThemeProvider>
          <GameProvider>
            <RouterProvider router={router} />
          </GameProvider>
        </ThemeProvider>
      </UserProvider>
    </RecoilRoot>
  );
}

export default App;
