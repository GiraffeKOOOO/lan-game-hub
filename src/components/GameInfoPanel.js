import { useContext } from 'react';
import '../App.css';
import GameContext from './GameContext';
import Card from 'react-bootstrap/Card';

function TimeLine() {
  const { selectedGame } = useContext(GameContext);

  if( selectedGame === null ){
    return(
      <>
        <p>No game selected</p>
      </>
    )
  } else {
    return (
      <>
      <div className=''>
        <Card className='grow-0 shrink-0 w-[800px] left-[440px]'>
        <Card.Img variant="top" src={selectedGame.url} />
        <Card.Body className='text-center p-1'>
        <Card.Title className='mb-0'>{selectedGame.title}</Card.Title>
        <Card.Text className='mb-0'>Game mode: {selectedGame.mode}</Card.Text>
        <Card.Text>Starts at: {selectedGame.startsAt}</Card.Text>
        </Card.Body>
        </Card>
      </div>
    </>
  );
}
}

export default TimeLine;
