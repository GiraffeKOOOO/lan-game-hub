// libraries
import { useContext } from 'react';
// context
import ThemeContext from '../components/ThemeContext/ThemeContext';
// files
import TitleBar from '../components/TitleBar/TitleBar';
import SideBar from '../components/SideBar/SideBar';
import LoginModal from '../components/LoginModal/LoginModal';
import GameTimelinePanel from '../components/GameTimeline/GameTimelinePanel';
import GameInfoPanel from '../components/GameInfoPanel/GameInfoPanel';
import PlayerList from '../components/PlayerList/PlayerList';
// styles
import { BACKGROUND } from '../components/Theme/Colours';
import '../TimelineScrollbar.css';
import '../index.css';
import '../App.css';

const Home = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <div className="grid grid-cols-7 min-h-screen">
        {/** Left panel: user, pages etc. */}
        <div id="left-panel" className="bg-sky-800">
          <SideBar />
        </div>

        {/** right panel: main body of the page */}
        <div
          id="main-body"
          className="col-span-6"
          style={
            darkMode ? { backgroundColor: BACKGROUND.DARK } : { backgroundColor: BACKGROUND.LIGHT }
          }
        >
          <div id="main-body-container" className="grid grid-flow-row">
            <TitleBar />

            <div id="timeline" className="overflow-hidden border-y-2">
              <GameTimelinePanel />
            </div>

            <div id="game-panel" className=" w-full ">
              <GameInfoPanel />
            </div>

            <div id="player-list" className=" w-full ">
              <PlayerList />
            </div>

            <LoginModal />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
