import '../App.css';

function Home() {
  return (
    <>
        <div className='grid grid-cols-5'>

            <div id='left-panel' className='h-screen bg-sky-800'>
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

            <div id='main-body' className='col-span-4 border-2 border-rose-400 h-screen'>
                <div id='main-body-container' className='grid grid-flow-row'>

                  <div id='timeline' className='w-full border-2 border-cyan-400'>
                    <p>timeline div</p>
                  </div>

                  <div id='game-panel' className='w-full border-2 border-cyan-400'>
                    <p>game panel div</p>
                  </div>

                  <div id='game-stats' className='w-full border-2 border-cyan-400'>
                    <p>game stats div</p>
                  </div>

                  <div className='w-full border-2 border-cyan-400'>
                    <p>navigate user to more content</p>
                  </div>

                </div>
            </div>
        </div>
    </>
  );
}

export default Home;
