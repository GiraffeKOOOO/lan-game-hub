// libraries
import { useState, useContext, useMemo, useEffect } from 'react';
import {
  PersonFill,
  ClockFill,
  Controller,
  PeopleFill,
  PlusCircleFill,
  XCircleFill,
} from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { debounce } from 'lodash';
import { TailSpin } from 'svg-loaders-react';
// context
import GameContext from '../GameContext/GameContext';
import UserContext from '../UserContext/UserContext';
// files
import viewPlayerListState from '../PlayerList/PlayerListState';
// styles
import '../../App.css';

const handleLeaveGameSuccess = (response, setGamePlayingStatus) => {
  if (response.status === 200) {
    setGamePlayingStatus(false);
    window.location.reload(false);
  }
};

const handleLeaveGameFail = (error) => {
  console.log(`ERROR`, error);
  alert('An error occurred, please refresh the page and try again');
};

const userLeavesGame = (response, selectedGame, userId, userName, setGamePlayingStatus) => {
  if (selectedGame == null || userId == null || response.status !== 200) return;

  try {
    axios({
      method: 'DELETE',
      url: `${import.meta.env.VITE_API_ADDRESS}GetGamePlayerStatus`,
      headers: {
        'content-type': 'application/json',
      },
      data: {
        action_id: response.data,
        game_id: selectedGame.game_id,
        user_id: userId,
        user_name: userName,
      },
    })
      .then((response) => handleLeaveGameSuccess(response, setGamePlayingStatus))
      .catch((error) => handleLeaveGameFail(error));
  } catch (error) {
    console.log(error);
  }
};

const fetchGameAction = (selectedGame, userId, userName, setGamePlayingStatus) => {
  if (selectedGame == null || userId == null || userName == null) return;

  try {
    axios
      .get(
        `${import.meta.env.VITE_API_ADDRESS}GetGamePlayerAction?gameId=${
          selectedGame.game_id
        }&userId=${userId}`,
      )
      .then((response) =>
        userLeavesGame(response, selectedGame, userId, userName, setGamePlayingStatus),
      )
      .catch(() => alert('An error occurred, please refresh the page and try again'));
  } catch (error) {
    console.log(error);
  }
};

const handleUserJoinSuccess = (response, setGamePlayingStatus) => {
  if (response.status === 200) {
    setGamePlayingStatus(true);
  }
};

const handleUserJoinFail = (error) => {
  console.log(error);
  alert('An error occurred, please refresh the page and try again');
};

const userJoinsGame = (selectedGame, userId, userName, setGamePlayingStatus) => {
  if (selectedGame == null || userId == null) return;

  try {
    axios({
      method: 'POST',
      url: `${import.meta.env.VITE_API_ADDRESS}GetGamePlayerStatus`,
      headers: {
        'content-type': 'application/json',
      },
      data: {
        game_id: selectedGame.game_id,
        user_id: userId,
        user_name: userName,
      },
    })
      .then((response) => handleUserJoinSuccess(response, setGamePlayingStatus))
      .catch((error) => handleUserJoinFail(error));
  } catch (error) {
    console.log(error);
  }
};

const fetchGameStatus = (selectedGame, userId, setGamePlayingStatus) => {
  if (selectedGame == null) return;
  try {
    axios
      .get(
        `${import.meta.env.VITE_API_ADDRESS}GetGamePlayerStatus?gameId=${
          selectedGame.game_id
        }&userId=${userId}`,
      )
      .then((response) => setGamePlayingStatus(response.data))
      .catch(() => setGamePlayingStatus(null));
  } catch (error) {
    console.log(error);
  }
};

const fetchGameCount = (selectedGame, setGameCount) => {
  if (selectedGame == null) return;
  try {
    axios
      .get(`${import.meta.env.VITE_API_ADDRESS}GetGamePlayerCount/${selectedGame.game_id}`)
      .then((response) => setGameCount(response.data))
      .catch(() => setGameCount(null));
  } catch (error) {
    console.log(error);
  }
};

const GameInfoPanel = () => {
  const pathToAssets = '/images/';

  const { selectedGame, handleMoreInfoClick, returnGameStatusColor, returnGameStateString } =
    useContext(GameContext);
  const { userRole, userName, userId } = useContext(UserContext);

  const [gameCount, setGameCount] = useState(null);
  const [gamePlayingStatus, setGamePlayingStatus] = useState(false);
  const [viewPlayerList] = useRecoilState(viewPlayerListState);
  const [loading, setLoading] = useState(false);

  const cachedGameCount = useMemo(() => {
    return gameCount;
  }, [gameCount]);

  const cachedGamePlayingStatus = useMemo(() => {
    return gamePlayingStatus;
  }, [gamePlayingStatus]);

  const handleUserJoining = () => {
    userJoinsGame(selectedGame, userId, userName, setGamePlayingStatus);
    setLoading(false);
  };

  const debouncedUserJoining = debounce(handleUserJoining, 1000);

  const animateUserJoing = () => {
    setLoading(true);
    debouncedUserJoining();
  };

  const handleUserLeaving = () => {
    fetchGameAction(selectedGame, userId, userName, setGamePlayingStatus);
  };

  useEffect(() => {
    fetchGameCount(selectedGame, setGameCount);
    fetchGameStatus(selectedGame, userId, setGamePlayingStatus);
  }, [selectedGame, userId, cachedGamePlayingStatus]);

  if (selectedGame === null) {
    return (
      <>
        <Card className="mx-auto w-[800px] my-[40px]">
          <Card.Body className="text-center p-1">
            <Card.Title className="mb-0 py-[15px]">
              Please select a game to find out more information
            </Card.Title>
          </Card.Body>
        </Card>
      </>
    );
  }

  return (
    <>
      <Card className="mx-auto w-[600px] my-[40px]">
        <Card.Img
          variant="top"
          src={`${pathToAssets}${selectedGame.game_image_string}`}
          className="h-[250px] w-[300px]"
        />
        <Card.Body className="text-center p-1">
          <Card.Title className="mb-0 border-y-2 py-[15px]">{selectedGame.game_title}</Card.Title>
          <div className="grid grid-rows-2 grid-flow-col mt-[20px]">
            <div className="row-span-3 bg-slate-200 rounded-lg mr-[30px] mb-[10px]  ml-[15px]">
              <p className="mb-2 mt-[30px]">Players</p>
              <PersonFill size={40} className="mx-auto" />
              <p className="mb-0">{cachedGameCount}</p>
            </div>
            <div className="col-span-2 bg-slate-200 rounded-lg mb-[15px] mr-[15px]">
              <p className="mb-0">Game mode</p>
              <Controller size={20} className="mx-auto" />
              <p className="mb-0">{selectedGame.game_mode}</p>
            </div>
            <div className="row-span-2 col-span-2 bg-slate-200 rounded-lg mb-[10px] mr-[15px]">
              <p className="mb-0">Starts at</p>
              <ClockFill size={30} className="mx-auto" />
              <p className="mb-0">{selectedGame.game_start_time}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 border-y-2 my-[5px]">
            <p className="col-span-1 mx-auto my-[10px] bg-slate-200 rounded-lg py-[10px] px-[40px]">
              Game status:
            </p>
            <p
              className={`col-span-1 mx-auto my-[10px] rounded-lg py-[10px] px-[40px] justify-start ${returnGameStatusColor(
                selectedGame.game_state,
              )}`}
            >
              {returnGameStateString(selectedGame.game_state)}
            </p>
          </div>
          <div className="grid grid-cols-2">
            {userRole != null && userName != null && (
              <div>
                <p className="mb-[4px]">Current playing status:</p>
                {cachedGamePlayingStatus ? (
                  <p className="mb-[4px] border-2 rounded-[10px] p-[5px] w-40 mx-auto border-green-500 text-green-600">
                    Playing
                  </p>
                ) : (
                  <p className="mb-[4px] border-2 border-gray-400 text-gray-500 rounded-[10px] p-[5px] w-40 mx-auto">
                    Not Playing
                  </p>
                )}
              </div>
            )}

            {userRole != null &&
              userName != null &&
              (cachedGamePlayingStatus ? (
                <Button
                  className="w-40 h-10 mt-[27px] mx-auto"
                  variant="danger"
                  onClick={() => handleUserLeaving()}
                >
                  <span className="flex">
                    <p className="ml-10px mx-auto">Leave game</p>
                    <XCircleFill size={20} className="mt-[4px]" />
                  </span>
                </Button>
              ) : (
                <Button
                  className="w-40 h-10 mt-[27px] mx-auto"
                  variant={loading ? 'secondary' : 'primary'}
                  onClick={() => animateUserJoing()}
                >
                  {loading ? (
                    <TailSpin className="w-[30px] h-[30px] mx-auto" />
                  ) : (
                    <span className="flex">
                      <p className="ml-10px mx-auto">Join game</p>
                      <PlusCircleFill size={20} className="mt-[4px]" />
                    </span>
                  )}
                </Button>
              ))}
          </div>

          <div className={`${userRole != null && userName != null ? 'border-t-2' : ''}`}>
            <Button
              className={`w-60 h-10 mx-auto ${
                userRole != null && userName != null ? 'mt-[10px] mb-[5px]' : 'my-[5px]'
              }`}
              variant="primary"
              onClick={() => handleMoreInfoClick()}
              disabled={viewPlayerList}
            >
              <span className="flex">
                <p className="ml-10px mx-auto">View player list</p>
                <PeopleFill size={20} className="mt-[4px]" />
              </span>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default GameInfoPanel;
