import { useContext } from "react";
import GameContext from "./GameContext";
import "../App.css";
import Card from "react-bootstrap/Card";

function PlayerTeamList() {
  const { selectedGame, teamPlayerTableRef } = useContext(GameContext);

  const playerHalfwayPoint = Math.ceil(selectedGame.players.length / 2);
  const playerColumn1 = selectedGame.players.slice().splice(0, playerHalfwayPoint);
  const playerColumn2 = selectedGame.players.slice().splice(playerHalfwayPoint);

  const teamHalfwayPoint = Math.ceil(selectedGame.teams.length / 2);
  const teamColumn1 = selectedGame.teams.slice().splice(0, teamHalfwayPoint);
  const teamCoulmn2 = selectedGame.teams.slice().splice(teamHalfwayPoint);

  return (
    <>
      <Card className="mx-auto w-[1000px]" ref={teamPlayerTableRef}>
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
          <div id="game-table-right" className="mx-auto w-full text-center grid grid-cols-2 gap-4">
            <p className="text-[22px] underline underline-offset-6 col-span-2 mb-0">Team list</p>
            <div className="ml-[10px]">
              {teamColumn1.map((team, iterator) => {
                return (
                  <p key={iterator} className="border-2 border-blue-200 rounded-[7px]">
                    {team.teamName}
                  </p>
                );
              })}
            </div>
            <div className="mr-[10px]">
              {teamCoulmn2.map((team, iterator) => {
                return (
                  <p key={iterator} className="border-2 border-blue-200 rounded-[7px]">
                    {team.teamName}
                  </p>
                );
              })}
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default PlayerTeamList;
