import { useState, createContext } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [selectedGame, setSelectedGame] = useState(null);
  const [moreInfoHidden, setMoreInfoHidden] = useState(true);

  return <GameContext.Provider value={{ selectedGame, setSelectedGame, moreInfoHidden, setMoreInfoHidden }}>{children}</GameContext.Provider>;
}

export default GameContext;
