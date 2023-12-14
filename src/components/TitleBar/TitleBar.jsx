// libraries
import { useState, useEffect, useContext } from 'react';
import { Calendar2Week, Clock, BrightnessHighFill, MoonFill } from 'react-bootstrap-icons';
import Switch from 'react-switch';
// context
import ThemeContext from '../ThemeContext/ThemeContext';
// styles
import { FONT_COLOUR } from '../Theme/Colours';

function TitleBar() {
  const { darkMode, enableDarkMode, disableDarkMode } = useContext(ThemeContext);
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDateState(new Date());
    }, 60000);
  }, []);

  const handleDarkModeSwitch = () => {
    if (darkMode) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  };

  return (
    <div className="grid grid-cols-3 my-[10px]">
      <div className="col-span-1">
        <p
          className="text-[30px] text-underline my-auto ml-[15px]"
          style={darkMode ? { color: FONT_COLOUR.DARK } : { color: FONT_COLOUR.LIGHT }}
        >
          LAN Game Hub
        </p>
      </div>
      <div
        className="col-span-1 mx-auto"
        style={{
          border: `1px solid`,
          borderRadius: '0.5rem',
          padding: '0 1rem 0.5rem 1rem',
          borderColor: `${darkMode ? FONT_COLOUR.DARK : FONT_COLOUR.LIGHT}`,
        }}
      >
        <span className="flex flex-row gap-3 mx-auto mt-[10px]">
          <Calendar2Week
            size={30}
            style={darkMode ? { color: FONT_COLOUR.DARK } : { color: FONT_COLOUR.LIGHT }}
          />
          <p
            className="text-[20px]"
            style={darkMode ? { color: FONT_COLOUR.DARK } : { color: FONT_COLOUR.LIGHT }}
          >
            {dateState.toLocaleDateString('en-GB', {
              weekday: 'long',
              day: 'numeric',
              month: 'short',
            })}
          </p>
          <div
            style={{
              width: '1px',
              height: 'auto',
              borderLeft: '1px solid',
              borderColor: `${darkMode ? FONT_COLOUR.DARK : FONT_COLOUR.LIGHT}`,
            }}
          />
          <Clock
            size={30}
            style={darkMode ? { color: FONT_COLOUR.DARK } : { color: FONT_COLOUR.LIGHT }}
          />
          <p
            className="text-[20px]"
            style={darkMode ? { color: FONT_COLOUR.DARK } : { color: FONT_COLOUR.LIGHT }}
          >
            {dateState.toLocaleString('en-GB', {
              hour: 'numeric',
              minute: 'numeric',
              hour12: false,
            })}
          </p>
        </span>
      </div>
      <div className="col-span-1 justify-self-end self-center my-auto">
        {darkMode ? (
          <MoonFill size={25} style={{ color: FONT_COLOUR.DARK }} className="ml-[11px]" />
        ) : (
          <BrightnessHighFill size={25} className="ml-[8px]" />
        )}
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
          className="react-switch mr-[20px] mt-[5px]"
          id="material-switch"
        />
      </div>
    </div>
  );
}

export default TitleBar;
