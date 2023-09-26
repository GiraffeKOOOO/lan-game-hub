// libraries
import { useState, useEffect, useMemo, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import ScrollContainer from 'react-indiana-drag-scroll';
import axios from 'axios';
// context
import GameContext from '../GameContext/GameContext';
// files
// import GameListData from './mockData/GameList';
import StartEndBlock from './StartEndBlock';
// styles
import '../../App.css';
import '../../TimelineScrollbar.css';

const fetchGameInfo = (setGameList) => {
  try {
    axios
      .get('http://localhost:5134/api/Game')
      .then((response) => setGameList(response.data))
      .catch((error) => console.log(error.message));
  } catch (error) {
    console.log(error);
  }
};

const GameTimelinePanel = () => {
  const { setSelectedGame, setMoreInfoHidden, setPlayerTeamButtonHidden } = useContext(GameContext);

  const handleCardSelection = (game) => {
    setSelectedGame(game);
    setPlayerTeamButtonHidden(false);
    setMoreInfoHidden(true);
  };

  const [gameList, setGameList] = useState({});
  const pathToAssets = '/src/assets/images/';

  useEffect(() => {
    fetchGameInfo(setGameList);
  }, []);

  const cachedGameList = useMemo(() => {
    return gameList;
  }, [gameList]);

  if (gameList.length > 0) {
    return (
      <ScrollContainer className="scroll-container" vertical={false} hideScrollbars={false}>
        <div className="flex gap-[90px] py-[20px]">
          <StartEndBlock start />

          {cachedGameList.map((game) => {
            return (
              <Card
                className="grow-0 shrink-0 w-[300px] hover:border-2 hover:border-green-600 hover:opacity-80"
                onClick={() => handleCardSelection(game)}
                key={game.game_id}
              >
                <Card.Img
                  variant="top"
                  src={`${pathToAssets}${game.game_image_string}`}
                  className="h-[140px]"
                />
                <Card.Body className="text-center p-1">
                  <Card.Title className="mb-0">{game.game_name}</Card.Title>
                  <Card.Text className="mb-0">Game mode: {game.game_mode}</Card.Text>
                  <Card.Text>Starts at: {game.game_start_time}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}

          <StartEndBlock start={false} />
        </div>
      </ScrollContainer>
    );
  } else {
    return (
      <ScrollContainer className="scroll-container" vertical={false} hideScrollbars={false}>
        <div className="flex gap-[90px] py-[20px]">
          <StartEndBlock start />
          <StartEndBlock start={false} />
        </div>
      </ScrollContainer>
    );
  }
};

export default GameTimelinePanel;
