import { useContext } from 'react';
import GameContext from './GameContext';
import '../App.css';
import GameListData from './GameList';
import Card from 'react-bootstrap/Card';

function TimeLine() {
  const { setSelectedGame } = useContext(GameContext)

  return (
    <>
      <div className='flex gap-[50px]'>

        <Card className='grow-0 shrink-0 w-[300px] ml-[20px]'>
        <Card.Body className='text-center p-1'>
        <Card.Text className='mt-[95px] font-semibold text-[30px]'>LAN Start</Card.Text>
        </Card.Body>
        </Card>

        {GameListData.map((game) => {
            return (
                <Card className='grow-0 shrink-0 w-[300px] hover:border-2 hover:border-green-600 hover:opacity-80' onClick={() => setSelectedGame(game)} key={game.id}>
                <Card.Img variant="top" src={game.url} />
                <Card.Body className='text-center p-1'>
                <Card.Title className='mb-0'>{game.title}</Card.Title>
                <Card.Text className='mb-0'>Game mode: {game.mode}</Card.Text>
                <Card.Text>Starts at: {game.startsAt}</Card.Text>
                </Card.Body>
                </Card>
            )
        })}

        <Card className='grow-0 shrink-0 w-[300px] mr-[20px]'>
        <Card.Body className='text-center p-1'>
        <Card.Title className='my-auto'>LAN End</Card.Title>
        </Card.Body>
        </Card>

      </div>
    </>
  );
}

export default TimeLine;
