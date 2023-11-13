// libraries
import { useState, createContext, useRef } from 'react';
import { useRecoilState } from 'recoil';
// files
import viewPlayerListState from '../PlayerList/PlayerListState';

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
  const [, setViewPlayerList] = useRecoilState(viewPlayerListState);
  const teamPlayerTableRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current?.offsetTop,
      behavior: 'smooth',
    });
  };

  const handleMoreInfoClick = () => {
    setTimeout(() => {
      scrollToSection(teamPlayerTableRef);
    }, 100);
    setViewPlayerList(true);
  };

  const returnGameStatusColor = (gameStatusString) => {
    switch (gameStatusString) {
      case 'FINISHED':
        return GameStateColor.FINISHED;
      case 'INPROGRESS':
        return GameStateColor.INPROGRESS;
      case 'UPNEXT':
        return GameStateColor.UPNEXT;
      case 'INQUEUE':
        return GameStateColor.INQUEUE;
    }
  };

  const returnGameStateString = (gameStatusString) => {
    switch (gameStatusString) {
      case 'FINISHED':
        return 'Finished';
      case 'INPROGRESS':
        return 'In Progress';
      case 'UPNEXT':
        return 'Up Next';
      case 'INQUEUE':
        return 'In Queue';
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
        returnGameStatusColor,
        returnGameStateString,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameContext;
