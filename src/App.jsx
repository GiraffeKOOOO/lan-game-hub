// libraries
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
// providers
import { ThemeProvider } from './components/ThemeContext/ThemeContext';
import { GameProvider } from './components/GameContext/GameContext';
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
      <ThemeProvider>
        <GameProvider>
          <RouterProvider router={router} />
        </GameProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
