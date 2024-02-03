// libraries
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import { Fonts, Dice6, Clock, PlusCircle } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
// context
import ThemeContext from '../components/ThemeContext/ThemeContext';
import UserContext from '../components/UserContext/UserContext';
// files
import TitleBar from '../components/TitleBar/TitleBar';
import SideBar from '../components/SideBar/SideBar';
import { USER_TYPE } from '../components/UserContext/UserTypes';
// styles
import { BACKGROUND, FONT_COLOUR } from '../components/Theme/Colours';
import '../TimelineScrollbar.css';
import '../index.css';
import '../App.css';

const gameStateType = ['INPROGRESS', 'UPNEXT', 'INQUEUE', 'FINISHED'];

const gameImageStringOptions = [
  'apex-banner.jpg',
  'cs2-banner.jpg',
  'lol-banner.jpg',
  'rl-banner.jpg',
  'tf2-banner.jpg',
  'smash-bros-ultimate-banner.jpg',
  'poker-banner.jpg',
  'board-games-banner.jpg',
  'pubg-banner.jpg',
  'cod-warzone-banner.jpg',
  'the-finals-banner.jpg',
  'dota2-banner.jpg',
  'dawn-of-war-banner.jpg',
  'toybox-turbos-banner.jpg',
  'splitgate-banner.jpg',
  'overwatch-2-banner.jpg',
  'valorant-banner.jpg',
  'team-fight-tactics-banner.jpg',
  'starcraft-2-banner.jpg',
  'gta-5-banner.jpg',
  'rainbow-six-siege-banner.jpg',
  'halo-banner.jpg',
  'fall-guys-banner.jpg',
  'trackmania-banner.jpg',
  'hell-let-loose-banner.jpg',
  'street-fighter-banner.jpg',
  'mortal-kombat-banner.jpg',
  'nidhogg-2-banner.jpg',
  'human-fall-flat-banner.jpg',
  'chivalry-2-banner.jpg',
  'mordhau-banner.jpg',
  'valheim-banner.jpg',
  'sea-of-thieves-banner.jpg',
  'castle-crashers-banner.jpg',
  'dead-by-daylight-banner.jpg',
  'jackbox-banner.jpg',
  'brawlhalla-banner.jpg',
  'killing-floor-2-banner.jpg',
  'among-us-banner.jpg',
  'half-life-2-deathmatch-banner.jpg',
  'f1-2022-banner.jpg',
  'wreckfest-banner.jpg',
  'ut2004-banner.jpg',
  'civ-6-banner.jpg',
  'civ-5-banner.jpg',
  'blood-bowl-3-banner.jpg',
  'slapshot-rebound-banner.jpg',
  'left-4-dead-2-banner.jpg',
  'age-of-empires-2-banner.jpg',
  'golf-it-banner.jpg',
  'golf-with-your-friends-banner.jpg',
  'default-banner.jpg',
];

const AddGame = () => {
  const { darkMode } = useContext(ThemeContext);
  const { userRole, userName } = useContext(UserContext);
  const navigate = useNavigate();

  const [gameState, setGameState] = useState();
  const [gameImageString, setGameImageString] = useState();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const handleCreate = (response) => {
    if (response.status === 200) {
      navigate('/admin');
    }
  };

  const handleFailedCreate = (error) => {
    console.log(error);
    if ((error.response.status === 400) & (error.response.statusText === 'Bad Request')) {
      setError('gameImageString', {
        types: {
          failedCreate: 'Bad Request 400 error',
        },
      });
    }
    if ((error.response.status === 500) & (error.response.statusText === 'Internal Server Error')) {
      setError('gameImageString', {
        types: {
          failedCreate: 'Server error 500',
        },
      });
    }
  };

  const authenticateCall = (formData) => {
    try {
      axios({
        method: 'POST',
        url: `${import.meta.env.VITE_API_ADDRESS}Game`,
        headers: {
          'content-type': 'application/json',
        },
        data: {
          game_id: 0,
          game_name: formData.gameName,
          game_mode: formData.gameMode,
          game_start_time: formData.gameStartTime,
          game_state: formData.gameState,
          game_image_string: formData.gameImageString,
        },
      })
        .then((response) => handleCreate(response))
        .catch((error) => handleFailedCreate(error));
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (data) => {
    authenticateCall(data);
  };

  const handleGameStateChange = (event) => {
    setGameState(event.target.value);
  };

  const handleGameImageStringChange = (event) => {
    setGameImageString(event.target.value);
  };

  if (userRole === USER_TYPE.ADMIN && userName != null) {
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
              id="game-form-container"
              className="grid grid-cols-6 justify-items-center items-center content-start"
            >
              <div className="col-span-1" />
              <div id="game-form" className="col-span-4 w-full mt-[100px]">
                <form>
                  <Typography
                    className="py-[10px] text-center"
                    style={darkMode ? { color: FONT_COLOUR.DARK } : { color: FONT_COLOUR.LIGHT }}
                  >
                    Add a game to the schedule
                  </Typography>

                  <Stack className="py-[10px]">
                    <TextField
                      label="Game Name"
                      variant="outlined"
                      placeholder="Game name"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Fonts
                              size={30}
                              color={darkMode ? FONT_COLOUR.DARK : FONT_COLOUR.LIGHT}
                            />
                          </InputAdornment>
                        ),
                      }}
                      sx={
                        darkMode
                          ? {
                              '& .MuiFormLabel-root': {
                                color: FONT_COLOUR.DARK,
                              },
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: FONT_COLOUR.DARK,
                              },
                              '& .MuiOutlinedInput-root': {
                                color: FONT_COLOUR.DARK,
                                '&:hover fieldset': {
                                  borderColor: FONT_COLOUR.DARK,
                                },
                              },
                            }
                          : {}
                      }
                      {...register('gameName', { required: true })}
                    />
                    {errors.gameName?.type === 'required' && (
                      <p className="text-red">Game name is required</p>
                    )}
                  </Stack>

                  <Stack className="py-[10px]">
                    <TextField
                      label="Game Mode"
                      variant="outlined"
                      placeholder="Game mode"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Dice6
                              size={20}
                              color={darkMode ? FONT_COLOUR.DARK : FONT_COLOUR.LIGHT}
                            />
                          </InputAdornment>
                        ),
                      }}
                      sx={
                        darkMode
                          ? {
                              '& .MuiFormLabel-root': {
                                color: FONT_COLOUR.DARK,
                              },
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: FONT_COLOUR.DARK,
                              },
                              '& .MuiOutlinedInput-root': {
                                color: FONT_COLOUR.DARK,
                                '&:hover fieldset': {
                                  borderColor: FONT_COLOUR.DARK,
                                },
                              },
                            }
                          : {}
                      }
                      {...register('gameMode', { required: true })}
                    />
                    {errors.gameMode?.type === 'required' && (
                      <p className="text-red">Game Mode is required</p>
                    )}
                  </Stack>

                  <Stack className="py-[10px]">
                    <TextField
                      label="Game Start Time"
                      variant="outlined"
                      placeholder="Game Start Time"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Clock
                              size={20}
                              color={darkMode ? FONT_COLOUR.DARK : FONT_COLOUR.LIGHT}
                            />
                          </InputAdornment>
                        ),
                      }}
                      sx={
                        darkMode
                          ? {
                              '& .MuiFormLabel-root': {
                                color: FONT_COLOUR.DARK,
                              },
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: FONT_COLOUR.DARK,
                              },
                              '& .MuiOutlinedInput-root': {
                                color: FONT_COLOUR.DARK,
                                '&:hover fieldset': {
                                  borderColor: FONT_COLOUR.DARK,
                                },
                              },
                            }
                          : {}
                      }
                      {...register('gameStartTime', { required: true })}
                    />
                    {errors.gameStartTime?.type === 'required' && (
                      <p className="text-red">Game Start Time is required</p>
                    )}
                  </Stack>

                  <Stack className="py-[10px]">
                    <FormControl>
                      <InputLabel
                        id="game-state-select-label"
                        style={
                          darkMode ? { color: FONT_COLOUR.DARK } : { color: FONT_COLOUR.LIGHT }
                        }
                      >
                        Game State
                      </InputLabel>
                      <Select
                        labelId="game-state-select-label"
                        onChange={handleGameStateChange}
                        defaultValue={''}
                        value={gameState}
                        style={
                          darkMode ? { color: FONT_COLOUR.DARK } : { color: FONT_COLOUR.LIGHT }
                        }
                        sx={
                          darkMode
                            ? {
                                '.MuiOutlinedInput-notchedOutline': {
                                  borderColor: FONT_COLOUR.DARK,
                                },
                                '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                  borderColor: FONT_COLOUR.DARK,
                                },
                              }
                            : {}
                        }
                        {...register('gameState', { required: true })}
                      >
                        {gameStateType.map((gameOption) => (
                          <MenuItem value={gameOption} key={gameOption}>
                            {gameOption}
                          </MenuItem>
                        ))}
                      </Select>
                      {errors.gameState?.type === 'required' && (
                        <p className="text-red">Game State is required</p>
                      )}
                    </FormControl>
                  </Stack>

                  <Stack className="py-[10px]">
                    <FormControl>
                      <InputLabel
                        id="game-image-string-select-label"
                        style={
                          darkMode ? { color: FONT_COLOUR.DARK } : { color: FONT_COLOUR.LIGHT }
                        }
                      >
                        Game Image String
                      </InputLabel>
                      <Select
                        labelId="game-image-string-select-label"
                        onChange={handleGameImageStringChange}
                        defaultValue={''}
                        value={gameImageString}
                        style={
                          darkMode ? { color: FONT_COLOUR.DARK } : { color: FONT_COLOUR.LIGHT }
                        }
                        sx={
                          darkMode
                            ? {
                                '.MuiOutlinedInput-notchedOutline': {
                                  borderColor: FONT_COLOUR.DARK,
                                },
                                '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                  borderColor: FONT_COLOUR.DARK,
                                },
                              }
                            : {}
                        }
                        {...register('gameImageString', { required: true })}
                      >
                        {gameImageStringOptions.map((gameImageOption) => (
                          <MenuItem value={gameImageOption} key={gameImageOption}>
                            {gameImageOption}
                          </MenuItem>
                        ))}
                      </Select>
                      {errors.gameImageString?.type === 'required' && (
                        <p className="text-red">Game Image String is required</p>
                      )}
                      {errors.gameImageString && errors.gameImageString.types && (
                        <p>{errors.gameImageString.types.failedCreate}</p>
                      )}
                    </FormControl>
                  </Stack>

                  <Stack className="py-[10px] flex flex-row justify-between">
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#f77474',
                        '&:hover': {
                          backgroundColor: '#c45858',
                        },
                        color: 'black',
                        fontWeight: 'bold',
                        width: 150,
                        height: 45,
                      }}
                      onClick={() => navigate('/admin')}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#95edad',
                        '&:hover': {
                          backgroundColor: '#80c492',
                        },
                        color: 'black',
                        fontWeight: 'bold',
                        width: 150,
                        height: 45,
                      }}
                      endIcon={<PlusCircle size={18} />}
                      onClick={handleSubmit(onSubmit)}
                    >
                      Add Game
                    </Button>
                  </Stack>
                </form>
              </div>
              <div className="col-span-1" />
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default AddGame;
