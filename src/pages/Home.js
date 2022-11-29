import { useContext, useState, useEffect } from "react";
import "../App.css";
import "../TimelineScrollbar.css";
import GameContext from "../components/GameContext";
import { ArrowDownCircleFill, Calendar2Week, Clock } from "react-bootstrap-icons";
import Timeline from "../components/Timeline";
import GameInfoPanel from "../components/GameInfoPanel";
import PlayerTeamList from "../components/PlayerTeamList";

function Home() {
  const { selectedGame, moreInfoHidden, setMoreInfoHidden } = useContext(GameContext);
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDateState(new Date());
    }, 60000);
  }, []);

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
            <span className="flex flex-row gap-3 mx-auto mt-[10px]">
              <Calendar2Week size={30} />
              <p className="text-[20px]">
                {dateState.toLocaleDateString("en-GB", {
                  weekday: "long",
                  day: "numeric",
                  month: "short",
                })}
              </p>{" "}
              <Clock size={30} />
              <p className="text-[20px]">
                {dateState.toLocaleString("en-GB", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: false,
                })}
              </p>
            </span>

            <div id="timeline" className="overflow-hidden border-y-2">
              <Timeline />
            </div>

            <div id="game-panel" className=" w-full ">
              <GameInfoPanel />
            </div>

            {selectedGame !== null ? (
              <div className="mt-[40px] mb-[40px]">
                <p className="text-center m-0 mx-auto">More information</p>
                <ArrowDownCircleFill size={50} className="mx-auto hover:opacity-80" onClick={() => setMoreInfoHidden(false)} />
              </div>
            ) : (
              ""
            )}

            {moreInfoHidden != true ? (
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
