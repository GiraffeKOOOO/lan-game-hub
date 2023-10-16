// libraries
import { Button } from '@mui/material';
import { BoxArrowLeft } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
// styles
import { FONT_COLOUR } from '../Theme/Colours';

const handleLogout = (navigate) => {
  window.localStorage.clear();
  navigate('/');
  window.location.reload(false);
};

const LogoutButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#9c27b0',
        '&:hover': {
          backgroundColor: '#882299',
        },
        color: FONT_COLOUR.DARK,
        fontWeight: 'bold',
        width: 130,
        height: 45,
      }}
      startIcon={<BoxArrowLeft />}
      onClick={() => handleLogout(navigate)}
    >
      Log out
    </Button>
  );
};

export default LogoutButton;
