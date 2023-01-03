import { useContext } from "react";
import "../App.css";
import "../TimelineScrollbar.css";
import GameContext from "../components/GameContext";
import TitleBar from "../components/TitleBar";
import Timeline from "../components/Timeline";
import GameInfoPanel from "../components/GameInfoPanel";
import PlayerTeamButton from "../components/PlayerTeamButton";
import PlayerTeamList from "../components/PlayerTeamList";

function Home() {
  const { selectedGame, moreInfoHidden, playerTeamButtonHidden } = useContext(GameContext);

  return (
    <>
      <div className="grid grid-cols-7 min-h-screen">
        {/** Left panel: user, pages etc. */}
        <div id="left-panel" className="bg-sky-800">
          <div id="left-body-container" className="grid grid-flow-row">
            <div id="user-profile" className="w-full border-2 border-cyan-400">
              <p>User profile div</p>
            </div>

            <div className="w-full border-2 border-cyan-400">
              <p>game 1 div</p>
            </div>

            <div className="w-full border-2 border-cyan-400">
              <p>game 2 div</p>
            </div>
          </div>
        </div>

        {/** right panel: main body of the page */}
        <div id="main-body" className="col-span-6">
          <div id="main-body-container" className="grid grid-flow-row">
            <TitleBar />
            <div id="timeline" className="overflow-hidden border-y-2">
              <Timeline />
            </div>
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
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
