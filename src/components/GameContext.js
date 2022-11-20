import { useState, createContext } from 'react';

const GameContext = createContext();

export function GameProvider({children}) {
    const [selectedGame, setSelectedGame] = useState(null)

    return(
        <GameContext.Provider value={{selectedGame, setSelectedGame}}>{children}</GameContext.Provider>
    );
}

export default GameContext;