// libraries
import { useContext } from 'react';
// context
import ThemeContext from '../components/ThemeContext/ThemeContext';
// import UserContext from '../components/UserContext/UserContext';
// import GameContext from '../components/GameContext/GameContext';
// files
import TitleBar from '../components/TitleBar/TitleBar';
import SideBar from '../components/SideBar/SideBar';
import LoginModal from '../components/LoginModal/LoginModal';
import GameTimelinePanel from '../components/GameTimeline/GameTimelinePanel';
import GameInfoPanel from '../components/GameInfoPanel/GameInfoPanel';
// import PlayerTeamButton from "../components/PlayerTeamButton";
// import PlayerTeamList from "../components/PlayerTeamList";
// styles
import { BACKGROUND } from '../components/Theme/Colours';
import '../TimelineScrollbar.css';
import '../index.css';
import '../App.css';

const Home = () => {
  const { darkMode } = useContext(ThemeContext);
  // const { selectedGame, moreInfoHidden, playerTeamButtonHidden } = useContext(GameContext);

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

            {/* {selectedGame !== null && playerTeamButtonHidden !== true ? (
              <PlayerTeamButton />
            ) : (
              <div className="h-[40px]" />
            )}

            {moreInfoHidden !== true ? (
              <div className="mt-[40px] mb-[40px]">
                <PlayerTeamList />
              </div>
            ) : (
              ''
            )} */}

            <LoginModal />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
