// libraries
import { Button } from '@mui/material';
import { Trash } from 'react-bootstrap-icons';
import { useRecoilState } from 'recoil';
// import axios from 'axios';
// files
import deleteGameModalState from '../GameDeleteModal/GameDeleteModalState';
import gameToDelete from '../GameDeleteModal/GameDeleteModalState';

const GameListItem = ({ game, action }) => {
  const pathToAssets = '/src/assets/images/';
  const [, setGameDeleteModalOpen] = useRecoilState(deleteGameModalState);
  const [, setGameToDelete] = useRecoilState(gameToDelete);

  return (
    <div className="py-[5px] grid grid-cols-7 bg-slate-400 rounded-md text-center text-bold text-white border-gray-500 border-1 shadow-xl my-[10px]">
      <p className="my-auto text-[15px]">{game.game_id}</p>
      <p className="my-auto text-[15px]">{game.game_name}</p>
      <p className="my-auto text-[15px]">{game.game_mode}</p>
      <p className="my-auto text-[15px]">{game.game_start_time}</p>
      <p className="my-auto text-[15px]">{game.game_state}</p>
      <img
        className="my-auto text-[15px] w-[120px] h-[50px]"
        src={`${pathToAssets}${game.game_image_string}`}
      />
      {action === 'delete' && (
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
          onClick={() => (setGameDeleteModalOpen(true), setGameToDelete(game))}
        >
          Delete
        </Button>
      )}
    </div>
  );
};

export default GameListItem;
