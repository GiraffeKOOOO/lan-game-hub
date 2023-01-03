import { useContext } from "react";
import "../App.css";
import { ArrowDownCircleFill } from "react-bootstrap-icons";
import GameContext from "../components/GameContext";

function PlayerTeamButton() {
  const { handleMoreInfoClick } = useContext(GameContext);

  return (
    <div className="mt-[20px] mb-[40px]">
      <p className="text-center m-0 mx-auto">More information</p>
      <ArrowDownCircleFill size={50} className="mx-auto hover:opacity-80" onClick={() => handleMoreInfoClick()} />
    </div>
  );
}

export default PlayerTeamButton;
