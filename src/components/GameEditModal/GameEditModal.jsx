// libraries
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Fonts, Dice6, Clock, Check2Circle } from 'react-bootstrap-icons';
// files
import editGameModalState from './GameEditModalState';
import { gameToEdit } from './GameEditModalState';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 650,
  bgcolor: 'background.paper',
  p: 2,
  borderRadius: 0.8,
};

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

const GameEditModal = () => {
  const [editModalOpen, setDeleteModalOpen] = useRecoilState(editGameModalState);
  const [gameToEditObject] = useRecoilState(gameToEdit);
  const handleClose = () => setDeleteModalOpen(false);

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (gameToEditObject) {
      setValue('gameId', gameToEditObject.game_id);
      setValue('gameName', gameToEditObject.game_name);
      setValue('gameMode', gameToEditObject.game_mode);
      setValue('gameStartTime', gameToEditObject.game_start_time);
      setValue('gameState', gameToEditObject.game_state);
      setValue('gameImageString', gameToEditObject.game_image_string);
    }
  }, [gameToEditObject, setValue]);

  const [gameState, setGameState] = useState(gameToEditObject.game_state);
  const [gameImageString, setGameImageString] = useState(gameToEditObject.game_image_string);

  const handleCreate = (response) => {
    if (response.status === 200) {
      window.location.reload(false);
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
        method: 'PUT',
        url: 'http://localhost:5134/api/Game',
        headers: {
          'content-type': 'application/json',
        },
        data: {
          game_id: formData.gameId,
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

  const hangleGameImageStringChange = (event) => {
    setGameImageString(event.target.value);
  };

  return (
    <Modal open={editModalOpen} onClose={handleClose}>
      <Box sx={style}>
        <Typography className="text-center" style={{ fontSize: '25px' }}>
          Edit game details
        </Typography>
        <div
          id="game-form-container"
          className="grid grid-cols-6 justify-items-center items-center content-start"
        >
          <div id="game-form" className="col-span-6 w-full mt-[10px]">
            {gameToEditObject.gameName !== '' && (
              <form>
                <Stack className="py-[10px]">
                  <TextField
                    name="gameName"
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
                  <FormControl>
                    <InputLabel id="game-state-select-label">Game State</InputLabel>
                    <Select
                      labelId="game-state-select-label"
                      onChange={handleGameStateChange}
                      defaultValue={''}
                      value={gameState}
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
                    <InputLabel id="game-image-string-select-label">Game Image String</InputLabel>
                    <Select
                      labelId="game-image-string-select-label"
                      onChange={hangleGameImageStringChange}
                      defaultValue={''}
                      value={gameImageString}
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
                      backgroundColor: '#ffffff',
                      '&:hover': {
                        backgroundColor: '#bfbebd',
                      },
                      color: 'black',
                      fontWeight: 'bold',
                      width: 120,
                      height: 45,
                    }}
                    onClick={() => handleClose()}
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
                      width: 120,
                      height: 45,
                    }}
                    endIcon={<Check2Circle />}
                    onClick={handleSubmit(onSubmit)}
                  >
                    Save
                  </Button>
                </Stack>
              </form>
            )}
          </div>
        </div>

        <div className="flex justify-between mx-[20px] mt-[20px]"></div>
      </Box>
    </Modal>
  );
};

export default GameEditModal;
