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
      case "inProgress":
        return "In Progress";
      case "upNext":
        return "Up Next";
      case "inQueue":
        return "In Queue";
      default:
        return "Amazing";
    }
  };

  const gameStateColor = (selectedGameState) => {
    switch (selectedGameState) {
      case "finished":
        return "bg-slate-200";
      case "inProgress":
        return "bg-green-200";
      case "upNext":
        return "bg-orange-200";
      case "inQueue":
        return "bg-blue-200";
      default:
        return "Amazing";
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
