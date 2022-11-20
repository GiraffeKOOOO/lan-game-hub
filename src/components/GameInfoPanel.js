import { useContext } from 'react';
import '../App.css';
import GameContext from './GameContext';
import Card from 'react-bootstrap/Card';
import { PersonFill, ClockFill, Controller } from 'react-bootstrap-icons';

function TimeLine() {
  const { selectedGame } = useContext(GameContext);
  
  if( selectedGame === null ){
    return(
      <>
        <Card className='mx-auto w-[800px]'>
        <Card.Body className='text-center p-1'>
        <Card.Title className='mb-0 py-[15px]'>Please select a game to find out more information</Card.Title>
        </Card.Body>
        </Card>
      </>
    )
  } else {
    return (
      <>
        <Card className='mx-auto w-[800px]'>
        <Card.Img variant="top" src={selectedGame.url} className='h-[400px] w-[800px]'/>
        <Card.Body className='text-center p-1'>
        <Card.Title className='mb-0 border-y-2 py-[15px]'>{selectedGame.title}</Card.Title>
          <div className='grid grid-rows-2 grid-flow-col mt-[20px]'>
            <div className="row-span-3 bg-slate-200 rounded-lg mr-[30px] mb-[10px]  ml-[15px]">
              <p className='mb-2 mt-[30px]'>Players</p>
              <PersonFill size={40} className='mx-auto'/>
              <p className='mb-0'>{selectedGame.players}</p>
            </div>
            <div className="col-span-2 bg-slate-200 rounded-lg mb-[15px] mr-[15px]">
              <p className='mb-0'>Game mode</p>
              <Controller size={20} className='mx-auto'/> 
              <p className='mb-0'>{selectedGame.mode}</p>
            </div>
            <div className="row-span-2 col-span-2 bg-slate-200 rounded-lg mb-[10px] mr-[15px]">
              <p className='mb-0'>Starts at</p>
              <ClockFill size={30} className='mx-auto'/> 
              <p className='mb-0'>{selectedGame.startsAt}</p>
            </div>
          </div>
        </Card.Body>
        </Card>
      </>
    );
  }
}

export default TimeLine;
