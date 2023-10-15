// libraries
import { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PersonFill } from 'react-bootstrap-icons';
import { Button } from '@mui/material';
import { PersonFillGear, HouseFill } from 'react-bootstrap-icons';
// context
// import GameContext from "../components/GameContext";
import UserContext from '../UserContext/UserContext';
// files
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
// styles
// import "../TimelineScrollbar.css";
import '../../index.css';

const SideBar = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const { userName, userRole } = useContext(UserContext);

  return (
    <div id="left-body-container" className="h-screen grid grid-rows-8 sticky top-0">
      <div
        id="user-profile"
        className="w-full my-auto flex flex-row justify-center items-center mt-[10px]"
      >
        <PersonFill
          size={30}
          className="mx-auto h-[75px] w-[75px] p-[5px] rounded-full bg-slate-100 hover:bg-[#d6d6d6]"
          onClick={() => navigate('/user')}
        />
      </div>

      {(userRole === 'Admin') &&
        (location.pathname ===
          '/' || location.pathname ===
          '/addgame' || location.pathname ===
          '/editgame' || location.pathname ===
          '/deletegame') && (
            <div className="w-full my-auto flex justify-center">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#95edad',
                  '&:hover': {
                    backgroundColor: '#80c492',
                  },
                  color: 'black',
                  fontWeight: 'bold',
                  height: 45,
                }}
                endIcon={<PersonFillGear />}
                onClick={() => navigate('/admin')}
              >
                Admin Panel
              </Button>
            </div>,
          )}

      {(location.pathname === '/admin' || location.pathname ===
          '/addgame' || location.pathname ===
          '/editgame' || location.pathname ===
          '/deletegame') && (
        <div className="w-full my-auto flex justify-center">
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#ffffff',
              '&:hover': {
                backgroundColor: '#bfbebd',
              },
              color: 'black',
              fontWeight: 'bold',
              height: 45,
            }}
            endIcon={<HouseFill />}
            onClick={() => navigate('/')}
          >
            Home Page
          </Button>
        </div>
      )}

      <div
        id="sidebar-timeline-container"
        className="w-full h-full row-span-6 my-auto border-2 border-pink-400"
      >
        <div className="w-full border-2 border-cyan-400">
          <p>game 1 div</p>
        </div>

        <div className="w-full border-2 border-cyan-400">
          <p>game 2 div</p>
        </div>
        <div className="w-full border-2 border-cyan-400">
          <p>game 1 div</p>
        </div>

        <div className="w-full border-2 border-cyan-400">
          <p>game 2 div</p>
        </div>
        <div className="w-full border-2 border-cyan-400">
          <p>game 1 div</p>
        </div>

        <div className="w-full border-2 border-cyan-400">
          <p>game 2 div</p>
        </div>
      </div>

      <div
        id="login"
        className="w-full my-auto flex flex-row justify-center items-center"
      >
        {userName ? <LogoutButton /> : <LoginButton />}
      </div>
    </div>
  );
};

export default SideBar;
