import { useContext, useState } from "react";
import "../App.css";
import GameContext from "./GameContext";
import Card from "react-bootstrap/Card";
import { PersonFill, ClockFill, Controller, PlusCircleFill, XCircleFill } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";

function TimeLine() {
  const { selectedGame, handleMoreInfoClick, gameStateText, gameStateColor } = useContext(GameContext);
  const [isUserPlaying, setIsUserPlaying] = useState(false);

  const handleUserJoining = () => {
    setIsUserPlaying(true);
    handleMoreInfoClick();
  };

  const handleUserLeaving = () => {
    setIsUserPlaying(false);
    handleMoreInfoClick();
  };

  if (selectedGame === null) {
    return (
      <>
        <Card className="mx-auto w-[800px] my-[40px]">
          <Card.Body className="text-center p-1">
            <Card.Title className="mb-0 py-[15px]">Please select a game to find out more information</Card.Title>
          </Card.Body>
        </Card>
      </>
    );
  } else {
    return (
      <>
        <Card className="mx-auto w-[600px] my-[40px]">
          <Card.Img variant="top" src={selectedGame.url} className="h-[250px] w-[300px]" />
          <Card.Body className="text-center p-1">
            <Card.Title className="mb-0 border-y-2 py-[15px]">{selectedGame.title}</Card.Title>
            <div className="grid grid-rows-2 grid-flow-col mt-[20px]">
              <div className="row-span-3 bg-slate-200 rounded-lg mr-[30px] mb-[10px]  ml-[15px]">
                <p className="mb-2 mt-[30px]">Players</p>
                <PersonFill size={40} className="mx-auto" />
                <p className="mb-0">{selectedGame.players.length}</p>
              </div>
              <div className="col-span-2 bg-slate-200 rounded-lg mb-[15px] mr-[15px]">
                <p className="mb-0">Game mode</p>
                <Controller size={20} className="mx-auto" />
                <p className="mb-0">{selectedGame.mode}</p>
              </div>
              <div className="row-span-2 col-span-2 bg-slate-200 rounded-lg mb-[10px] mr-[15px]">
                <p className="mb-0">Starts at</p>
                <ClockFill size={30} className="mx-auto" />
                <p className="mb-0">{selectedGame.startsAt}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 border-y-2 my-[5px]">
              <p className="col-span-1 mx-auto my-[10px] bg-slate-200 rounded-lg py-[10px] px-[40px]">Game status:</p>
              <p className={"col-span-1 mx-auto my-[10px] rounded-lg py-[10px] px-[40px] justify-start" + " " + gameStateColor(selectedGame.state)}>{gameStateText(selectedGame.state)}</p>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <p className="mb-[4px]">Current playing status:</p>
                {isUserPlaying ? (
                  <p className="mb-[4px] border-2 rounded-[10px] p-[5px] w-40 mx-auto border-green-500 text-green-600">Playing</p>
                ) : (
                  <p className="mb-[4px] border-2 border-gray-400 text-gray-500 rounded-[10px] p-[5px] w-40 mx-auto">Not Playing</p>
                )}
              </div>
              {isUserPlaying ? (
                <Button className="w-40 h-10 mt-[27px] mx-auto" variant="danger" onClick={() => handleUserLeaving()}>
                  <span className="flex">
                    <p className="ml-10px mx-auto">Leave game</p>
                    <XCircleFill size={20} className="mt-[4px]" />
                  </span>
                </Button>
              ) : (
                <Button className="w-40 h-10 mt-[27px] mx-auto" variant="primary" onClick={() => handleUserJoining()}>
                  <span className="flex">
                    <p className="ml-10px mx-auto">Join game</p>
                    <PlusCircleFill size={20} className="mt-[4px]" />
                  </span>
                </Button>
              )}
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default TimeLine;
