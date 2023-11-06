// libraries
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Button, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import {
  Fonts,
  Dice6,
  Clock,
  Stack as StackIcon,
  FileEarmarkImage,
  PlusCircle,
} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
// context
import ThemeContext from '../components/ThemeContext/ThemeContext';
import UserContext from '../components/UserContext/UserContext';
// files
import TitleBar from '../components/TitleBar/TitleBar';
import SideBar from '../components/SideBar/SideBar';
import { USER_TYPE } from '../components/UserContext/UserTypes';
// styles
import { BACKGROUND } from '../components/Theme/Colours';
import '../TimelineScrollbar.css';
import '../index.css';
import '../App.css';

const AddGame = () => {
  const { darkMode } = useContext(ThemeContext);
  const { userRole, userName } = useContext(UserContext);
  const navigate = useNavigate();

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
        url: 'http://localhost:5134/api/Game',
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
    // setLoginLoading(true);
    authenticateCall(data);
  };

  if (userRole === USER_TYPE.ADMIN && userName !== null) {
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
                  <Typography className="py-[10px] text-center">
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
                            <Fonts size={30} />
                          </InputAdornment>
                        ),
                      }}
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
                            <Dice6 size={20} />
                          </InputAdornment>
                        ),
                      }}
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
                            <Clock size={20} />
                          </InputAdornment>
                        ),
                      }}
                      {...register('gameStartTime', { required: true })}
                    />
                    {errors.gameStartTime?.type === 'required' && (
                      <p className="text-red">Game Start Time is required</p>
                    )}
                  </Stack>

                  <Stack className="py-[10px]">
                    <TextField
                      label="Game State"
                      variant="outlined"
                      placeholder="Game State"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <StackIcon />
                          </InputAdornment>
                        ),
                      }}
                      {...register('gameState', { required: true })}
                    />
                    {errors.gameState?.type === 'required' && (
                      <p className="text-red">Game State is required</p>
                    )}
                  </Stack>

                  <Stack className="py-[10px]">
                    <TextField
                      label="Game Image String"
                      variant="outlined"
                      placeholder="Game Image String"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FileEarmarkImage size={20} />
                          </InputAdornment>
                        ),
                      }}
                      {...register('gameImageString', { required: true })}
                    />
                    {errors.gameImageString?.type === 'required' && (
                      <p className="text-red">Game Image String is required</p>
                    )}
                    {errors.gameImageString && errors.gameImageString.types && (
                      <p>{errors.gameImageString.types.failedCreate}</p>
                    )}
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
