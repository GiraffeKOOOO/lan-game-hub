// libraries
import { Button } from '@mui/material';
import { Trash, PencilSquare } from 'react-bootstrap-icons';
import { useRecoilState } from 'recoil';
// files
import deleteGameModalState from '../GameDeleteModal/GameDeleteModalState';
import { gameToDelete } from '../GameDeleteModal/GameDeleteModalState';
import editGameModalState from '../GameEditModal/GameEditModalState';
import { gameToEdit } from '../GameEditModal/GameEditModalState';

const GameListItem = ({ game, action }) => {
  const pathToAssets = '/src/assets/images/';
  const [, setGameDeleteModalOpen] = useRecoilState(deleteGameModalState);
  const [, setGameToDelete] = useRecoilState(gameToDelete);
  const [, setGameEditModalOpen] = useRecoilState(editGameModalState);
  const [, setGameToEdit] = useRecoilState(gameToEdit);

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
      {action === 'edit' && (
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#9ac9f5',
            '&:hover': {
              backgroundColor: '#83aed6',
            },
            color: 'black',
            fontWeight: 'bold',
            width: 120,
            height: 45,
          }}
          endIcon={<PencilSquare />}
          onClick={() => (setGameEditModalOpen(true), setGameToEdit(game))}
        >
          Edit
        </Button>
      )}
    </div>
  );
};

export default GameListItem;
