// libraries
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, PencilSquare, Trash } from 'react-bootstrap-icons';

const AdminPageButton = ({ action }) => {
  const navigate = useNavigate();

  switch (action) {
    case 'Add':
      return (
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#95edad',
            '&:hover': {
              backgroundColor: '#80c492',
            },
            color: 'black',
            fontSize: 30,
            height: 200,
            width: 400,
          }}
          endIcon={<PlusCircle size={30} />}
          onClick={() => navigate('/addgame')}
        >
          Add Game
        </Button>
      );
    case 'Edit':
      return (
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#9ac9f5',
            '&:hover': {
              backgroundColor: '#83aed6',
            },
            color: 'black',
            fontSize: 30,
            height: 200,
            width: 400,
          }}
          endIcon={<PencilSquare size={30} />}
          onClick={() => navigate('/editgame')}
        >
          Edit Games
        </Button>
      );
    case 'Delete':
      return (
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#f77474',
            '&:hover': {
              backgroundColor: '#c45858',
            },
            color: 'black',
            fontSize: 30,
            height: 200,
            width: 400,
          }}
          endIcon={<Trash size={30} />}
          onClick={() => navigate('/deletegame')}
        >
          Delete Games
        </Button>
      );
  }
};

export default AdminPageButton;
