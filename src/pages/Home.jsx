// libraries
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// context
import ThemeContext from '../components/ThemeContext/ThemeContext';
// import GameContext from "../components/GameContext";
// files
import TitleBar from '../components/TitleBar/TitleBar';
// import Timeline from "../components/Timeline";
// import GameInfoPanel from "../components/GameInfoPanel";
// import PlayerTeamButton from "../components/PlayerTeamButton";
// import PlayerTeamList from "../components/PlayerTeamList";
// styles
// import "../TimelineScrollbar.css";
import '../index.css';
import { BACKGROUND } from '../components/Theme/Colours';
import { PersonFill } from 'react-bootstrap-icons';

const Home = () => {
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="grid grid-cols-7 min-h-screen">
        {/** Left panel: user, pages etc. */}
        <div id="left-panel" className="bg-sky-800">
          <div id="left-body-container" className="grid grid-flow-row">
            <div id="user-profile" className="w-full border-2 border-cyan-400 mt-[10px]">
              <PersonFill
                size={30}
                className="mx-auto h-[75px] w-[75px] p-[5px] rounded-full bg-slate-100 hover:opacity-90 hover:outline outline-green-500"
                onClick={() => navigate('/user')}
              />
            </div>

            {/* 
            <div className="w-full border-2 border-cyan-400">
              <p>game 1 div</p>
            </div>

            <div className="w-full border-2 border-cyan-400">
              <p>game 2 div</p>
            </div> */}
          </div>
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

            {/* <div id="timeline" className="overflow-hidden border-y-2">
              <Timeline />
            </div> */}

            {/*
            <div id="game-panel" className=" w-full ">
              <GameInfoPanel />
            </div>
            {selectedGame !== null && playerTeamButtonHidden !== true ? <PlayerTeamButton /> : <div className="h-[40px]" />}
            {moreInfoHidden !== true ? (
              <div className="mt-[40px] mb-[40px]">
                <PlayerTeamList />
              </div>
            ) : (
              ""
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
