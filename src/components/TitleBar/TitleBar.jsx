// libraries
import { useState, useEffect, useContext } from "react";
import { Calendar2Week, Clock } from "react-bootstrap-icons";
import Switch from "react-switch";
// context
// import GameContext from "../components/GameContext";
import ThemeContext from "../ThemeContext/ThemeContext";
// files
// styles
import { FONT_COLOUR } from '../Theme/Colours'

function TitleBar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDateState(new Date());
    }, 60000);
  }, []);

  const handleDarkModeSwitch = () => {
    toggleDarkMode();
  };

  return (
    <div className="grid grid-cols-3">
      <div className="col-span-1">
        <p className="text-[30px] text-underline my-auto ml-[15px]" style={darkMode ? { color: FONT_COLOUR.DARK} : { color: FONT_COLOUR.LIGHT }}>LAN Game Hub</p>
      </div>
      <div className="col-span-1 mx-auto">
        <span className="flex flex-row gap-3 mx-auto mt-[10px]">
          <Calendar2Week size={30} style={darkMode ? { color: FONT_COLOUR.DARK} : { color: FONT_COLOUR.LIGHT }}/>
          <p className="text-[20px]" style={darkMode ? { color: FONT_COLOUR.DARK} : { color: FONT_COLOUR.LIGHT }}>
            {dateState.toLocaleDateString("en-GB", {
              weekday: "long",
              day: "numeric",
              month: "short",
            })}
          </p>{" "}
          <Clock size={30} style={darkMode ? { color: FONT_COLOUR.DARK} : { color: FONT_COLOUR.LIGHT }}/>
          <p className="text-[20px]" style={darkMode ? { color: FONT_COLOUR.DARK} : { color: FONT_COLOUR.LIGHT }}>
            {dateState.toLocaleString("en-GB", {
              hour: "numeric",
              minute: "numeric",
              hour12: false,
            })}
          </p>
        </span>
      </div>
      <div className="col-span-1 justify-self-end self-center">
        <Switch
          onChange={handleDarkModeSwitch}
          checked={darkMode ? true : false}
          onColor="#4ca667"
          onHandleColor="#ffffff"
          handleDiameter={18}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={12}
          width={35}
          className="react-switch mr-[20px]"
          id="material-switch"
        />
      </div>
    </div>
  );
}

export default TitleBar;
