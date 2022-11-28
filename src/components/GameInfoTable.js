import { useContext } from "react";
import GameContext from "../components/GameContext";
import "../App.css";
import Card from "react-bootstrap/Card";

function GameInfoTable() {
  const { selectedGame } = useContext(GameContext);

  return (
    <>
      <Card className="mx-auto w-[1000px]">
        <Card.Body className="grid grid-cols-2">
          <div id="game-table-left" className="mx-auto w-full border-r-2 text-center">
            <p className="text-[22px] underline underline-offset-6">Player list</p>
            {selectedGame.players.map((player, iterator) => {
              return (
                <p key={iterator} className="rounded-xl bg-gray-200">
                  {player.playerName}
                </p>
              );
            })}
          </div>
          <div id="game-table-right" className="mx-auto w-full text-center">
            <p className="text-[22px] underline underline-offset-6">Team list</p>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default GameInfoTable;
