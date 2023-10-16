// libraries
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { Box, Button, Modal, Typography } from '@mui/material';
import { Trash } from 'react-bootstrap-icons';
// files
import gameDeleteModalState from './GameDeleteModalState';
import gameToDelete from './GameDeleteModalState';

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

const handleSuccessfulDelete = (response) => {
  if (response.status === 200) {
    window.location.reload(false);
  }
};

const handleDeleteGame = (gameId) => {
  try {
    axios
      .delete(`http://localhost:5134/api/Game/${gameId}`)
      .then((response) => handleSuccessfulDelete(response))
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
};

const GameDeleteModal = () => {
  const [deleteModalOpen, setDeleteModalOpen] = useRecoilState(gameDeleteModalState);
  const [gameToDeleteObject] = useRecoilState(gameToDelete);
  const handleClose = () => setDeleteModalOpen(false);

  return (
    <Modal open={deleteModalOpen} onClose={handleClose}>
      <Box sx={style}>
        <Typography className="text-center" style={{ fontSize: '25px' }}>
          Delete game from schedule?
        </Typography>
        <div className="py-[4px] my-[10px] grid grid-cols-5 bg-slate-500 rounded-md text-center border-gray-600 border-1 text-white shadow-xl">
          <p className="my-auto">Game ID</p>
          <p className="my-auto">Game Name</p>
          <p className="my-auto">Game Mode</p>
          <p className="my-auto">Game Start Time</p>
          <p className="my-auto">Game State</p>
        </div>
        <div className="py-[4px] grid grid-cols-5 bg-slate-400 rounded-md text-center text-bold text-white border-gray-500 border-1 shadow-xl my-[5px]">
          <p className="my-auto">{gameToDeleteObject.game_id}</p>
          <p className="my-auto">{gameToDeleteObject.game_name}</p>
          <p className="my-auto">{gameToDeleteObject.game_mode}</p>
          <p className="my-auto">{gameToDeleteObject.game_start_time}</p>
          <p className="my-auto">{gameToDeleteObject.game_state}</p>
        </div>
        <div className="flex justify-between mx-[20px] mt-[20px]">
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
              backgroundColor: '#f77474',
              '&:hover': {
                backgroundColor: '#c45858',
              },
              color: 'black',
              fontWeight: 'bold',
              width: 120,
              height: 45,
            }}
            endIcon={<Trash />}
            onClick={() => handleDeleteGame(gameToDeleteObject.game_id)}
          >
            Delete
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default GameDeleteModal;
