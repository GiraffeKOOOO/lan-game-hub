import { useContext } from "react";
import GameContext from "./GameContext";
import "../App.css";
import Card from "react-bootstrap/Card";

function PlayerTeamList() {
  const { selectedGame } = useContext(GameContext);

  const halfwayPoint = Math.ceil(selectedGame.players.length / 2);
  const playerColumn1 = selectedGame.players.slice().splice(0, halfwayPoint);
  const playerColumn2 = selectedGame.players.slice().splice(halfwayPoint);

  return (
    <>
      <Card className="mx-auto w-[1000px]">
        <Card.Body className="grid grid-cols-2">
          {/** Left side of the table for player list */}
          <div id="game-table-left" className="mx-auto w-full border-r-2 text-center grid grid-cols-2 gap-4">
            <p className="text-[22px] underline underline-offset-6 col-span-2 mb-0">Player list</p>
            <div className="ml-[10px]">
              {playerColumn1.map((player, iterator) => {
                return (
                  <p key={iterator} className="border-2 border-blue-200 rounded-[7px]">
                    {player.playerName}
                  </p>
                );
              })}
            </div>
            <div className="mr-[10px]">
              {playerColumn2.map((player, iterator) => {
                return (
                  <p key={iterator} className="border-2 border-blue-200 rounded-[7px]">
                    {player.playerName}
                  </p>
                );
              })}
            </div>
          </div>

          {/** Right side of the table for the team list */}
          <div id="game-table-right" className="mx-auto w-full text-center">
            <p className="text-[22px] underline underline-offset-6">Team list</p>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default PlayerTeamList;
