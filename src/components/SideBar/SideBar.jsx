// libraries
import { useNavigate } from 'react-router-dom';
import { PersonFill } from 'react-bootstrap-icons';
import { PersonFillGear } from 'react-bootstrap-icons';
// context
// import GameContext from "../components/GameContext";
import UserContext from '../UserContext/UserContext';
// files
// styles
// import "../TimelineScrollbar.css";
import '../../index.css';
import LoginButton from './LoginButton';
import { useContext } from 'react';
import LogoutButton from './LogoutButton';
import { Button } from '@mui/material';

const SideBar = () => {
  const navigate = useNavigate();
  const { userName, userRole } = useContext(UserContext);

  return (
    <div id="left-body-container" className="h-screen grid grid-rows-8 sticky top-0">
      <div
        id="user-profile"
        className="w-full my-auto flex flex-row justify-center items-center border-2 border-cyan-400 mt-[10px]"
      >
        <PersonFill
          size={30}
          className="mx-auto h-[75px] w-[75px] p-[5px] rounded-full bg-slate-100 hover:bg-[#d6d6d6]"
          onClick={() => navigate('/user')}
        />
      </div>

      <div className="w-full my-auto flex justify-center border-2 border-cyan-400">
        {userRole === 'Admin' && (
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
        )}
      </div>

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
        className="w-full my-auto flex flex-row justify-center items-center border-2 border-cyan-400"
      >
        {userName ? <LogoutButton /> : <LoginButton />}
      </div>
    </div>
  );
};

export default SideBar;
