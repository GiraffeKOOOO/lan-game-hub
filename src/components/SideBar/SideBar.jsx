// libraries
import { useNavigate } from 'react-router-dom';
import { PersonFill } from 'react-bootstrap-icons';
// context
// import GameContext from "../components/GameContext";
// files
// styles
// import "../TimelineScrollbar.css";
import '../index.css';

const SideBar = () => {
  const navigate = useNavigate();

  return (
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
  );
};

export default SideBar;
