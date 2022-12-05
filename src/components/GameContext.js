import { useState, createContext, useRef } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [selectedGame, setSelectedGame] = useState(null);
  const [playerTeamButtonHidden, setPlayerTeamButtonHidden] = useState(false);
  const [moreInfoHidden, setMoreInfoHidden] = useState(true);
  const teamPlayerTableRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current?.offsetTop,
      behavior: "smooth",
    });
  };

  const handleMoreInfoClick = () => {
    setMoreInfoHidden(false);
    setTimeout(() => {
      scrollToSection(teamPlayerTableRef);
    }, 100);
    setPlayerTeamButtonHidden(true);
  };

  const gameStateText = (selectedGameState) => {
    switch (selectedGameState) {
      case "finished":
        return "Finished";
        break;
      case "inProgress":
        return "In Progress";
        break;
      case "upcoming":
        return "Upcoming";
        break;
      case "inQueue":
        return "In Queue";
        break;
      default:
        return "Amazing";
        break;
    }
  };

  const gameStateColor = (selectedGameState) => {
    switch (selectedGameState) {
      case "finished":
        return "bg-slate-200";
        break;
      case "inProgress":
        return "bg-green-200";
        break;
      case "upcoming":
        return "bg-orange-200";
        break;
      case "inQueue":
        return "bg-blue-200";
        break;
      default:
        return "Amazing";
        break;
    }
  };

  return (
    <GameContext.Provider
      value={{
        selectedGame,
        setSelectedGame,
        playerTeamButtonHidden,
        setPlayerTeamButtonHidden,
        moreInfoHidden,
        setMoreInfoHidden,
        teamPlayerTableRef,
        handleMoreInfoClick,
        gameStateText,
        gameStateColor,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameContext;
