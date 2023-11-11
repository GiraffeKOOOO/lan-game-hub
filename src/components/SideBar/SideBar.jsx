// libraries
import { useContext, useEffect, useState, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PersonFill } from 'react-bootstrap-icons';
import { Button, Typography } from '@mui/material';
import { PersonFillGear, HouseFill } from 'react-bootstrap-icons';
import ScrollContainer from 'react-indiana-drag-scroll';
import axios from 'axios';
// context
import UserContext from '../UserContext/UserContext';
// files
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import SidebarGameTile from './SidebarGameTile';
import { USER_TYPE } from '../UserContext/UserTypes';
// styles
import '../../TimelineScrollbar.css';
import '../../index.css';

const fetchGameInfo = (setGameList) => {
  try {
    axios
      .get('http://localhost:5134/api/Game')
      .then((response) => setGameList(response.data))
      .catch((error) => console.log(error.message));
  } catch (error) {
    console.log(error);
  }
};

const SideBar = () => {
  const [gameList, setGameList] = useState({});

  const navigate = useNavigate();
  let location = useLocation();
  const { userName, userRole } = useContext(UserContext);

  useEffect(() => {
    fetchGameInfo(setGameList);
  }, []);

  const cachedGameList = useMemo(() => {
    return gameList;
  }, [gameList]);

  return (
    <div id="left-body-container" className="h-screen grid grid-rows-8 sticky top-0">
      {userRole !== undefined && userName !== undefined ? (
        <>
          <div
            id="user-profile"
            className="w-full my-auto flex flex-row justify-center items-center mt-[10px]"
          >
            <PersonFill
              size={30}
              className="mx-auto h-[75px] w-[75px] p-[5px] rounded-full bg-slate-100 hover:bg-[#d6d6d6]"
              // onClick={}  make this in to a selectable avatar
            />
          </div>
          <div className="mt-[0px]">
            <Typography className="mx-auto my-auto p-2  rounded-lg bg-slate-100 w-[250px] text-center">
              {userName}
            </Typography>
          </div>
        </>
      ) : (
        <>
          <div
            id="user-profile"
            className="w-full my-auto flex flex-row justify-center items-center mt-[10px]"
          >
            <PersonFill
              size={30}
              className="mx-auto h-[75px] w-[75px] p-[5px] rounded-full bg-slate-100 "
            />
          </div>
        </>
      )}

      {userRole === USER_TYPE.ADMIN &&
        (location.pathname === '/' ||
          location.pathname === '/addgame' ||
          location.pathname === '/editgame' ||
          location.pathname === '/deletegame') && (
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
          </div>
        )}

      {(location.pathname === '/admin' ||
        location.pathname === '/addgame' ||
        location.pathname === '/editgame' ||
        location.pathname === '/deletegame') && (
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

      <ScrollContainer
        className="scroll-container h-[600px]"
        vertical={true}
        hideScrollbars={false}
      >
        <div id="sidebar-timeline-container" className=" border-green-400">
          {gameList.length > 0 &&
            cachedGameList.map((game) => <SidebarGameTile game={game} key={game.game_id} />)}
        </div>
      </ScrollContainer>

      <div id="login" className="w-full my-auto flex flex-row justify-center items-center">
        {userName ? <LogoutButton /> : <LoginButton />}
      </div>
    </div>
  );
};

export default SideBar;
