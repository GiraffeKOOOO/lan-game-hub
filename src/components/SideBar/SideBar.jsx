// libraries
import { useNavigate } from 'react-router-dom';
import { PersonFill } from 'react-bootstrap-icons';
// context
// import GameContext from "../components/GameContext";
// files
// styles
// import "../TimelineScrollbar.css";
import '../../index.css';
import LoginButton from './LoginButton';
// import LogoutButton from './LogoutButton';

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <div id="left-body-container" className="h-full grid grid-rows-8">
      <div
        id="user-profile"
        className="w-full my-auto flex flex-row justify-center items-center border-2 border-cyan-400 mt-[10px]"
      >
        <PersonFill
          size={30}
          className="mx-auto h-[75px] w-[75px] p-[5px] rounded-full bg-slate-100 hover:bg-[#d6d6d6]"
          onClick={() => navigate('/user')}
        />
      </div>

      <div
        id="sidebar-timeline-container"
        className="w-full h-full row-span-6 my-auto border-2 border-pink-400"
      >
        <div className="w-full border-2 border-cyan-400">
          <p>game 1 div</p>
        </div>

        <div className="w-full border-2 border-cyan-400">
          <p>game 2 div</p>
        </div>
        <div className="w-full border-2 border-cyan-400">
          <p>game 1 div</p>
        </div>

        <div className="w-full border-2 border-cyan-400">
          <p>game 2 div</p>
        </div>
        <div className="w-full border-2 border-cyan-400">
          <p>game 1 div</p>
        </div>

        <div className="w-full border-2 border-cyan-400">
          <p>game 2 div</p>
        </div>
      </div>

      <div
        id="login"
        className="w-full my-auto flex flex-row justify-center items-center border-2 border-cyan-400"
      >
        {/* TODO : add user context and determine the log in buttons based on that */}
        <LoginButton />
        {/* <LogoutButton /> */}
      </div>
    </div>
  );
};

export default SideBar;
