import { useState, createContext, useRef } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [selectedGame, setSelectedGame] = useState(null);
  const [moreInfoHidden, setMoreInfoHidden] = useState(true);
  const teamPlayerTableRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const handleMoreInfoClick = () => {
    setMoreInfoHidden(false);
    scrollToSection(teamPlayerTableRef);
  };

  return <GameContext.Provider value={{ selectedGame, setSelectedGame, moreInfoHidden, teamPlayerTableRef, handleMoreInfoClick }}>{children}</GameContext.Provider>;
}

export default GameContext;
