// libraries
import { useState, createContext, useRef } from 'react';

export const GameState = {
  FINISHED: 'Finished',
  INPROGRESS: 'In Progress',
  UPNEXT: 'Up Next',
  INQUEUE: 'In Queue',
};

export const GameStateColor = {
  FINISHED: 'bg-slate-200',
  INPROGRESS: 'bg-green-200',
  UPNEXT: 'bg-orange-200',
  INQUEUE: 'bg-blue-200',
};

const GameContext = createContext();

export function GameProvider({ children }) {
  const [selectedGame, setSelectedGame] = useState(null);
  const [playerTeamButtonHidden, setPlayerTeamButtonHidden] = useState(false);
  const [moreInfoHidden, setMoreInfoHidden] = useState(true);
  const teamPlayerTableRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current?.offsetTop,
      behavior: 'smooth',
    });
  };

  const handleMoreInfoClick = () => {
    setMoreInfoHidden(false);
    setTimeout(() => {
      scrollToSection(teamPlayerTableRef);
    }, 100);
    setPlayerTeamButtonHidden(true);
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
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameContext;
