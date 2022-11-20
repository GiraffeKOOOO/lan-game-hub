import { useContext } from 'react';
import '../App.css';
import GameContext from '../components/GameContext';
import { ArrowDownCircleFill } from 'react-bootstrap-icons';
import Timeline from '../components/Timeline';
import GameInfoPanel from '../components/GameInfoPanel';

function Home() {
  const { selectedGame } = useContext(GameContext);
  const date = new Date();
  const currentTime = date.getDay() + date.getHours() + ":" + date.getMinutes();
  return (
    <>
        <div className='grid grid-cols-5 min-h-screen'>

            {/** Left panel: user, pages etc. */}
            <div id='left-panel' className='bg-sky-800'>
              <div id='left-body-container' className='grid grid-flow-row'>

                  <div id='user-profile' className='w-full border-2 border-cyan-400'>
                    <p>User profile div</p>
                  </div>

                  <div className='w-full border-2 border-cyan-400'>
                    <p>game 1 div</p>
                  </div>

                  <div className='w-full border-2 border-cyan-400'>
                    <p>game 2 div</p>
                  </div>

              </div>
            </div>

            {/** right panel: main body of the page */}
            <div id='main-body' className='col-span-4 border-2'>
                <div id='main-body-container' className='grid grid-flow-row'>

                  <p className='mx-auto font-semibold text-[25px] mt-[10px]'>Current Time: {currentTime}</p>
                  <div id='timeline' className='overflow-hidden'>
                    <Timeline/>
                  </div>

                  <div id='game-panel' className='border-t-[2px] w-full my-[40px] pt-[50px]'>
                    <GameInfoPanel/>
                  </div>

                  {selectedGame !== null ? (
                    <div className='mt-[40px]'>
                      <p className='text-center m-0 mx-auto'>More information</p>
                      <ArrowDownCircleFill size={50} className='mx-auto hover:opacity-80'/>
                    </div>
                  ) : "" }

                </div>
            </div>

        </div>
    </>
  );
}

export default Home;
