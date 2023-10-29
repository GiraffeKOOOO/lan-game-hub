// libraries
import { useContext, useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
// context
import ThemeContext from '../components/ThemeContext/ThemeContext';
import UserContext from '../components/UserContext/UserContext';
// import GameContext from '../components/GameContext/GameContext';
// files
import TitleBar from '../components/TitleBar/TitleBar';
import SideBar from '../components/SideBar/SideBar';
import GameListItem from '../components/GameListItem/GameListItem';
import GameDeleteModal from '../components/GameDeleteModal/GameDeleteModal';
import { USER_TYPE } from '../components/UserContext/UserTypes';
// styles
import { BACKGROUND } from '../components/Theme/Colours';
import '../TimelineScrollbar.css';
import '../index.css';
import '../App.css';

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

const DeleteGame = () => {
  const { darkMode } = useContext(ThemeContext);
  const { userRole, userName } = useContext(UserContext);
  const [gameList, setGameList] = useState({});

  useEffect(() => {
    fetchGameInfo(setGameList);
  }, []);

  const cachedGameList = useMemo(() => {
    return gameList;
  }, [gameList]);

  if (userRole === USER_TYPE.ADMIN && userName !== null) {
    return (
      <>
        <div className="grid grid-cols-7 min-h-screen">
          {/** Left panel: user, pages etc. */}
          <div id="left-panel" className="bg-sky-800">
            <SideBar />
          </div>

          {/** right panel: main body of the page */}
          <div
            id="main-body"
            className="col-span-6"
            style={
              darkMode
                ? { backgroundColor: BACKGROUND.DARK }
                : { backgroundColor: BACKGROUND.LIGHT }
            }
          >
            <div id="main-body-container" className="grid grid-flow-row">
              <TitleBar />
            </div>

            <div
              id="game-list-container"
              className="grid grid-cols-6 justify-items-center items-center content-start my-[20px]"
            >
              <div className="col-span-1" />
              <div id="game-form" className="col-span-4 w-full">
                <Typography className="py-[10px] text-center">
                  Delete a game from the schedule
                </Typography>

                <div className="py-[10px] mb-[20px] grid grid-cols-7 bg-slate-500 rounded-md text-center border-gray-600 border-1 text-white shadow-xl">
                  <p className="my-auto">Game ID</p>
                  <p className="my-auto">Game Name</p>
                  <p className="my-auto">Game Mode</p>
                  <p className="my-auto">Game Start Time</p>
                  <p className="my-auto">Game State</p>
                  <p className="my-auto">Game Image</p>
                  <p className="my-auto">Action</p>
                </div>

                {gameList.length > 0 &&
                  cachedGameList.map((game) => (
                    <GameListItem game={game} key={game.game_id} action="delete" />
                  ))}
              </div>
              <div className="col-span-1" />
            </div>
          </div>
        </div>
        <GameDeleteModal />
      </>
    );
  }
};

export default DeleteGame;
