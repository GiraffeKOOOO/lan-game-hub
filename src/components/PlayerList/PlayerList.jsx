// libraries
import { useContext } from 'react';
import { useRecoilState } from 'recoil';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { XLg } from 'react-bootstrap-icons';
// context
import GameContext from '../GameContext/GameContext';
// files
import viewPlayerListState from './PlayerListState';
// styles
import '../../App.css';

const PlayerList = () => {
  const { selectedGame, teamPlayerTableRef } = useContext(GameContext);

  const [viewPlayerList, setViewPlayerList] = useRecoilState(viewPlayerListState);

  //   const playerHalfwayPoint = Math.ceil(selectedGame.players.length / 2);
  //   const playerColumn1 = selectedGame.players.slice().splice(0, playerHalfwayPoint);
  //   const playerColumn2 = selectedGame.players.slice().splice(playerHalfwayPoint);

  if (viewPlayerList) {
    return (
      <>
        <Card className="mx-auto w-[1000px] mb-[30px]" ref={teamPlayerTableRef}>
          <Card.Body className="grid grid-cols-2">
            {/** Left side of the table for player list */}
            <div
              id="game-table-left"
              className="mx-auto w-full border-r-2 text-center grid grid-cols-2 gap-4"
            >
              <p className="text-[22px] underline underline-offset-6 col-span-2 mb-0">
                Player list
              </p>
              <div className="ml-[10px]">
                {/* {playerColumn1.map((player, iterator) => {
                return (
                  <p key={iterator} className="border-2 border-blue-200 rounded-[7px]">
                    {player.playerName}
                  </p>
                );
              })} */}
              </div>
              <div className="mr-[10px]">
                {/* {playerColumn2.map((player, iterator) => {
                return (
                  <p key={iterator} className="border-2 border-blue-200 rounded-[7px]">
                    {player.playerName}
                  </p>
                );
              })} */}
              </div>
            </div>
            <Button
              className="w-10 h-10 mx-auto"
              variant="outline-dark"
              onClick={() => setViewPlayerList(false)}
            >
              <span className="flex">
                <XLg />
              </span>
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
};

export default PlayerList;
