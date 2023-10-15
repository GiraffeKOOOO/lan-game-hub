// libraries
import { useContext } from 'react';
// context
import ThemeContext from '../components/ThemeContext/ThemeContext';
import UserContext from '../components/UserContext/UserContext';
// import GameContext from '../components/GameContext/GameContext';
// files
import TitleBar from '../components/TitleBar/TitleBar';
import SideBar from '../components/SideBar/SideBar';
// styles
import { BACKGROUND } from '../components/Theme/Colours';
import '../TimelineScrollbar.css';
import '../index.css';
import '../App.css';

const AddGame = () => {
  const { darkMode } = useContext(ThemeContext);
  const { userRole, userName } = useContext(UserContext);

  if (userRole === 'Admin' && userName !== null) {
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
              darkMode
                ? { backgroundColor: BACKGROUND.DARK }
                : { backgroundColor: BACKGROUND.LIGHT }
            }
          >
            <div id="main-body-container" className="grid grid-flow-row">
              <TitleBar />
            </div>

            <div
              id="admin-action-buttons"
              className="h-screen grid grid-cols-3 justify-items-center items-center"
            >
              <p>Add game</p>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default AddGame;
