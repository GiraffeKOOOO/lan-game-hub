// libraries
import { useContext, useMemo, useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Typography } from '@mui/material';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { XLg } from 'react-bootstrap-icons';
// context
import GameContext from '../GameContext/GameContext';
// files
import viewPlayerListState from './PlayerListState';
// styles
import '../../App.css';

const formatPlayerList = (data, setPlayerList) => {
  console.log('data', data);
  const formattedArray = data.map((player) => player.user_name);
  setPlayerList(formattedArray);
};

const fetchPlayerList = (selectedGame, setPlayerList) => {
  if (selectedGame == null) return;
  try {
    axios
      .get(`http://localhost:5134/api/GamePlayer/${selectedGame.game_id}`)
      .then((response) => formatPlayerList(response.data, setPlayerList))
      .catch(() => setPlayerList(null));
  } catch (error) {
    console.log(error);
  }
};

const PlayerList = () => {
  const { selectedGame, teamPlayerTableRef } = useContext(GameContext);
  const [playerList, setPlayerList] = useState(null);

  const cachedPlayerList = useMemo(() => {
    return playerList;
  }, [playerList]);

  const [viewPlayerList, setViewPlayerList] = useRecoilState(viewPlayerListState);

  useEffect(() => {
    fetchPlayerList(selectedGame, setPlayerList);
  }, [selectedGame, viewPlayerList]);

  if (viewPlayerList) {
    return (
      <>
        <Card className="mx-auto w-[1000px] mb-[30px]" ref={teamPlayerTableRef}>
          <Card.Body className="grid grid-rows-2">
            <div className="grid grid-cols-7 max-h-[10px]">
              <Typography
                fontSize={25}
                className="underline underline-offset-8 mb-0 mx-auto col-span-6"
              >
                Player list
              </Typography>
              <div className="justify-self-end">
                <Button
                  className="w-10 h-10 mx-auto"
                  variant="outline-dark"
                  onClick={() => setViewPlayerList(false)}
                >
                  <span className="flex">
                    <XLg />
                  </span>
                </Button>
              </div>
            </div>
            <div id="game-table-left" className="mx-auto w-[300px] text-center gap-4">
              {cachedPlayerList.map((player, iterator) => {
                return (
                  <p key={iterator} className="border-2 border-blue-200 rounded-[7px]">
                    {player}
                  </p>
                );
              })}
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }
};

export default PlayerList;
