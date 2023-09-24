// libraries
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ScrollContainer from 'react-indiana-drag-scroll';
import axios from 'axios';
// context
// import GameContext from './GameContext';
// files
// import GameListData from './mockData/GameList';
// styles
import '../../App.css';
import '../../TimelineScrollbar.css';

const fetchGameInfo = (setGameList) => {
  axios
    .get('http://localhost:5134/api/Game')
    .then((response) => setGameList(response.data))
    .catch((error) => console.log(error.message));
};

const GameTimelinePanel = () => {
  //   const { setSelectedGame, setMoreInfoHidden, setPlayerTeamButtonHidden } = useContext(GameContext);

  //   const handleCardSelection = (game) => {
  //     setSelectedGame(game);
  //     setPlayerTeamButtonHidden(false);
  //     setMoreInfoHidden(true);
  //   };

  const [gameList, setGameList] = useState({});

  useEffect(() => {
    fetchGameInfo(setGameList);
  }, []);

  return (
    <ScrollContainer className="scroll-container" vertical={false} hideScrollbars={false}>
      <div className="flex gap-[90px] py-[20px]">
        <Card className="shrink-0 w-[220px] ml-[30px]">
          <Card.Body className="text-center p-1">
            <Card.Text className="mt-[95px] font-semibold text-[30px]">LAN Start</Card.Text>
          </Card.Body>
        </Card>

        {gameList.map((game) => {
          return (
            <Card
              className="grow-0 shrink-0 w-[300px] hover:border-2 hover:border-green-600 hover:opacity-80"
              //   onClick={() => handleCardSelection(game)}
              key={game.game_id}
            >
              {/* TODO: get the game url updated in the backend */}
              <Card.Img variant="top" src={game.url} className="h-[140px]" />
              <Card.Body className="text-center p-1">
                <Card.Title className="mb-0">{game.game_name}</Card.Title>
                <Card.Text className="mb-0">Game mode: {game.game_mode}</Card.Text>
                <Card.Text>Starts at: {game.game_start_time}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}

        <Card className="shrink-0 w-[220px] mx-[30px]">
          <Card.Body className="text-center p-1">
            <Card.Text className="mt-[95px] font-semibold text-[30px]">LAN End</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </ScrollContainer>
  );
};

export default GameTimelinePanel;
