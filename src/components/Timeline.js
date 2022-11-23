import { useContext } from "react";
import GameContext from "./GameContext";
import "../App.css";
import GameListData from "./GameList";
import Card from "react-bootstrap/Card";
import ScrollContainer from "react-indiana-drag-scroll";

function TimeLine() {
  const { setSelectedGame } = useContext(GameContext);

  return (
    <ScrollContainer
      className="scroll-container"
      vertical={false}
      hideScrollbars={false}
    >
      <div className="flex gap-[90px] py-[20px]">
        <Card className="shrink-0 w-[220px] ml-[30px]">
          <Card.Body className="text-center p-1">
            <Card.Text className="mt-[95px] font-semibold text-[30px]">
              LAN Start
            </Card.Text>
          </Card.Body>
        </Card>

        {GameListData.map((game) => {
          return (
            <Card
              className="grow-0 shrink-0 w-[300px] hover:border-2 hover:border-green-600 hover:opacity-80"
              onClick={() => setSelectedGame(game)}
              key={game.id}
            >
              <Card.Img variant="top" src={game.url} />
              <Card.Body className="text-center p-1">
                <Card.Title className="mb-0">{game.title}</Card.Title>
                <Card.Text className="mb-0">Game mode: {game.mode}</Card.Text>
                <Card.Text>Starts at: {game.startsAt}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}

        <Card className="shrink-0 w-[220px] mx-[30px]">
          <Card.Body className="text-center p-1">
            <Card.Text className="mt-[95px] font-semibold text-[30px]">
              LAN End
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </ScrollContainer>
  );
}

export default TimeLine;
